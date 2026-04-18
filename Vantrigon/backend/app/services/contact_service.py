from sqlalchemy.orm import Session

from app.core.logging import logger
from app.models.contact import Contact
from app.schemas.contact import ContactCreate, ContactResponse
from app.services.email_service import send_contact_notification


def create_contact_submission(db: Session, payload: ContactCreate) -> ContactResponse:
    contact = Contact(name=payload.name, email=str(payload.email), message=payload.message)
    db.add(contact)
    db.commit()
    db.refresh(contact)

    logger.info("Stored contact submission id=%s email=%s", contact.id, contact.email)
    send_contact_notification(contact)

    return ContactResponse.model_validate(contact)
