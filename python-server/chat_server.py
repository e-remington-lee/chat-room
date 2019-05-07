from flask import Flask, jsonify
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(HelloWorld, '/')

class Second(Resource):
    def get(self):
        return jsonify(username='Blaine',
                  email='bdh22')

api.add_resource(Second, '/2')


if __name__  == '__main__':
    app.run(debug=True, port=8000)