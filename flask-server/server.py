from crypt import methods
from distutils.log import debug
import json
from flask import Flask, jsonify, send_from_directory
import requests
import os 


app = Flask(__name__, static_folder="../static")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')


twitter_bearer_token =  os.environ.get("TWITTOKEN")
headers = { "Authorization" : "Bearer " + str(twitter_bearer_token)}
url_base = "https://api.twitter.com/"
request_url = url_base + '2/tweets/search/recent?query=b3d'
params = {
    "expansions": "author_id,referenced_tweets.id",
    "tweet.fields" : "author_id,public_metrics",
    "user.fields": "username,name"
    }

@app.route("/api/searchtweets")
def search():
    
    try:
        r = requests.get(request_url, headers=headers, params=params)
        data = r.json()
        return data
    except:
        return "Something Went Wrong..."
        # print("Something Went Wrong...")


if __name__ == '__main__': 
    app.run(debug=True)


