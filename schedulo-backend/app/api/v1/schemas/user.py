from pydantic import BaseModel, EmailStr
from typing import Optional


class UserOut(BaseModel):
    id: str
    firstName: str
    lastName: str
    email: EmailStr
    phone: str
    userType: str
    createdAt: Optional[str] = None
