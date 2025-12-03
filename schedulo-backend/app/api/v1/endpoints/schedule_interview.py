from fastapi import APIRouter, Form

router = APIRouter()

@router.post("/schedule-interview")
async def schedule_interview(
    interview_date: str = Form(...),
    available_time: str = Form(...),
    meeting_type: str = Form(...),
    purpose_notes: str = Form(...)
):
    return {
        "status": "success",
        "data": {
            "interview_date": interview_date,
            "available_time": available_time,
            "meeting_type": meeting_type,
            "purpose/notes": purpose_notes
        }
    }
