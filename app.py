from flask import Flask, request, jsonify, render_template as render

app = Flask(__name__)

@app.route("/")
def index():
    return render('index.html')

if __name__=='__main__':
    app.run(debug=True)
