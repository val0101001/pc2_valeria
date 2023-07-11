from dataclasses import dataclass
from database import db

@dataclass
class User(db.Model):
    id: int
    username: str
    password: str

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)
    

    def __repr__(self):
        return f'<User {self.username}>'