from pydantic import BaseModel, ConfigDict


class ProjectResponse(BaseModel):
    id: int
    title: str
    description: str
    image: str
    tech_stack: list[str]

    model_config = ConfigDict(from_attributes=True)
