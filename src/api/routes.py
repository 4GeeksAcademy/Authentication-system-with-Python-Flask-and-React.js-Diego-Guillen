"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import re
import bcrypt

def check(email):
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'
    # pass the regular expression
    # and the string into the fullmatch() method
    if(re.fullmatch(regex, email)):
        return True
    else:
        return False

api = Blueprint('api', __name__)


@api.route('/token')
def create_token():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    if password is None or email is None:
        return {'message': f'missing parameters {email} {password}'}, 400
    if check(email) is not True:
        return {'message': 'email is not valid'}, 400
    user = User.query.filter_by(email=email).one_or_none()
    print(user)
    if user is None:
        return {'mesasge': 'User doesnt exist'}, 400
    password_byte =bytes(password, 'utf-8')
    if bcrypt.checkpw(password_byte, user.password.encode('utf-8')):
        return {'token': create_access_token(identity = email)},200
    pass


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200