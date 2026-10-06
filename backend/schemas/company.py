from pydantic import BaseModel, EmailStr
from typing import Optional


class CompanyCreate(BaseModel):
    company_name: str
    email: EmailStr
    password: str
    website: Optional[str] = None
    
class CompanyLogin(BaseModel):
    email: EmailStr
    password: str
class CompanyResponse(BaseModel):
    id: int
    company_name: str
    website: str | None = None
    email: EmailStr
    status: str

    class Config:
        from_attributes = True
class CompanyUpdate(BaseModel):
    website: str | None = None