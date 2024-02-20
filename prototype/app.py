from flask import Flask, request, render_template
from search import search_db
from search import create_uploaded_embeddings

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('search.html')

@app.route('/search', methods=['POST'])
def search():
    if request.method == 'POST':
        # Get the search term from the form
        search_term = request.form['search_term']
        
        # Search the database
        results = search_db(search_term)
        print(results)

        return render_template('search.html', image_filenames=results)
    
@app.route('/uploadImg', methods=['POST'])
def uploadImg():
    if 'myFile' in request.files:
        uploaded_image = request.files['myFile']
        print ("got here")

        create_uploaded_embeddings(uploaded_image)

        return "Thank you for uploading an image"

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False, host='0.0.0.0', port=5000)

