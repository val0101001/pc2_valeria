from dataclasses import dataclass
from database import db

@dataclass
class Category(db.Model):
    id: int
    boardId: str
    label: str

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    boardId = db.Column(db.Integer, nullable=False)
    label = db.Column(db.String(100), nullable=False)
    
    
    def __repr__(self):
        return f'<Category {self.label}>'