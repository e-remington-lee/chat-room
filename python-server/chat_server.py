from flask import Flask, jsonify, render_template, request
import requests
import json

app = Flask(__name__)

user_list = []
user_list.append({"id": 1,"username":"Nobody"})
user_list.append({"id": 2,"username":"Literally No One"})
user_list.append({"id": 3,"username":"David Benioff"})
user_list.append({"id": 4,"username":"Duplicate"})

user_data = {
        "user_list": user_list
}

message_history = []
message_history.append({"id": 1,"username":"Nobody","message":"..."})
message_history.append({"id": 2,"username":"Literally No One","message":"..."})
message_history.append({"id": 3,"username":"David Benioff","message":"Danny may have forgot about the Iron Fleet, but the Iron Fleet didn't forget about her"})
message_history.append({"id": 4,"username":"Duplicate","message":"Test 1"})
message_history.append({"id": 5,"username":"Duplicate","message":"Test 2"})

message_data ={
        "message_history": message_history
}
@app.route('/')
def root_server():
        return render_template('index.html')

@app.route('/messages', methods=['GET', 'POST'])
def get_post_messages():
        if request.method =='GET':
                return jsonify(message_data)
        elif request.method =='POST':
                data = request.get_json()
                username = data['username']
                message = data['message']
                id = len(message_data['message_history'])+1

                message_data['message_history'].append({"username":username, "message":message, "id":id})
                
                return jsonify(message_data), 201

@app.route('/users', methods=['GET','POST'])
def find_create_users():
        if request.method =='GET':
                return jsonify(user_data)
        elif request.method =='POST':
                data = request.get_json()
                username = data['username']
                id = len(user_data["user_list"])+1

                user_data['user_list'].append({"username":username, "id":id})

                return jsonify(user_data), 201

@app.route('/messages/q={"filters":[{"name":"id","op":"eq", "val":2}]}', methods=['GET'])
def find_specific_user():
        if request.method == 'GET':
                return request.get_json()

if __name__  == '__main__':
    app.run(debug=True, port=8000)
