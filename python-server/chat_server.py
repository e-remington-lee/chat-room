from flask import Flask, jsonify, render_template, request
import json
# from flask_restful import Resource, Api

app = Flask(__name__)
# api = Api(app)
info = {"id": 1,
        "username":"Nobody",
       "message":"..."}, {"id": 2,
        "username":"Literally No one",
       "message":"..."},{"id": 3,
        "username":"David Benioff",
       "message":"Danny forgot about the Iron Fleet but the Iron Fleet didn't forget about her"}
     

json_data = json.dumps(info)

@app.route('/')
def root_server():
        return render_template('index.html')

@app.route('/messages', methods=['GET'])
def get_users():
        return jsonify(info)

@app.route('/messages', methods=['POST'])
def add_message():

        data = request.get_json()

        username = data['username']
        message = data['message']
        id = data['id']

        # json_data.update({"username":username, "message":message, "id":id})
        # return json_data

        #how do I add a dictonary to already existing json data
        return jsonify({"id": 1,
        "username":"Nobody",
       "message":"..."}, {"id": 2,
        "username":"Literally No one",
       "message":"..."},{"id": 3,
        "username":"David Benioff",
       "message":"Danny forgot about the Iron Fleet but the Iron Fleet didn't forget about her"},{"username":username, "message":message, "id":id})
        

if __name__  == '__main__':
    app.run(debug=True, port=8000)
