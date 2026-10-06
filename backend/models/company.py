from sqlalchemy import Column, Integer, String
from app.models.user import Base


class Company(Base):
    __tablename__ = "companies"

    id = Column(Integer, primary_key=True, index=True)

    company_name = Column(String, nullable=False, unique=True)

    website = Column(String, nullable=True)

    status = Column(
        String,
        nullable=False,
        
        default="pending"
    )

    email = Column(
        String,
        unique=True,
        nullable=True
    )

    password_hash = Column(
        String,
        nullable=True
    )