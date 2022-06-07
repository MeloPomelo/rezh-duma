from backend.models.base import BaseModel
from backend.models.mixins.id import IDModelMixin
from backend.models.mixins.date import DateModelMixin


class Faq(BaseModel):
    title: str
    text: str


class FaqInDB(IDModelMixin, DateModelMixin, Faq):
    pass
