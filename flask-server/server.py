from crypt import methods
from distutils.log import debug
import json
from flask import Flask, jsonify, request, send_from_directory
import requests



app = Flask(__name__, static_folder="../static")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')



twitter_bearer_token = "Bearer AAAAAAAAAAAAAAAAAAAAAAZ1ZgEAAAAANU4BWdDYuZfN2c6lJLBkAcQDtiE%3D6HNKkn8rQmIKkUDXbhPCRL35m1azUUXsJ6K8XlMnwESJQ5SOVO"
headers = { "Authorization" : twitter_bearer_token}
url_base = "https://api.twitter.com/"
request_url = url_base + '2/tweets/search/recent?query=b3d'

@app.route("/api/searchtweets")
def search():
    
    try:
        r = requests.get(request_url, headers=headers)
        data = r.json()
        return data
        # print(data)
    except:
        
        return "Something Went Wrong..."
        # print("Something Went Wrong...")


if __name__ == '__main__': 
    app.run(debug=True)




