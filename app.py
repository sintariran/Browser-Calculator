from flask import Flask, request, jsonify, send_from_directory, render_template
from flask_cors import CORS
from calculator import evaluate

app = Flask(__name__, static_url_path='/static', static_folder='static')
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    expression = data.get('expression', '')

    try:
        result = evaluate(expression)
        return jsonify({'result': result}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run()