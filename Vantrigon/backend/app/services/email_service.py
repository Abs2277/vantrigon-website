import smtplib
from email.message import EmailMessage

from app.core.config import settings
from app.core.logging import logger
from app.models.contact import Contact


def send_contact_notification(contact: Contact) -> None:
    if not settings.email_enabled:
        return

    message = EmailMessage()
    message["Subject"] = f"New Vantrigon Tech contact from {contact.name}"
    message["From"] = settings.smtp_from
    message["To"] = settings.contact_notification_to
    message.set_content(
        f"Name: {contact.name}\n"
        f"Email: {contact.email}\n\n"
        f"Message:\n{contact.message}\n"
    )

    try:
        with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=10) as smtp:
            smtp.starttls()
            if settings.smtp_username and settings.smtp_password:
                smtp.login(settings.smtp_username, settings.smtp_password)
            smtp.send_message(message)
        logger.info("Sent contact notification for submission id=%s", contact.id)
    except Exception:
        logger.exception("Failed to send contact notification for submission id=%s", contact.id)
