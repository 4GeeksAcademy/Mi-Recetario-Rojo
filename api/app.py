from flask import Flask
import psycopg2
from minio import Minio

app = Flask(__name__)

# PostgreSQL configuration
postgres_config = {
    'dbname': 'example',
    'user': 'youruser',
    'password': 'yourpassword',
    'host': 'postgres',  # Nombre del servicio en tu docker-compose.yml
    'port': '5432'
}

# MinIO configuration
minio_client = Minio(
    "minio",
    access_key='yourminioaccesskey',
    secret_key='yourminiosecretkey',
    secure=False
)

@app.route('/')
def hello():
    # Use the PostgreSQL connection and MinIO client here
    return "Hello from Flask!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
