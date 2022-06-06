from backend.models.base import BaseModel
from backend.models.mixins.id import IDModelMixin
from backend.models.mixins.date import DateModelMixin
from backend.models.domains.question import Question


class Form(BaseModel):
    author_id: int
    answers: list[Question]


class FormInCreate(Form, IDModelMixin):
    pass


class FormInDB(FormInCreate, DateModelMixin):
    pass
