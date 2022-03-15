from flask import Flask

def create_app():
    app = Flask(__name__, static_folder="../static")
    
    from server.routes.api import api_blueprint
    app.register_blueprint(api_blueprint)
    
    return app
