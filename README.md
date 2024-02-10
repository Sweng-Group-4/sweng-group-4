# sweng-group-4
Shutterstock - AI Powered Multilingual Image Search

## How to run the prototype
Download the sample animal images dataset [here](https://www.kaggle.com/datasets/iamsouravbanerjee/animal-image-dataset-90-different-animals/download?datasetVersionNumber=5).

Unzip it and move the /animals/animals folder to inside a new folder inside prototype called "static"

Run the following command to install the requirements:

```
pip install -r requirements.txt
```

Run the following command to embed the images (this will take a few minutes):

```
python embed_images.py
```

Run the following command to start the web server:

```
python app.py
```

Then go to:

```
http://127.0.0.1:5000
```

In the browser to view the prototype.
