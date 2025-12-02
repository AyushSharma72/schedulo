from fastapi import APIRouter
from .routes import auth_routes, protected_routes

router = APIRouter()

router.include_router(auth_routes.router, prefix="/auth", tags=["Auth"])
router.include_router(protected_routes.router, prefix="/protected", tags=["Protected"])
