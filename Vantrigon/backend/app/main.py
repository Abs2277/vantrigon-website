from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from app.api.routes import contact, projects, services
from app.core.config import settings
from app.core.logging import configure_logging, logger
from app.db.session import Base, engine, SessionLocal
from app.services.project_service import seed_default_projects


PROJECT_ROOT = Path(__file__).resolve().parents[2]
DIST_DIR = PROJECT_ROOT / "dist"
INDEX_HTML = DIST_DIR / "index.html"
ASSETS_DIR = DIST_DIR / "assets"


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

if ASSETS_DIR.is_dir():
    app.mount(
        "/assets",
        StaticFiles(directory=ASSETS_DIR),
        name="assets",
    )


@app.get("/health", tags=["Health"])
def health_check() -> dict[str, str]:
    """Return a lightweight status response for uptime checks."""
    return {"status": "ok", "service": settings.app_name}


@app.get("/", include_in_schema=False)
def serve_frontend() -> FileResponse:
    """Serve the React app entrypoint."""
    if not INDEX_HTML.is_file():
        raise HTTPException(status_code=404, detail="Frontend build not found.")

    return FileResponse(INDEX_HTML)


@app.get("/{full_path:path}", include_in_schema=False)
def serve_spa(full_path: str) -> FileResponse:
    """Serve built frontend files and fall back to the SPA entrypoint."""
    api_prefix = settings.api_prefix.strip("/")
    protected_paths = {
        "docs",
        "redoc",
        "openapi.json",
        "health",
    }

    if full_path in protected_paths or (
        api_prefix and (full_path == api_prefix or full_path.startswith(f"{api_prefix}/"))
    ):
        raise HTTPException(status_code=404, detail="Not found.")

    requested_path = (DIST_DIR / full_path).resolve()
    if (
        DIST_DIR.resolve() in requested_path.parents
        and requested_path.is_file()
        and requested_path != INDEX_HTML
    ):
        return FileResponse(requested_path)

    if not INDEX_HTML.is_file():
        raise HTTPException(status_code=404, detail="Frontend build not found.")

    return FileResponse(INDEX_HTML)
