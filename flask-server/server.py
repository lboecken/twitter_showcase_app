from crypt import methods
from distutils.log import debug
import json
from flask import Flask, jsonify, send_from_directory
import requests



app = Flask(__name__, static_folder="../build/")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/serve")
def search():
    
    try:
        r = requests.get("http://swapi.dev/api/people/1233223/")
        data = r.json()
        name = data["name"]
        eye_color = data["eye_color"]
        hair_color = data["hair_color"]
        return jsonify({"name": name, "eye_color": eye_color, "hair_color": hair_color})
    except:
        
        return "Something Went Wrong..."

    






if __name__ == '__main__': 
    app.run(debug=True)