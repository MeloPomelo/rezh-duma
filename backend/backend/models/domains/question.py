from backend.models.base import BaseModel


class Question(BaseModel):
    title: str
    type: str
    has_custom: bool
    variants: list[str]
    answers: list[str]
