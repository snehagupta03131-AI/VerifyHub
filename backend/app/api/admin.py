from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.admin import Admin
from app.schemas.admin import AdminCreate 
from app.security.password import hash_password, verify_password
from app.security.jwt import create_access_token
from app.dependencies.auth import get_current_admin
from fastapi.security import OAuth2PasswordRequestForm
from app.models.company import Company
from app.models.employee import Employee
from app.models.verification_request import VerificationRequest

router = APIRouter()

@router.post("/admin/register")
def register_admin(
    admin: AdminCreate,
    db: Session = Depends(get_db)
):
 

    existing_admin = db.query(Admin).filter(
        Admin.email == admin.email
    ).first()

    if existing_admin:
        raise HTTPException(
    status_code=400,
    detail="Admin already exists"
)

    new_admin = Admin(
        name=admin.name,
        email=admin.email,
        password_hash=hash_password(admin.password)
    )

    db.add(new_admin)
    db.commit()
    db.refresh(new_admin)

    return {
        "message": "Admin created successfully",
        "id": new_admin.id
    }
@router.post("/admin/login")
def admin_login(
    login_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    

    admin = db.query(Admin).filter(
    Admin.email == login_data.username
).first()
    

    if not admin:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    password_valid = verify_password(
        login_data.password,
        admin.password_hash
    )

    if not password_valid:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    token = create_access_token({
        "admin_id": admin.id,
        "email": admin.email
    })

    return {
        "access_token": token,
        "token_type": "bearer"
    }
@router.get("/admins")
def get_admins(
    admin = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    
    admins = db.query(Admin).all()
    return admins

@router.get("/admin/me")
def get_admin_me(
    admin = Depends(get_current_admin)
):
    return admin

@router.get("/admin/pending-companies")
def get_pending_companies(
    admin = Depends(get_current_admin),
    db: Session = Depends(get_db)
):

    pending_companies = db.query(Company).filter(
        Company.status == "pending"
    ).all()

    return pending_companies
@router.get("/admin/recent-companies")
def recent_companies(
    admin = Depends(get_current_admin),
    db: Session = Depends(get_db)
):

    companies = db.query(Company).order_by(
        Company.id.desc()
    ).limit(5).all()

    return companies
@router.get("/admin/recent-employees")
def recent_employees(
    admin = Depends(get_current_admin),
    db: Session = Depends(get_db)
):

    employees = db.query(Employee).order_by(
        Employee.id.desc()
    ).limit(5).all()

    return employees

@router.get("/admin/dashboard")
def admin_dashboard(
    admin = Depends(get_current_admin),
    db: Session = Depends(get_db)
):

    total_companies = db.query(Company).count()

    approved_companies = db.query(Company).filter(
        Company.status == "approved"
    ).count()

    pending_companies = db.query(Company).filter(
        Company.status == "pending"
    ).count()

    rejected_companies = db.query(Company).filter(
        Company.status == "rejected"
    ).count()

    total_employees = db.query(Employee).count()

    total_verifications = db.query(
        VerificationRequest
    ).count()

    return {
        "total_companies": total_companies,
        "approved_companies": approved_companies,
        "pending_companies": pending_companies,
        "rejected_companies": rejected_companies,
        "total_employees": total_employees,
        "total_verifications": total_verifications
    }
@router.get("/admin/recent-verifications")
def recent_verifications(
    admin = Depends(get_current_admin),
    db: Session = Depends(get_db)
):

    history = db.query(
        VerificationRequest
    ).order_by(
        VerificationRequest.id.desc()
    ).limit(10).all()

    return history