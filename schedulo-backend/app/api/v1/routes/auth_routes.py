from fastapi import APIRouter, HTTPException, status, Depends
from app.api.v1.schemas.auth import RegisterRequest, LoginRequest, TokenResponse , ForgotPassword
from app.services import user_service
from app.core import security

from pymongo.errors import DuplicateKeyError
import random

router = APIRouter()


@router.post("/register", response_model=dict, status_code=201)
async def register(payload: RegisterRequest):
    """
    Register a new user. Validates unique email and creates user.
    """
    existing = await user_service.find_by_email(payload.email)
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    try:
        user_id = await user_service.create_user(payload.dict())
    except DuplicateKeyError:
        raise HTTPException(status_code=400, detail="Email already registered")

    return {"message": "User registered", "userId": user_id}


@router.post("/login", response_model=TokenResponse)
async def login(payload: LoginRequest):
    """Authenticate and return access + refresh tokens."""
    user = await user_service.find_by_email(payload.email)
    if not user:
        raise HTTPException(status_code=400, detail="Invalid credentials")

    if not security.verify_password(payload.password, user["password"]):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    user_id = str(user["_id"])
    access = security.create_access_token(subject=user_id, extra={"role": user["userType"]})
    refresh = security.create_refresh_token(subject=user_id)
    # store hashed refresh token in DB
    await user_service.set_refresh_token(user_id, refresh)
    return {"access_token": access, "refresh_token": refresh, "token_type": "bearer"}


@router.post("/refresh", response_model=TokenResponse)
async def refresh_token(refresh_token: str):
    """
    Exchange refresh token for a new access+refresh pair.
    This implementation rotates refresh tokens.
    """
    try:
        payload = security.decode_token(refresh_token)
        if payload.get("type") != "refresh":
            raise Exception("Not a refresh token")
        user_id = payload.get("sub")
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid refresh token")

    # validate stored hashed refresh token
    ok = await user_service.verify_refresh_token(user_id, refresh_token)
    if not ok:
        raise HTTPException(status_code=401, detail="Refresh token revoked/invalid")

    # rotate tokens
    access = security.create_access_token(subject=user_id)
    new_refresh = security.create_refresh_token(subject=user_id)
    await user_service.set_refresh_token(user_id, new_refresh)
    return {"access_token": access, "refresh_token": new_refresh, "token_type": "bearer"}


@router.post("/logout", status_code=204)
async def logout(current_user=Depends(user_service.find_by_id)):
    """
    Invalidate refresh token (logout). You can also track token revocation lists here.
    """
    # current_user should be fetched using dependency. Here for brevity, accept user_id param.
    if not current_user:
        raise HTTPException(status_code=401)
    await user_service.revoke_refresh_token(str(current_user["_id"]))
    return None

@router.post("/forgot-password")
async def forgot_password(payload: ForgotPassword):
    existing = await user_service.find_by_email(payload.email)
    if(existing):
        return "Email sent"
    else:
        return "Email Not found , Resubmit Email"

@router.post(
    "/notifications/send-reminders",
    summary="Send reminder emails for upcoming interviews",
    description="Mock implementation: finds interviews starting within 1 hour and sends reminder emails to HR and candidates."
)
async def send_reminder_notifications():
    now = datetime.utcnow()
    interview_start = now + timedelta(minutes=45)

    mock_interview = {
        "id": 10,
        "candidateEmail": "candidate@example.com",
        "hrEmail": "hr@example.com",
        "start": interview_start
    }

    if now <= interview_start <= now + timedelta(hours=1):
        print(f"Sending reminder to {mock_interview['candidateEmail']} and {mock_interview['hrEmail']}")

        return {
            "message": "Reminder emails sent",
            "interviewId": mock_interview["id"],
            "timeUntilStartMinutes": 45
        }

    return {"message": "No interviews within the next hour"}