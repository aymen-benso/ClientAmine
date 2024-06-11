from sqlalchemy import Column, Integer, String, Boolean
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
    responsable = Column(Boolean)
    responsable_pr_id = Column(Integer)
    hashed_password = Column(String)

# Pydantic models
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    departement: str
    role: str
    responsable : bool
    responsable_pr_id: int
    password: str

class UserUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    departement: Optional[str] = None
    role: Optional[str] = None
    responsable_pr_id: Optional[int] = None
    responsable : bool = False
    password: Optional[str] = None

class UserOut(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: str
    departement: str
    role: str
    responsable_pr_id: int

class DemandeOrdreMission(Base):
    __tablename__ = "demande_ordre_mission"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer)
    user_name = Column(String)
    date_debut = Column(String)
    date_fin = Column(String)
    heure_depart = Column(String)
    fonction = Column(String)
    destination = Column(String)
    motif = Column(String)
    moyen_transport = Column(String)
    statut = Column(String)
    responsable_pr_id = Column(Integer)
    responsable_approbation = Column(Boolean, default=False)
    RH_accepted = Column(Boolean, default=False)

class DemandeOrdreMissionCreate(BaseModel):
    user_id: int
    user_name: str
    date_debut: str
    date_fin: str
    heure_depart: str
    fonction: str
    destination: str
    motif: str
    moyen_transport: str
    statut: str
    responsable_pr_id: int
    responsable_approbation: bool
    RH_accepted: bool


class DemandeOrdreMissionOut(BaseModel):
    id: int
    user_id: int
    date_debut: str
    date_fin: str
    destination: str
    motif: str
    moyen_transport: str
    statut: str
    responsable_pr_id: int
    responsable_approbation: bool
    RH_accepted: bool
    

