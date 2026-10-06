from app.models.user import Base
from app.models.company import Company
from app.models.employee import Employee
from app.models.verification_request import VerificationRequest
from app.core.database import engine
from app.models.admin import Admin

Base.metadata.create_all(bind=engine)

print("Tables Created Successfully!")