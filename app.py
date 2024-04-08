from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    expression = data.get('equation', '')

    # Sanitize the input expression
    sanitized_expression = ''.join(filter(str.isdigit, expression))

    # Perform calculation
    try:
        result = calculator.evaluate(sanitized_expression)
        return jsonify({'result': result}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)