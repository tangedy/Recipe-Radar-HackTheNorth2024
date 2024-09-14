from flask import Flask, request, jsonify
import requests
from flask_cors import CORS


app = Flask(__name__)

CORS(app)


@app.route("/")
def home():
    return "Hello World!"


ID = "1e3d80df"
KEY = "a5dc1f0f05d4100186953180b1c1bc3a"
URL = "https://api.edamam.com/api/recipes/v2"


@app.route("/recipe", methods=["GET"])
def search():
    query = request.args.get("q")
    if not query:
        return jsonify({"error": "No query provided"}), 400

    params = {
        "type": "public",
        # placeholder query
        "q": query,
        "app_id": ID,
        "app_key": KEY,
        "from": 0,
        "to": 10,
        "health": [],
    }

    try:
        response = requests.get(URL, params=params)

        if response.status_code == 200:
            get_parameters(response)
        elif response.status_code == 429:
            return jsonify({"error: too many requests"}), response.status_code
        else:
            return jsonify({"error"}), response.status_code

    except Exception as e:
        return jsonify({"error": str(e)}), response.status_code


# Example request
def example_request():
    params = {
        "q": "pasta",
        "type": "public",
        "app_id": ID,
        "app_key": KEY,
        "from": 0,
        "to": 10,
    }

    try:
        response = requests.get(URL, params=params)
        response.raise_for_status()

        # Print all recipes
        print(get_parameters(response))

    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")


def get_parameters(response):
    ingredients = []

    data = response.json()
    if "label" in data["hits"][0]["recipe"]:
        label = str(data["hits"][0]["recipe"]["label"])
    if "url" in data["hits"][0]["recipe"]:
        url = str(data["hits"][0]["recipe"]["url"])
    if "image" in data["hits"][0]["recipe"]:
        image = str(data["hits"][0]["recipe"]["image"])
    if "dietLabels" in data["hits"][0]["recipe"]:
        dietLabels = data["hits"][0]["recipe"]["dietLabels"]
    if "ingredientLines" in data["hits"][0]["recipe"]:
        ingredients = data["hits"][0]["recipe"]["ingredientLines"]
    if "calories" in data["hits"][0]["recipe"]:
        calories = round(data["hits"][0]["recipe"]["calories"])

    printout = [label, url, image, dietLabels, ingredients, calories]
    return printout


if __name__ == "__main__":
    app.run(debug=True)
