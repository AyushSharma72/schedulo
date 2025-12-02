"""
Async MongoDB (motor) connection and collection handles.
"""
from motor.motor_asyncio import AsyncIOMotorClient
from app.config import settings

client = AsyncIOMotorClient(settings.MONGO_URI)
db = client[settings.MONGO_DB]
users_collection = db["users"]
# Optionally: index creation (email unique)
async def create_indexes():
    await users_collection.create_index("email", unique=True)
