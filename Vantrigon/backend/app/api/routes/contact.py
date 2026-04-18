from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.schemas.contact import ContactCreate, ContactResponse
from app.services.contact_service import create_contact_submission

router = APIRouter(prefix="/contact", tags=["Contact"])


@router.post("", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
def submit_contact_form(payload: ContactCreate, db: Session = Depends(get_db)) -> ContactResponse:
    """Validate, store, and optionally email a contact form submission."""
    return create_contact_submission(db=db, payload=payload)
