from flask import Flask, jsonify, render_template, request
import requests
import json

app = Flask(__name__)

info ='''{"message_history": [
                {
                "id": 1,
                "username":"Nobody",
                "message":"..."
                },
                {"id": 2,
                "username":"Literally No one",
                "message":"..."
                },
                {
                "id": 3,
                "username":"David Benioff",
                "message":"Danny may have forgot about the Iron Fleet, but the Iron Fleet didn't forget about her"
                },
                {"id": 4,
                "username":"Duplicate Test",
                "message":"Test message"
                },
                 {"id": 5,
                "username":"Duplicate Test",
                "message":"Test message 2"
                }
       ]
}
'''
  
json_data = json.loads(info)

@app.route('/')
def root_server():
        return render_template('index.html')

@app.route('/messages', methods=['GET', 'POST'])
def get_post_messages():
        if request.method =='GET':
                return jsonify(json_data)
        elif request.method =='POST':
                data = request.get_json()
                username = data['username']
                message = data['message']
                id = len(json_data['message_history'])+1

                json_data['message_history'].append({"username":username, "message":message, "id":id})
                
                return jsonify(json_data), 201

@app.route('/users', methods=['GET','POST'])
def find_create_users():
        if request.method =='GET':
                all_users =[]
                id = 1

                for user in json_data['message_history']:
                        all_users.append({"username": user['username'], "id":id})
                        id += 1

                 # unique_users = list(set(all_users))

                return jsonify(all_users)
        elif request.method =='POST':
                data = request.get_json()
                username = data['username']

                json_data['message_history'].append({"username":username})
                return jsonify(json_data), 201

@app.route('/messages/q={"filters":[{"name":"id","op":"eq", "val":2}]}', methods=['GET'])
def find_specific_user():
        if request.method == 'GET':
                return request.get_json()

if __name__  == '__main__':
    app.run(debug=True, port=8000)
