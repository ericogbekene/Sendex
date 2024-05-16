from flask import Flask
from flask import render_template

import requests

app = Flask(__name__)


@app.route("/", strict_slashes=False)
def home():
    """returns the home page"""

    return "<h1> Welcome </h1>"

@app.route("/login", methods=['GET', 'POST'], strict_slashes=False)
def login():
    return "<H2> Logged in succesfully </H2>"

@app.route("/signup", strict_slashes=False)
def signup()
    """route to sign a new user up"""
    """ returns a form.html page with sign up form"""
    return "render_template("form.html")

@app.route('/orders', methods=[GET, POST], strict_slashes=False)
def get_orders()
    """
    function to return the list of all available orders
    """
    url = 'localhost:api/orders'
    return '{}' #Return json of all orders 

def create_order()
    """
    endpoint to create a new folder 
    """
    data = {}


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='5000') 
