from flask import Flask, jsonify, render_template, request
import requests
import json
import sqlalchemy
from data_server import get_all_messages, get_all_users, create_message, create_user
from flask_socketio import SocketIO, send

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def root_server():
        return render_template('index.html')

@socketio.on('message')
def handle_requests(json, methods=['GET', 'POST']):
        print(f'recieved {json}')
        # send(json, broadcast=True)
        socketio.emit('response', json, callback='It worked!')


@app.route('/messages', methods=['GET', 'POST'])
def get_post_messages():
        if request.method =='GET':
                return jsonify(get_all_messages())
        elif request.method =='POST':
                        data = request.get_json()
                        user_id = data['user']['user_id']
                        message = data['message']
                        message_id = len(get_all_messages())+1

                        create_message(user_id, message, message_id)
                        
                        return jsonify(get_all_messages()), 201

@app.route('/users', methods=['GET','POST'])
def find_create_users():
        if request.method =='GET':
                q = request.args.get('user_id')
                if q:
                        for user in get_all_users():
                                if str(user['user_id']) == q:
                                        return jsonify(user)
                        return jsonify({"Error": "User Not Found"}), 404
                else:
                        return jsonify(get_all_users())
        elif request.method =='POST':
                data = request.get_json()
                username = data['username']
                user_id = len(get_all_users())+1

                create_user(user_id, username)

                return jsonify(get_all_users()), 201

if __name__  == '__main__':
#     app.run(debug=True, port=8000)
        socketio.run(app, debug=True, port=8000)
