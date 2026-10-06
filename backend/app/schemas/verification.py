from pydantic import BaseModel
from datetime import datetime


class VerificationRequestCreate(BaseModel):
    search_value: str
    search_type: str


class VerificationResponse(BaseModel):
    verified: bool
    status: str
    trust_score: int
    message: str


class VerificationHistoryResponse(BaseModel):
    id: int
    search_type: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True


class VerificationStatsResponse(BaseModel):
    total_requests: int
    verified: int
    not_found: int