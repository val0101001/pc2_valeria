from flask import jsonify
from models.board import Board
from database import db


def get_boards(request):
    userId = request.args.get('userId')
    boards = Board.query.filter(Board.userId == userId).all()
    return jsonify(boards)

def get_board_by_id(board_id):
    board = Board.query.filter_by(id=board_id).first()
    return jsonify(board)

def post_boards(board):
    board = Board(name=board['name'],userId=board['userId'])
    db.session.add(board)
    db.session.commit()
    return jsonify(board)

def update_board(board_id, boardUpdateData):
    board = Board.query.filter_by(id=board_id).first()
    if boardUpdateData.get('userId'):
        Board.userId = boardUpdateData['userId']
    if boardUpdateData.get('name'):
        Board.name = boardUpdateData['name']

    db.session.commit()
    return jsonify(board)

def delete_board(board_id):
    board = Board.query.get_or_404(board_id)
    db.session.delete(board)
    db.session.commit()
    return jsonify(board)