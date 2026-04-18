from pydantic import BaseModel


class ServiceResponse(BaseModel):
    id: str
    title: str
    description: str
    technologies: list[str]
