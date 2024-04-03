from sentence_transformers import SentenceTransformer, util
from PIL import Image
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct
import glob
from tqdm import tqdm
import os

def get_filenames():
    files = glob.glob('public/animals/**/*.jpg',  
                   recursive = True) 
    return files

# def retrieve_matches(hits):
#     matches = []
#     for hit in hits:
#         matches.append({"filepath": hit.payload["filepath"], "caption": hit.payload.get("caption", "Caption not found")})
#     return matches

def retrieve_matches(hits):
    filenames = []
    filedesc = []
    for hit in hits:
        filenames.append(hit.payload["filepath"])
        if "caption" in hit.payload:
            #filenames[-1] += "desc:" + hit.payload["caption"]
            filedesc.append(hit.payload["caption"])
        else:
            #filenames[-1] += "&desc:from COCO dataset"
            filedesc.append("from COCO dataset")
    return filenames, filedesc

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

def search_db(query, client, model):

    text_emb = model.encode(query)

    hits = client.search(
        collection_name="animal_images",
        query_vector=text_emb,
        limit=20
    )

    return retrieve_matches(hits)




def create_uploaded_embeddings(image, caption, client, model):

    print("attempting upload")

    #client.recreate_collection(
    #    collection_name="animal_images",
    #    vectors_config=VectorParams(size=512, distance=Distance.COSINE),
    #)

    vectors = []

    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    save_path = os.path.join(BASE_DIR, 'public', 'animals', 'uploadedByUser')
    os.makedirs(save_path, exist_ok=True)
    image.save(os.path.join(save_path, image.filename))


    print("saved image")
    allpics = len(get_filenames())
    #for f in tqdm(get_filenames()):
    img_emb = model.encode(Image.open('public/animals/uploadedByUser/'+image.filename))
    vectors.append(['public/animals/uploadedByUser/'+image.filename, img_emb])

    client.upsert(
        collection_name="animal_images",
        points=[
            PointStruct(
                id=allpics,
                vector=vector[1].tolist(),
                payload={"filepath": vector[0], "caption": caption},
                # payload={"filepath": vector[0]}
            )
            for idx, vector in enumerate(vectors)
        ]
    )
    print("attempted upload")