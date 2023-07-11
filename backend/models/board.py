from dataclasses import dataclass
from database import db

@dataclass
class Board(db.Model):
    id: int
    userId: int
    name: str

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False)
    userId = db.Column(db.Integer, nullable=False)
    
    
    def __repr__(self):
        return f'<Board {self.name}>'