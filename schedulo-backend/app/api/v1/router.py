from fastapi import APIRouter
from .routes import auth_routes, protected_routes
from app.api.v1.endpoints import schedule_interview  


router = APIRouter()


router.include_router(auth_routes.router, prefix="/auth", tags=["Auth"])
router.include_router(protected_routes.router, prefix="/protected", tags=["Protected"])
router.include_router(schedule_interview.router, prefix="/interview", tags=["Interview"])

