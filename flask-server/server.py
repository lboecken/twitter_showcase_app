#This will be the server
from distutils.log import debug
from flask import Flask, request, send_from_directory

app = Flask(__name__, static_folder="../build/")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__': 
    app.run(debug=True)