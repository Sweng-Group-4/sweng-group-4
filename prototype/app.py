from flask import Flask, request, render_template
from search import search_db
from search import embed_upload
import requests
import io

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
    
# for uploading file
@app.route('/action_page.php', methods=['POST'])
def embed():
    if request.method == 'POST':
        
        # I don't think I'm grabbing the actual file, also I don't have the correct file path rn
        file = {'filename': open('filename', 'rb')} # instead of filename, should be path to file?
        
        upload = requests.post('http://127.0.0.1:5000/action_page.php', files = file)
        if upload.status_code == 200:
            print(filename)
        else:
            print('request failed with status code:', upload.status_code)
        
        
    
            
            # upload = embed_upload(filename)
        return render_template('search.html', image_filenames=filename)

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False, host='0.0.0.0', port=5000)
