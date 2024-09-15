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
    query = request.args.get("q", '').strip()
    health = request.args.get("health", '').strip()
    mealType = request.args.get("mealType", '').strip()
    dishType = request.args.get("dishType", '').strip()
    ecoScore = request.args.get("co2EmissionsClass", '').strip()

    params = {
        "type": "public",
        # placeholder query
        "q": query,
        "app_id": ID,
        "app_key": KEY,
        "from": 0,
        "to": 5,
        "health": health,
        "mealType": mealType,
        "dishType": dishType,
        "co2EmissionsClass": ecoScore
    }

    if not query:
        del params["q"]
    else:
        params["q"] = query
    if not health:
        del params["health"]
    else:
        params["health"] = health
    if not mealType:
        del params["mealType"]
    else:
        params["mealType"] = mealType
    if not dishType:
        del params["dishType"]
    else:
        params["dishType"] = dishType
    if not ecoScore:
        del params["co2EmissionsClass"]
    else:
        params["co2EmissionsClass"] = ecoScore

    try:
        response = requests.get(URL, params=params)

        if response.status_code == 200:
            return get_parameters(response)
        elif response.status_code == 429:
            return jsonify("error: too many requests"), response.status_code
        else:
            return jsonify("error"), response.status_code

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
        dietLabels = recipe.get("dietLabels", [])
        ingredients = recipe.get("ingredientLines", [])
        calories = round(recipe.get("calories", 0))
        eco = recipe.get("co2EmissionsClass", "No Score Available")
        print(recipe)
        recipes.append(
            {
                "label": label,
                "url": url,
                "image": image,
                "dietLabels": dietLabels,
                "ingredients": ingredients,
                "calories": calories,
                "eco": eco,
            }
        )
    return recipes


if __name__ == "__main__":
    app.run(debug=True)
