from app.schemas.service import ServiceResponse


def list_services() -> list[ServiceResponse]:
    return [
        ServiceResponse(
            id="backend-development",
            title="Backend Dev",
            description="Secure APIs, database design, integrations, and automation for scalable products.",
            technologies=["FastAPI", "Python", "PostgreSQL", "SQLAlchemy"],
        ),
        ServiceResponse(
            id="ai-solutions",
            title="AI Solutions",
            description="Practical AI workflows, assistants, and model integrations built around business outcomes.",
            technologies=["OpenAI", "LangChain", "Vector Search", "Automation"],
        ),
        ServiceResponse(
            id="cloud",
            title="Cloud",
            description="Deployment, observability, and infrastructure patterns for reliable production systems.",
            technologies=["Docker", "AWS", "CI/CD", "Monitoring"],
        ),
    ]
