#This will be the server
from distutils.log import debug
from flask import Flask, request, send_from_directory

app = Flask(__name__,static_url_path='/../static/build/index.html')

@app.route("/")
def send_js(path):
    return send_from_directory('js',path)

if __name__ == '__main__': 
    app.run('0.0.0.0', 5000, debug=True)
    

