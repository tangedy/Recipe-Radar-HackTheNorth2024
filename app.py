import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

EDAMAM_APP_ID = b6ce10da
EDAMAM_APP_KEY = aac107954593b00f648c502ef1e8a981

BASE_URL = "https://api.edamam.com/search"
