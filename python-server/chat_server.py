from flask import Flask, jsonify, render_template, send_from_directory
# from flask_restful import Resource, Api

app = Flask(__name__)
# api = Api(app)

# @app.route('/templates/<bb>')
# def routers(bb):
#         print(bb)
#         return send_from_directory('templates', bb)

@app.route('/')
def root_server():
        return render_template('index.html')

#try this
# @app.route('/')
# def routers():
#         return send_from_directory('/static', '/templates/index.html')

if __name__  == '__main__':
    app.run(debug=True, port=8000)
