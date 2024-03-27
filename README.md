# sweng-group-4
Shutterstock - AI Powered Multilingual Image Search

## How to run:

Firstly, clone the repository to your device.

Download the sample animal images dataset [here](https://www.kaggle.com/datasets/iamsouravbanerjee/animal-image-dataset-90-different-animals/download?datasetVersionNumber=5).

Unzip it, and move the animals/animals/ folder to

```
sweng-group-4/public/
```

Double check the path is correct, for example, you should find the dogs/ images folder at

```
sweng-group-4/public/animals/animals/dogs/
```

In the base repo directory (sweng-group-4/), run the following command to install the requirements:

```
pip install -r requirements.txt
```

Then, run the following command to embed the images (this will take a few minutes):

```
python embed_images.py
```

Now, run the following command to start the backend:

```
python app.py
```

Then, cd to

```
src/
```

If you haven't done so already, install dependancies for the frontend:

```
npm install
```

To run the frontend, run:

```
npm start
```

In the browser a page should open to view the project.

## Project Features

### Search Images

Using the side nav bar, you can head to the search page. From here, you can search our temporary database of animals. For good queries, we suggest:

1. "angry animal"
2. "water animal"
3. "a photo of a cat"

### Upload Images

Using the side nav bar, you can head to the upload page. Select a photo from your local device, add a user caption describing the photo, and then press upload. You can then search for your uploaded photo using the search page.
