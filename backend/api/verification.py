from fastapi import APIRouter, Depends
from app.dependencies.auth import get_current_admin
from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.core.database import get_db
from app.models.employee import Employee
from app.models.verification_request import VerificationRequest
from app.schemas.verification import (
    VerificationRequestCreate,
    VerificationHistoryResponse,
    VerificationStatsResponse,
    VerificationResponse
)

router = APIRouter()

@router.post(
    "/verify",
    response_model=VerificationResponse
)
def verify_employee(
    request: VerificationRequestCreate,
    db: Session = Depends(get_db)
):
    employee = None
    if request.search_type not in ["employee_id", "email"]:
        raise HTTPException(
            status_code=400,
            detail="search_type must be either 'employee_id' or 'email'."
        )
    

    if request.search_type == "employee_id":
        employee = db.query(Employee).filter(
            Employee.employee_id == request.search_value
        ).first()

    elif request.search_type == "email":
        employee = db.query(Employee).filter(
            Employee.company_email == request.search_value
        ).first()
    

    status = "verified" if employee else "not_found"
    trust_score = 100 if employee else 0

    verification = VerificationRequest(
        search_value=request.search_value,
        search_type=request.search_type,
        status=status
    )

    db.add(verification)
    db.commit()

    if employee:
        return {
            "verified": True,
            "status": status,
            "trust_score": trust_score,
            "message": "Employee record found in the company database."
        }

    return {
        "verified": False,
        "status": status,
        "trust_score": trust_score,
        "message": "No matching employee record found."
    }
@router.get(
    "/verification-history",
    response_model=list[VerificationHistoryResponse]
)
def get_verification_history(
    admin = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    history = db.query(
        VerificationRequest
    ).order_by(
        VerificationRequest.id.desc()
    ).all()

    return history


@router.get(
    "/verification/stats",
    response_model=VerificationStatsResponse
)
def verification_stats(
    admin = Depends(get_current_admin),
    db: Session = Depends(get_db)
):

    total_requests = db.query(VerificationRequest).count()

    verified = db.query(VerificationRequest).filter(
        VerificationRequest.status == "verified"
    ).count()

    not_found = db.query(VerificationRequest).filter(
        VerificationRequest.status == "not_found"
    ).count()

    return {
        "total_requests": total_requests,
        "verified": verified,
        "not_found": not_found
    }