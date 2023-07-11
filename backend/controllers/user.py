from flask import jsonify
from models.user import User
from database import db


def get_users():
    users = User.query.all()
    return jsonify(users)

def get_user_by_id(user_id):
    user = User.query.filter_by(id=user_id).first()
    return jsonify(user)

def post_user(user):
    user = User(username=user['username'], password=user['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify(user)

def update_user(user_id, userUpdateData):
    user = User.query.filter_by(id=user_id).first()
    if userUpdateData.get('username'):
        user.username = userUpdateData['username']
    if userUpdateData.get('password'):
        user.password = userUpdateData['password']
    db.session.commit()
    return jsonify(user)

def delete_user(user_id):
    user = user.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify(user)