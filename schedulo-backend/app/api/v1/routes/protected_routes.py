from fastapi import APIRouter, Depends
from app.deps import get_current_user, require_role

router = APIRouter()


@router.get("/me")
async def read_my_profile(current_user=Depends(get_current_user)):
    return {"user": current_user}


@router.get("/candidate-only")
async def candidate_area(user=Depends(require_role("candidate"))):
    return {"message": "Candidate content", "user": user}


@router.get("/recruiter-or-admin")
async def recruiter_area(user=Depends(require_role("recruiter", "admin"))):
    return {"message": "Recruiter/Admin content", "user": user}
