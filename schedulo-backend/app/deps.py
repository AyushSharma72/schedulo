"""
Dependency utilities for auth and role checks.
"""
from fastapi import Depends, HTTPException, status
from fastapi.security import APIKeyHeader
from typing import Dict, Any
from app.core import security
from app.services import user_service
from app.models.user_model import user_response   # <-- IMPORTANT FIX

# Read "Authorization" header directly 
oauth2_scheme = APIKeyHeader(name="Authorization", auto_error=False)


async def get_current_user(token: str = Depends(oauth2_scheme)) -> Dict[str, Any]:
    # No token provided at all
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing authorization header",
        )

    # Accept both "Bearer <token>" and "<token>"
    if token.startswith("Bearer "):
        token = token.split(" ")[1]

    # Decode JWT
    try:
        payload = security.decode_token(token)
        user_id = payload.get("sub")
        if not user_id:
            raise HTTPException(status.HTTP_401_UNAUTHORIZED)
    except Exception:
        raise HTTPException(
            status_code=401,
            detail="Invalid or expired token",
        )

    # Fetch user from DB
    user = await user_service.find_by_id(user_id)
    if not user:
        raise HTTPException(status_code=401, detail="User not found")

    # IMPORTANT FIX: convert MongoDB doc → safe JSON-ready dict
    return user_response(user)


def require_role(*allowed_roles: str):
    async def role_checker(user: Dict[str, Any] = Depends(get_current_user)):
        if user.get("userType") not in allowed_roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Insufficient privileges",
            )
        return user

    return role_checker
