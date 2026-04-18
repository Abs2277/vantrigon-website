from fastapi import APIRouter

from app.schemas.service import ServiceResponse
from app.services.catalog_service import list_services

router = APIRouter(prefix="/services", tags=["Services"])


@router.get("", response_model=list[ServiceResponse])
def get_services() -> list[ServiceResponse]:
    """Return the public service catalog for the frontend."""
    return list_services()
