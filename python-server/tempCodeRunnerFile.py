@app.route('/templates/index.html')
def hello():
        return render_template('index.html')