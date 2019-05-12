from flask import Flask, jsonify, render_template, request
import json
# from flask_restful import Resource, Api

app = Flask(__name__)
# api = Api(app)
info ='''{"message_history": [{"id": 1,"username":"Nobody","message":"..."},{"id": 2,"username":"Literally No one","message":"..."
                },{"id": 3,"username":"David Benioff","message":"Danny forgot about the Iron Fleet but the Iron Fleet didn't forget about her"
                },{"id": 4,"username":"David Benioff",
                "message":"Duplicate user test"
                }
       ]
}
'''

     
json_data = json.loads(info)

print(type(json_data['message_history']))

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
                id = len(info)+1

                json_data['message_history'].append({"username":username, "message":message, "id":id})
                return jsonify(json_data), 201

@app.route('/users', methods=['GET','POST'])
def find_create_users():
        for m in json_data['message_history']:
                print(m['username'])
        if request.method =='GET':
                all_users ='''
                        {"user_list": []

                        }
                '''
                for message in json_data['message_history']:
                        all_users['user_list'].append(message['username'])
                        return all_users
        elif request.method =='POST':
                return None

if __name__  == '__main__':
    app.run(debug=True, port=8000)
