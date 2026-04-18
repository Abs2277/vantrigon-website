from datetime import datetime

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100, examples=["Ada Lovelace"])
    email: EmailStr = Field(..., examples=["ada@example.com"])
    message: str = Field(..., min_length=10, max_length=2000, examples=["I would like to discuss a backend project."])


class ContactResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    message: str
    created_at: datetime
    status: str = "received"

    model_config = ConfigDict(from_attributes=True)
