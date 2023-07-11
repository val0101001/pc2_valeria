from flask import jsonify

from models.user import User


def login(player_credentials):
    player = User.query.filter_by(username=player_credentials['username']).first()
    if not player:
        return {},401
    
    if player_credentials['password'] != player.password:
        return {},401
    
    return jsonify(player)