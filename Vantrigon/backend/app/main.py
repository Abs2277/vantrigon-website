from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import contact, projects, services
from app.core.config import settings
from app.core.logging import configure_logging, logger
from app.db.session import Base, engine, SessionLocal
from app.services.project_service import seed_default_projects


@asynccontextmanager
async def lifespan(app: FastAPI):
    configure_logging()
    Base.metadata.create_all(bind=engine)

    with SessionLocal() as db:
        seed_default_projects(db)

    logger.info("%s started in %s mode", settings.app_name, settings.app_env)
    yield
    logger.info("%s stopped", settings.app_name)


app = FastAPI(
    title=settings.app_name,
    version="1.0.0",
    description="FastAPI backend for Vantrigon Tech.",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.router, prefix=settings.api_prefix)
app.include_router(services.router, prefix=settings.api_prefix)
app.include_router(projects.router, prefix=settings.api_prefix)


@app.get("/health", tags=["Health"])
def health_check() -> dict[str, str]:
    """Return a lightweight status response for uptime checks."""
    return {"status": "ok", "service": settings.app_name}
