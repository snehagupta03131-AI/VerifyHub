from fastapi import FastAPI
from app.api.user import router as user_router
from app.api.company import router as company_router
from app.api.employee import router as employee_router
from app.api.verification import router as verification_router
from app.api.admin import router as admin_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Employee Verification API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router)
app.include_router(company_router)
app.include_router(employee_router)
app.include_router(verification_router)
app.include_router(admin_router)

@app.get("/")
def home():
    return {
        "message": "Employee Verification Backend Running"
    }
