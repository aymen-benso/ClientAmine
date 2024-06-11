from pydantic import BaseModel

class UserBase(BaseModel):
    name: str
    email: str
    phone: str
    departement: str
    role: str
    responsable: bool
    responsable_pr_id: int


class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int

    class Config:
        orm_mode = True

class UserUpdate(UserBase):
    password: str
    class Config:
        orm_mode = True

class UserOut(UserBase):
    id: int
    class Config:
        orm_mode = True

class DemandeOrdreMissionBase(BaseModel):
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
    responsable_approbation: bool
    responsable_pr_id: int

class DemandeOrdreMissionCreate(DemandeOrdreMissionBase):
    responsable_approbation: bool
    RH_accepted: bool

class DemandeOrdreMissionUpdate(DemandeOrdreMissionBase):
    responsable_approbation: bool
    RH_accepted: bool

class DemandeOrdreMission(DemandeOrdreMissionBase):
    id: int
    class Config:
        orm_mode = True

class DemandeOrdreMissionOut(DemandeOrdreMissionBase):
    id: int
    class Config:
        orm_mode = True

        
