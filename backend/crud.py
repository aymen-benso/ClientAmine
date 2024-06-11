from sqlalchemy.orm import Session
from passlib.context import CryptContext
import models, schemas

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def get_users(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = pwd_context.hash(user.password)
    db_user = models.User(
        name=user.name,
        email=user.email,
        phone=user.phone,
        departement=user.departement,
        role=user.role,
        responsable=user.responsable,
        responsable_pr_id=user.responsable_pr_id,
        hashed_password=hashed_password,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_responsable(db: Session):
    return db.query(models.User).filter(models.User.responsable == True).all()

def create_demande_ordre_mission(db: Session, demande: schemas.DemandeOrdreMissionCreate):
    db_demande = models.DemandeOrdreMission(
        user_id=demande.user_id,
        user_name=demande.user_name,
        date_debut=demande.date_debut,
        date_fin=demande.date_fin,
        heure_depart=demande.heure_depart,
        fonction=demande.fonction,
        destination=demande.destination,
        motif=demande.motif,
        moyen_transport=demande.moyen_transport,
        statut=demande.statut,
        responsable_pr_id=demande.responsable_pr_id,
        responsable_approbation=demande.responsable_approbation,
        RH_accepted=demande.RH_accepted
    )
    db.add(db_demande)
    db.commit()
    db.refresh(db_demande)
    return db_demande

def get_demande_ordre_mission(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.DemandeOrdreMission).filter(models.DemandeOrdreMission.responsable_approbation == False).all()

def get_demande_ordre_mission_by_responsable(db: Session, responsable_pr_id: int):
    return db.query(models.DemandeOrdreMission).filter(models.DemandeOrdreMission.responsable_pr_id == responsable_pr_id).all()

def accept_demande_ordre_mission_by_responsable(db: Session, demande_id: int):
    db_demande = db.query(models.DemandeOrdreMission).filter(models.DemandeOrdreMission.id == demande_id).first()
    db_demande.responsable_approbation = True
    db_demande.statut = "En attente de validation RH"
    db.commit()
    db.refresh(db_demande)
    return db_demande

def accept_demande_ordre_mission_by_RH(db: Session, demande_id: int):
    db_demande = db.query(models.DemandeOrdreMission).filter(models.DemandeOrdreMission.id == demande_id).first()
    db_demande.RH_accepted = True
    db.commit()
    db.refresh(db_demande)
    return db_demande
