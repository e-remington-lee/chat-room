from flask import Flask, jsonify, render_template, send_from_directory
# from flask_restful import Resource, Api

app = Flask(__name__)
# api = Api(app)

@app.route('/templates/index.html')
def hello():
    return send_from_directory('/templates', "index.html")

# @app.route('/templates/index.html')
# def hello():
#         return render_template('index.html')

# api.add_resource(Angular, '/')

# class Second(Resource):
#     def get(self):
#         return jsonify(username='Blaine',
#                   email='bdh22')

# api.add_resource(Second, '/2')

if __name__  == '__main__':
    app.run(debug=True, port=8000)
