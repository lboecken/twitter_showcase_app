#This will be the server

from distutils.log import debug
from livereload import Server
from flask import Flask

app = Flask(__name__)

@app.route("/")
def HelloWorld():
    return "App is running fgfgfgfgf"

if __name__ == '__main__': 
    server = Server(app.wsgi_app)
    server.serve()
    app.run('0.0.0.0', 5000, debug=True)
    

