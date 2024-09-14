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
            return get_parameters(response)
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
    recipes = []
    for hit in data.get("hits", []):
        recipe = hit.get("recipe", {})
        label = recipe.get("label", "No label")
        url = recipe.get("url", "No URL")
        image = recipe.get("image", "No image")
        recipes.append({"label": label, "url": url, "image": image})
    return recipes


if __name__ == "__main__":
    app.run(debug=True)
