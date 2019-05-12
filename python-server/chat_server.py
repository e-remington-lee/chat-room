from flask import Flask, jsonify, render_template, send_from_directory
import json
# from flask_restful import Resource, Api

app = Flask(__name__)
# api = Api(app)
info = [
      {"id": 1,
        "username":"Nobody",
       "message":"..."}, 
      {"id": 2,
        "username":"Literally No one",
       "message":"..."},
      {"id": 3,
        "username":"David Benioff",
       "message":"Danny forgot about the Iron Fleet but the Iron Fleet did not forget about her"}
        ]  

json_data = json.dumps(info)

@app.route('/')
def root_server():
        return render_template('index.html')

@app.route('/users', methods=['GET', 'POST'])
def get_users():
        return json_data

if __name__  == '__main__':
    app.run(debug=True, port=8000)
