from pydantic import BaseModel, EmailStr


class EmployeeCreate(BaseModel):
    employee_id: str
    full_name: str
    company_email: EmailStr
    designation: str
class EmployeeUpdate(BaseModel):
    full_name: str
    company_email: EmailStr
    designation: str  
class EmployeeResponse(BaseModel):
    id: int
    employee_id: str
    full_name: str
    designation: str
    company_email: EmailStr
    company_id: int

    class Config:
        from_attributes = True