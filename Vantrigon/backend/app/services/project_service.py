from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.project import Project


DEFAULT_PROJECTS = [
    {
        "title": "AI Support Desk",
        "description": "A customer support assistant that triages tickets, drafts replies, and escalates urgent requests.",
        "image": "/images/projects/ai-support-desk.jpg",
        "tech_stack": ["FastAPI", "OpenAI", "PostgreSQL", "React"],
    },
    {
        "title": "Cloud Analytics Platform",
        "description": "A secure analytics dashboard with automated reporting and cloud-native data pipelines.",
        "image": "/images/projects/cloud-analytics.jpg",
        "tech_stack": ["Python", "AWS", "Docker", "SQLAlchemy"],
    },
    {
        "title": "Commerce API Suite",
        "description": "A high-performance backend for products, checkout, payments, and operational integrations.",
        "image": "/images/projects/commerce-api.jpg",
        "tech_stack": ["FastAPI", "Stripe", "Redis", "PostgreSQL"],
    },
]


def seed_default_projects(db: Session) -> None:
    has_projects = db.scalar(select(Project.id).limit(1))
    if has_projects:
        return

    db.add_all(Project(**project) for project in DEFAULT_PROJECTS)
    db.commit()


def list_projects(db: Session) -> list[Project]:
    return list(db.scalars(select(Project).order_by(Project.id)))
