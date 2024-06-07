from sqlalchemy import Column, Integer, String
from database import Base 
from pydantic import BaseModel, EmailStr
from typing import Optional

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    phone = Column(String)
    departement = Column(String)
    role = Column(String)
    responsable_pr_id = Column(Integer)
    listes = Column(String)
    hashed_password = Column(String)

# Pydantic models
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    departement: str
    role: str
    responsable_pr_id: int
    listes: str
    password: str

class UserUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    departement: Optional[str] = None
    role: Optional[str] = None
    responsable_pr_id: Optional[int] = None
    listes: Optional[str] = None
    password: Optional[str] = None

class UserOut(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: str
    departement: str
    role: str
    responsable_pr_id: int
    listes: str

