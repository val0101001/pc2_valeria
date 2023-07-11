from flask import jsonify
from models.item import Item
from database import db


def get_items(request):
    categoryId = request.args.get('categoryId')
    items = Item.query.filter(Item.categoryId == categoryId).all()
    return jsonify(items)

def get_item_by_id(item_id):
    item = Item.query.filter_by(id=item_id).first()
    return jsonify(item)

def post_items(item):
    item = Item(boardId=item['boardId'],categoryId=item['categoryId'],name=item['name'],imageURL=item['imageURL'])
    db.session.add(item)
    db.session.commit()
    return jsonify(item)

def update_item(item_id, itemUpdateData):
    item = Item.query.filter_by(id=item_id).first()
    if itemUpdateData.get('boardId'):
        Item.boardId = itemUpdateData['boardId']
    if itemUpdateData.get('categoryId'):
        Item.categoryId = itemUpdateData['categoryId']
    if itemUpdateData.get('name'):
        Item.name = itemUpdateData['name']
    if itemUpdateData.get('imageURL'):
        Item.imageURL = itemUpdateData['imageURL']

    db.session.commit()
    return jsonify(item)

def delete_item(item_id):
    item = Item.query.get_or_404(item_id)
    db.session.delete(item)
    db.session.commit()
    return jsonify(item)