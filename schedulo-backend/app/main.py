from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.router import router as api_v1_router   
from app.db.database import create_indexes

app = FastAPI(title="Schedulo Backend")

# CORS settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "*"],  # tighten in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Add API versioning
app.include_router(api_v1_router, prefix="/api/v1")

# Startup tasks
@app.on_event("startup")
async def startup_event():
    await create_indexes()

# Root route
@app.get("/")
async def root():
    return {"message": "Schedulo backend running"}
