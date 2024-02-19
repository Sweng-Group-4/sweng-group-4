from sentence_transformers import SentenceTransformer, util
from PIL import Image
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct
import glob
from tqdm import tqdm

def get_filenames():
    files = glob.glob('static/animals/**/*.jpg',  
                   recursive = True) 
    return files

def retrieve_matches(hits):
    filenames = []
    for hit in hits:
        filenames.append(hit.payload["filepath"])
    return filenames

def create_embeddings():

    client = QdrantClient(path="vector_db")
    model = SentenceTransformer('clip-ViT-B-32')

    client.recreate_collection(
        collection_name="animal_images",
        vectors_config=VectorParams(size=512, distance=Distance.COSINE),
    )

    vectors = []

    for f in tqdm(get_filenames()):
        img_emb = model.encode(Image.open(f))
        vectors.append([f, img_emb])

    client.upsert(
        collection_name="animal_images",
        points=[
            PointStruct(
                id=idx,
                vector=vector[1].tolist(),
                payload={"filepath": vector[0]},
            )
            for idx, vector in enumerate(vectors)
        ]
    )

def search_db(query):
    client = QdrantClient(path="vector_db")
    model = SentenceTransformer('clip-ViT-B-32')

    text_emb = model.encode(query)

    hits = client.search(
        collection_name="animal_images",
        query_vector=text_emb,
        limit=20
    )

    return retrieve_matches(hits)

# embed uploaded file

def embed_upload(upload):
    # tweaking to embed just the uploaded file rather than entire animal dataset
    client = QdrantClient(path="vector_db")
    model = SentenceTransformer('clip-ViT-B-32')
    
    client.recreate_collection (
        collection_name = "animal_images", # collection to create or recreate
        vectors_config=VectorParams(size=512, distance=Distance.COSINE)
    )
    
    image_path = upload
    file_emb = model.encode(Image.open(image_path))
    
    client.upsert (
        collection_name="animal_images",
        points=[
            PointStruct(
                id=1,           #assign a unique ID for the image
                vector=file_emb.tolist(),
                payload={"filepath": image_path}
        )]
    )
    
    # vectors.append([vector.length, file_emb])
    # add new embedded file to the vector
    
    # after embedded and added to vector, display a message "upload complete, added to dataset"
    