from dataclasses import dataclass
from database import db

@dataclass
class Item(db.Model):
    id: int
    boardId: int
    categoryId: int
    name: str
    imageURL: str

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    boardId = db.Column(db.Integer, nullable=False)
    categoryId = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    imageURL = db.Column(db.String(100), nullable=False)
    
    
    def __repr__(self):
        return f'<Item {self.name}>'