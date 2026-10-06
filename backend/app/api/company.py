from sqlalchemy.orm import Session

from app.schemas.company import (
    CompanyCreate,
    CompanyResponse,
    CompanyUpdate
    
)
from app.models.company import Company
from app.core.database import get_db
from app.security.password import hash_password, verify_password

from app.security.jwt import create_access_token
from app.dependencies.auth import (
    get_current_company,
    get_current_admin
)
from fastapi.security import OAuth2PasswordRequestForm
from fastapi import APIRouter, Depends, HTTPException, status

router = APIRouter()

@router.get("/company-test")
def company_test():
    return {
        "message": "Company API Working"
    }
@router.post("/companies")
def create_company(
    company: CompanyCreate,
    db: Session = Depends(get_db)
):

    existing_company = db.query(Company).filter(
        Company.company_name == company.company_name
    ).first()

    if existing_company:
        raise HTTPException(
            status_code=409,
            detail="Company already exists."
        )
    existing_email = db.query(Company).filter(
        Company.email == company.email
    ).first()

    if existing_email:
        raise HTTPException(
            status_code=409,
            detail="Email already registered."
        )

    hashed_password = hash_password(
        company.password
    )

    new_company = Company(
        company_name=company.company_name,
        website=company.website,
        email=company.email,
        password_hash=hashed_password
    )

    db.add(new_company)
    db.commit()
    db.refresh(new_company)

    return {
        "message": "Company registered successfully",
        "company_id": new_company.id
    }
@router.get(
    "/companies",
    response_model=list[CompanyResponse]
)
def get_companies(
    db: Session = Depends(get_db)
):
    companies = db.query(Company).all()
    return companies

@router.put("/companies/{company_id}/approve")
def approve_company(
    company_id: int,
    admin = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    
    company = db.query(Company).filter(
        Company.id == company_id
    ).first()

    if not company:
        raise HTTPException(
            status_code=404,
            detail="Company not found"
        )

    company.status = "approved"

    db.commit()
    db.refresh(company)

    return {
        "message": "Company approved successfully"
    }
@router.put("/companies/{company_id}/reject")
def reject_company(
    company_id: int,
    admin = Depends(get_current_admin),
    db: Session = Depends(get_db)
):

    if not admin:
        raise HTTPException(
            status_code=401,
            detail="Not authenticated"
        )

    company = db.query(Company).filter(
        Company.id == company_id
    ).first()

    if not company:
        raise HTTPException(
            status_code=404,
            detail="Company not found"
        )

    company.status = "rejected"

    db.commit()
    db.refresh(company)

    return {
        "message": "Company Rejected Successfully"
    }

@router.post("/company/login")
def company_login(
    login_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):

    company = db.query(Company).filter(
        Company.email == login_data.username
    ).first()
    

    if not company:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    password_valid = verify_password(
        login_data.password,
        company.password_hash
    )

    if not password_valid:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    token = create_access_token({
        "company_id": company.id,
        "email": company.email
    })

    return {
        "access_token": token,
        "token_type": "bearer"
    }
@router.get("/me")
def get_me(company = Depends(get_current_company)):
    if not company:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated"
        )

    return company
@router.get("/company/profile")
def company_profile(
    company = Depends(get_current_company),
    db: Session = Depends(get_db)
):

    

    company_data = db.query(Company).filter(
        Company.id == company["company_id"]
    ).first()

    if not company_data:
        raise HTTPException(
            status_code=404,
            detail="Company not found"
        )

    return {
        "company_name": company_data.company_name,
        "email": company_data.email,
        "website": company_data.website,
        "status": company_data.status
    }
@router.put("/company/profile")
def update_company_profile(
    data: CompanyUpdate,
    company = Depends(get_current_company),
    db: Session = Depends(get_db)
):

    if not company:
        raise HTTPException(
            status_code=401,
            detail="Not authenticated"
        )

    company_data = db.query(Company).filter(
        Company.id == company["company_id"]
    ).first()

    if not company_data:
        raise HTTPException(
            status_code=404,
            detail="Company not found"
        )

    company_data.website = data.website

    db.commit()
    db.refresh(company_data)

    return {
        "message": "Company profile updated successfully"
    }