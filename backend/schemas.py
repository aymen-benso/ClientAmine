from pydantic import BaseModel

class UserBase(BaseModel):
    name: str
    email: str
    phone: str
    departement: str
    role: str
    responsable_pr_id: int
    listes: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int

    class Config:
        orm_mode = True
