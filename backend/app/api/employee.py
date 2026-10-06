from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.schemas.employee import (
    EmployeeCreate,
    EmployeeUpdate,
    EmployeeResponse
)
from app.models.employee import Employee
from app.models.company import Company
from app.core.database import get_db
from app.dependencies.auth import get_current_company

import pandas as pd
from fastapi import UploadFile, File
from io import BytesIO


router = APIRouter()


@router.post("/employees")
def create_employee(
    employee: EmployeeCreate,
    company=Depends(get_current_company),
    db: Session = Depends(get_db)
):
    print("JWT Company =", company)

    if not company:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated"
        )

    company_id = company["company_id"]

    company_data = db.query(Company).filter(
        Company.id == company_id
    ).first()

    if not company_data:
        return {
            "message": "Company not found"
        }

    if company_data.status != "approved":
        return {
            "message": "Company approval is required before adding employees."
        }

    existing_employee = db.query(Employee).filter(
        Employee.employee_id == employee.employee_id
    ).first()

    if existing_employee:
        raise HTTPException(
            status_code=409,
            detail="Employee ID already exists."
        )

    existing_email = db.query(Employee).filter(
        Employee.company_email == employee.company_email
    ).first()

    if existing_email:
        raise HTTPException(
            status_code=409,
            detail="Company email already exists."
        )

    new_employee = Employee(
        employee_id=employee.employee_id,
        full_name=employee.full_name,
        company_email=employee.company_email,
        designation=employee.designation,
        company_id=company_id
    )

    try:
        db.add(new_employee)
        db.commit()
        db.refresh(new_employee)

        return {
            "message": "Employee Created Successfully",
            "id": new_employee.id
        }

    except Exception as e:
        db.rollback()
        print("DATABASE ERROR:", e)
        raise e


@router.get(
    "/employees",
    response_model=list[EmployeeResponse]
)
def get_employees(
    company=Depends(get_current_company),
    db: Session = Depends(get_db)
):
    if not company:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated"
        )

    company_id = company["company_id"]

    employees = db.query(Employee).filter(
        Employee.company_id == company_id
    ).all()

    return employees


@router.get(
    "/employees/search/{employee_id}",
    response_model=EmployeeResponse
)
def search_employee(
    employee_id: str,
    company=Depends(get_current_company),
    db: Session = Depends(get_db)
):
    if not company:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated"
        )

    company_id = company["company_id"]

    employee = db.query(Employee).filter(
        Employee.employee_id == employee_id,
        Employee.company_id == company_id
    ).first()

    if not employee:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    return employee


@router.get(
    "/employees/email/{company_email}",
    response_model=EmployeeResponse
)
def search_by_email(
    company_email: str,
    company=Depends(get_current_company),
    db: Session = Depends(get_db)
):
    if not company:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated"
        )

    company_id = company["company_id"]

    employee = db.query(Employee).filter(
        Employee.company_email == company_email,
        Employee.company_id == company_id
    ).first()

    if not employee:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    return employee


@router.put("/employees/{employee_id}")
def update_employee(
    employee_id: str,
    employee: EmployeeUpdate,
    company=Depends(get_current_company),
    db: Session = Depends(get_db)
):
    if not company:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated"
        )

    company_id = company["company_id"]

    employee_data = db.query(Employee).filter(
        Employee.employee_id == employee_id,
        Employee.company_id == company_id
    ).first()

    if not employee_data:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    employee_data.full_name = employee.full_name
    employee_data.company_email = employee.company_email
    employee_data.designation = employee.designation

    db.commit()
    db.refresh(employee_data)

    return {
        "message": "Employee updated successfully"
    }


@router.delete("/employees/{employee_id}")
def delete_employee(
    employee_id: str,
    company=Depends(get_current_company),
    db: Session = Depends(get_db)
):
    if not company:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated"
        )

    company_id = company["company_id"]

    employee = db.query(Employee).filter(
        Employee.employee_id == employee_id,
        Employee.company_id == company_id
    ).first()

    # Fixed: employee_data -> employee
    if not employee:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    db.delete(employee)
    db.commit()

    return {
        "message": "Employee deleted successfully"
    }


@router.post("/employees/upload")
def upload_employees(
    file: UploadFile = File(...),
    company=Depends(get_current_company),
    db: Session = Depends(get_db)
):
    company_id = company["company_id"]

    print("Filename =", file.filename)
    print("Content Type =", file.content_type)

    if not file.filename.endswith(".csv"):
        raise HTTPException(
            status_code=400,
            detail="Only CSV files are allowed."
        )

    df = pd.read_csv(
        BytesIO(file.file.read())
    )

    total = len(df)
    inserted = 0
    duplicates = 0

    for _, row in df.iterrows():

        employee_id = str(row["employee_id"]).strip()
        full_name = str(row["full_name"]).strip()
        company_email = str(row["company_email"]).strip()
        designation = str(row["designation"]).strip()

        existing_employee = db.query(Employee).filter(
            Employee.employee_id == employee_id
        ).first()

        if existing_employee:
            duplicates += 1
            continue

        existing_email = db.query(Employee).filter(
            Employee.company_email == company_email
        ).first()

        if existing_email:
            duplicates += 1
            continue

        new_employee = Employee(
            employee_id=employee_id,
            full_name=full_name,
            company_email=company_email,
            designation=designation,
            company_id=company_id
        )

        db.add(new_employee)
        inserted += 1

    db.commit()

    return {
        "total": total,
        "inserted": inserted,
        "duplicates": duplicates
    }