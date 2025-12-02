from pydantic import BaseModel, EmailStr, Field
from typing import Optional


class RegisterRequest(BaseModel):
    firstName: str = Field(..., min_length=1)
    lastName: str = Field(..., min_length=1)
    email: EmailStr
    phone: str
    password: str = Field(..., min_length=8)
    userType: str  # 'candidate' | 'recruiter' | 'admin'
    # optional fields for candidate/recruiter
    skills: Optional[str] = None
    education: Optional[str] = None
    location: Optional[str] = None
    companyName: Optional[str] = None
    position: Optional[str] = None
    department: Optional[str] = None


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"


class ForgotPassword(BaseModel):
    email : EmailStr
    
