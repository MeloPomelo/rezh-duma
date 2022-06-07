from datetime import datetime
from backend.models.base import BaseModel
from backend.models.mixins.id import IDModelMixin
from backend.models.mixins.date import DateModelMixin


class Vote(BaseModel):
    title: str
    text: str
    start_date: datetime
    end_date: datetime


class VoteInDb(Vote, IDModelMixin, DateModelMixin):
    pass
