from flask import jsonify
from models.category import Category
from database import db


def get_categories(request):
    boardId = request.args.get('boardId')
    categories = Category.query.filter(Category.boardId == boardId).all()
    return jsonify(categories)

def get_category_by_id(category_id):
    category = Category.query.filter_by(id=category_id).first()
    return jsonify(category)

def post_categories(category):
    category = Category(boardId=category['boardId'],label=category['label'])
    db.session.add(category)
    db.session.commit()
    return jsonify(category)

def update_category(category_id, categoryUpdateData):
    category = Category.query.filter_by(id=category_id).first()
    if categoryUpdateData.get('boardId'):
        category.boardId = categoryUpdateData['boardId']
    if categoryUpdateData.get('label'):
        category.label = categoryUpdateData['label']

    db.session.commit()
    return jsonify(category)

def delete_category(category_id):
    category = Category.query.get_or_404(category_id)
    db.session.delete(category)
    db.session.commit()
    return jsonify(category)