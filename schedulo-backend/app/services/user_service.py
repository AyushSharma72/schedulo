"""
DB-level operations related to users.
"""
from typing import Optional, Dict, Any
from datetime import datetime
from app.db.database import users_collection
from app.core import security
from bson import ObjectId
from pymongo.errors import DuplicateKeyError


async def find_by_email(email: str) -> Optional[Dict[str, Any]]:
    return await users_collection.find_one({"email": email})


async def find_by_id(user_id: str) -> Optional[Dict[str, Any]]:
    return await users_collection.find_one({"_id": ObjectId(user_id)})


async def create_user(payload: Dict[str, Any]) -> str:
    """Insert new user. Password is hashed here."""
    doc = payload.copy()
    doc["password"] = security.hash_password(payload["password"])
    doc["createdAt"] = datetime.utcnow().isoformat()
    # initialize refresh token hash field
    doc["refresh_token_hash"] = None
    try:
        result = await users_collection.insert_one(doc)
    except DuplicateKeyError:
        raise
    return str(result.inserted_id)


async def set_refresh_token(user_id: str, refresh_token: str) -> None:
    h = security._hash_refresh_token(refresh_token)
    await users_collection.update_one(
        {"_id": ObjectId(user_id)}, {"$set": {"refresh_token_hash": h}}
    )


async def revoke_refresh_token(user_id: str) -> None:
    await users_collection.update_one(
        {"_id": ObjectId(user_id)}, {"$set": {"refresh_token_hash": None}}
    )


async def verify_refresh_token(user_id: str, refresh_token: str) -> bool:
    doc = await find_by_id(user_id)
    if not doc or not doc.get("refresh_token_hash"):
        return False
    return security._hash_refresh_token(refresh_token) == doc["refresh_token_hash"]
