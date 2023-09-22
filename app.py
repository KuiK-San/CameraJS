from flask import Flask, request, jsonify, render_template, url_for
from werkzeug.serving import run_simple
import os
import base64
import random

def criarId():
    id = ""
    for i in range(6):
        id = f'{id}{random.randint(0,9)}'
    return id

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html', marcelo = url_for('static', filename="script.js"))

@app.route('/salvar-imagem', methods=['POST'])
def salvar_imagem():
    img_data = request.json['imgData']

    base64_data = img_data.replace('data:image/png;base64,', '')
    file_name = f'{criarId()}.png'
    file_path = os.path.join(os.getcwd(), file_name)

    with open(file_path, 'wb') as f:
        f.write(base64.b64decode(base64_data))
    
    return 'Imagem Salva com sucesso.'


if __name__ == "__main__":
    certificado = './localhost.pem'
    key = './localhost-key.pem'
    app.run(host='0.0.0.0', debug=True)