import os
from urllib import response

import requests
from flask import request, Blueprint
from flask_restx import Api, Resource


api_blueprint = Blueprint("api", __name__, url_prefix='/api')
api = Api(api_blueprint)


twitter_bearer_token = os.environ.get("TWITTOKEN")
headers = {"Authorization": "Bearer " + str(twitter_bearer_token)}
url_base = "https://api.twitter.com/"



@api.route("/searchtweets")
class Search(Resource):
    def get():
        request_url = url_base + "2/tweets/search/recent"
        params = {
            "query": request.args.get("searchTerm"),
            "expansions": "author_id,referenced_tweets.id,attachments.media_keys",
            "tweet.fields": "author_id,public_metrics,created_at,attachments,entities",
            "user.fields": "username,name,profile_image_url",
            "media.fields": "url,preview_image_url",
        }
        try:
            r = requests.get(request_url, headers=headers, params=params)
            data = r.json()
            return data
        except:
            return "Something Went Wrong..."


@api.route("/randomtweets/<string>:<params>")
class Random(Resource):
    def get(params):
        id = request.args.get("userTweets")
        request_url = url_base + "2/users" + id
        params = {
            "start_time": "2010-11-06T00:00:00Z",
            "max_results": "100",
            "expansions": "author_id,referenced_tweets.id,attachments.media_keys",
            "tweet.fields": "author_id,public_metrics,created_at,attachments,entities",
            "user.fields": "username,name,profile_image_url,description,verified,created_at,location,public_metrics",
            "media.fields": "url,preview_image_url",
        }
        try:
            r = requests.get(request_url, headers=headers, params=params)
            data = r.json()
            data = add_media(data)
            return data, 200
        except:
            response_object ={'message': 'internal server error'}
            return response_object, 500


def add_media(data):
    print('I am doing some data manipulation')
    new_data = 'original data but manipulated'
    return new_data