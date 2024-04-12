from flask import Flask, request, render_template, jsonify
from search import search_db
from search import create_uploaded_embeddings
from PIL import Image
from flask_cors import CORS
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct
from sentence_transformers import SentenceTransformer, util
import glob
from tqdm import tqdm
import os

app = Flask(__name__)
CORS(app)

client = QdrantClient(path="vector_db")
model = SentenceTransformer('clip-ViT-B-32')

@app.route('/')
def index():
    return render_template('search.html')

# gets the search term from the frontend form 
# searches database using 'search_db'
#   'search_term' gets passed in
# file paths include '/static/public/' instead of just 'public/'
# renders template 'search.html'
#   modified search results get passed as 'image_filenames'

@app.route('/search', methods=['POST'])
def search():
    if request.method == 'POST':
        # Get the search term from the form
        search_term = request.form['search_term']
        
        # Search the database
        results = search_db(search_term, client, model)
        new_results = []
        
        for result in results:
            print(result)
            result = result.replace('public/', '/static/public/')
            new_results.append(result)

        return render_template('search.html', image_filenames=new_results)
    
#temp for frontend testing
# retrives 'parameter' from front end request
# passes 'search_term' into search_db
#   returns 'resultfiles' which contains file paths
#   returns 'resultcaptions' which contains captions
# json file contains keys 'file' and 'caption'

@app.route('/search_frontend', methods=['GET'])
def search_frontend():
    search_term = request.args.get('parameter')
     #= 'puppy'
    resultsfiles, resultscaptions = search_db(search_term, client, model)
    return jsonify({'file': resultsfiles, 'caption': resultscaptions})

# prints debug statement to console
#  returns temp
# previous version:
#   retrieved image path from selected image to enlarge
#   if image path exists
#       get matches from searching using search_db with the image path
#       as a parameter
#
#       if there is a match, caption is retrieved from the vector
#        gets assigned to caption variable
#        returns a json response with key 'caption'
#           maps to value of 'caption' variable

# 
@app.route('/getCaption', methods=['GET'])
def get_image_caption():
    print("reached getCaption")
    #if request.method == 'GET':
    #    image_path = request.args.get('imagePath')
    #    caption = None
    #    if image_path:
            # Call search_db function to retrieve matches
    #        matches = search_db(image_path)
    #        if matches:
                # Extract the caption from the payload of the first match
    #            caption = matches[0]["caption"]
    #    return jsonify({'caption': caption})
    return "temp"

# if there has been a file uploaded
#   retrieve the uploaded file named 'myFile'
#   extract the caption from the text box on frontend
#   prints debug statement to console
#   prints caption from user to console
#   calls create_uploaded_embedding
#       embeds the uploaded image and appends the caption
#     
@app.route('/uploadImg', methods=['POST'])
def uploadImg():
    try:
        if 'myFile' in request.files:
            uploaded_image = request.files['myFile']
            # adding caption from form data
            caption = request.form.get('description')
            print ("got a caption")
            print(caption)

            create_uploaded_embeddings(uploaded_image, caption, client, model)

            return 'Success', 200
    except Exception as e:
        print(e)
        return 'Error', 500

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False, host='0.0.0.0', port=5000)

