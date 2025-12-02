"""
MongoDB user document helpers.
"""
from typing import Dict, Any

def user_response(document: Dict[str, Any]) -> Dict[str, Any]:
    """
    Convert a raw MongoDB user document into a safe JSON-ready dict.
    - Converts _id -> id (string)
    - Removes sensitive fields
    - Avoids ObjectId JSON errors
    """
    if not document:
        return {}

    # Convert ObjectId
    _id = document.get("_id")
    user_id = str(_id) if _id else None

    return {
        "id": user_id,
        "firstName": document.get("firstName"),
        "lastName": document.get("lastName"),
        "email": document.get("email"),
        "phone": document.get("phone"),
        "userType": document.get("userType"),
        "skills": document.get("skills"),
        "experience": document.get("experience"),
        "education": document.get("education"),
        "location": document.get("location"),
        "companyName": document.get("companyName"),
        "companyWebsite": document.get("companyWebsite"),
        "companySize": document.get("companySize"),
        "position": document.get("position"),
        "department": document.get("department"),
        "linkedIn": document.get("linkedIn"),
        "createdAt": document.get("createdAt"),
    }
