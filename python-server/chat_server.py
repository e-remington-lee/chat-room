from flask import Flask, jsonify, render_template, request
import requests
import json
import sqlalchemy
from data_server import get_all_messages, get_all_users, create_message, create_user
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def root_server():
        return render_template('index.html')

# @socketio.on('user')
# def new_user(json, methods=['GET', 'POST']):
#         socketio.emit('response', {'data': 'It worked!'})

@app.route('/messages', methods=['GET', 'POST'])
def get_post_messages():
        if request.method =='GET':
                return jsonify(get_all_messages())
        elif request.method =='POST':
                        data = request.get_json()
                        user_id = data['user']['user_id']
                        message = data['message']

                        create_message(user_id, message)
                        
                        return jsonify(get_all_messages()), 201

@socketio.on('message')
def new_message(message, methods=['GET', 'POST']):
        print(f'recieved {message}')

        socketio.emit('message', message, broadcast=True)

@app.route('/users', methods=['GET','POST'])
def find_create_users():
        if request.method =='GET':
                user_id = request.args.get('user_id')
                if user_id:
                        for user in get_all_users():
                                if str(user['username'].lower()) == user_id.lower():
                                        return jsonify({"Found": "True"})
                                        # return jsonify(user)
                        return jsonify({"Error": "User Not Found"}), 404
                else:
                        return jsonify(get_all_users())
        elif request.method =='POST':
                data = request.get_json()
                username = data['username']

                create_user(username)

                return jsonify(get_all_users()), 201

if __name__  == '__main__':
        socketio.run(app, debug=True, port=8000)
    