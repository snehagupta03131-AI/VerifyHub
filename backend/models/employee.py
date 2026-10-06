from sqlalchemy import Column, Integer, String, ForeignKey
from app.models.user import Base

class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)

    employee_id = Column(String, unique=True, nullable=False)

    full_name = Column(String, nullable=False)

    company_email = Column(String, unique=True, nullable=False)

    designation = Column(String, nullable=False)

    company_id = Column(Integer, ForeignKey("companies.id"))