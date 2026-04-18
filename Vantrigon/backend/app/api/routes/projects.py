from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.schemas.project import ProjectResponse
from app.services.project_service import list_projects

router = APIRouter(prefix="/projects", tags=["Portfolio"])


@router.get("", response_model=list[ProjectResponse])
def get_projects(db: Session = Depends(get_db)) -> list[ProjectResponse]:
    """Return portfolio projects stored in the database."""
    return list_projects(db)
