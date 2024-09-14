from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello World!'

ID  = '149ace87'
KEY = '9cb5fe085bb0adf9f354818967e21664'
URL = 'https://api.edamam.com/search'

@app.route('/recipe', methods=['GET', 'POST'])
def search():
    query = request.args.get('query')
    if not query:
        return jsonify({'error': 'No query provided'}), 400
    params = {
        'q': query,
        'id': ID,
        'key': KEY,
        'to': 2
    }

    try:
        url = 'https://developer.edamam.com//admin/applications/1409624945949'
        response = requests.get(url)

        if response.status_code == 200:
            data = response.json()
            return jsonify(data)

        else:
            return jsonify({"error":"Bitch"}), response.status_code
    except Exception as e:
        return jsonify({"error":str(e)}), response.status_code


if __name__ == '__main__':
    app.run()
