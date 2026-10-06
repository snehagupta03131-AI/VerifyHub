from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer

from app.security.jwt import verify_token


oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/company/login",
    scheme_name="CompanyAuth",
    auto_error=False
)


def get_current_company(
    token: str = Depends(oauth2_scheme)
):
    if token is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated"
        )

    payload = verify_token(token)

    if not payload:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token"
        )

    return payload


admin_oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/admin/login",
    scheme_name="AdminAuth"
)


def get_current_admin(
    token: str = Depends(admin_oauth2_scheme)
):
    payload = verify_token(token)

    if not payload:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated"
        )

    return payload