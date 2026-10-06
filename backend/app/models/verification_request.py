from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime

from app.models.user import Base

class VerificationRequest(Base):
    __tablename__ = "verification_requests"

    id = Column(Integer, primary_key=True, index=True)

    search_value = Column(String, nullable=False)

    search_type = Column(String, nullable=False)

    status = Column(String, nullable=False)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )