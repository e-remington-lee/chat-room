from flask import Flask, jsonify, render_template, request
import requests
import json
import sqlalchemy
from data_server import get_all_messages

app = Flask(__name__)

user_list = []
user_list.append({"user_id": 1,"username":"Nobody"})
user_list.append({"user_id": 2,"username":"Literally No One"})
user_list.append({"user_id": 3,"username":"David Benioff"})
user_list.append({"user_id": 4,"username":"Duplicate"})

user_data = {
        "user_list": user_list
}

message_history = []
message_history.append({"id": 1,"user":{"user_id": 1,"username":"Nobody"},"message":"..."})
message_history.append({"id": 2,"user":{"user_id": 2,"username":"Literally No One"},"message":"..."})
message_history.append({"id": 3,"user":{"user_id": 3,"username":"David Benioff"},"message":"Danny may have forgot about the Iron Fleet, but the Iron Fleet didn't forget about her"})
message_history.append({"id": 4,"user":{"user_id": 4,"username":"Duplicate"},"message":"Test 1"})
message_history.append({"id": 5,"user":{"user_id": 4,"username":"Duplicate"},"message":"Test 2"})

message_data ={
        "message_history": message_history
}
@app.route('/')
def root_server():
        return render_template('index.html')

@app.route('/messages', methods=['GET', 'POST'])
def get_post_messages():
        if request.method =='GET':
                return jsonify(get_all_messages())
        elif request.method =='POST':
                data = request.get_json()
                user = data['user']
                message = data['message']
                id = len(message_data['message_history'])+1

                message_data['message_history'].append({"user":user, "message":message, "id":id})
                
                return jsonify(message_data), 201

@app.route('/users', methods=['GET','POST'])
def find_create_users():
        if request.method =='GET':
                q = request.args.get('user_id')
                if q:
                        for user in user_data['user_list']:
                                if str(user['user_id']) == q:
                                        return jsonify(user)

                        return jsonify({"Error": "User Not Found"}), 404
                else:
                        return jsonify(user_data['user_list'])
        elif request.method =='POST':
                data = request.get_json()
                username = data['username']
                id = len(user_data["user_list"])+1

                user_data['user_list'].append({"username":username, "user_id":id})

                return jsonify(user_data), 201

if __name__  == '__main__':
    app.run(debug=True, port=8000)
