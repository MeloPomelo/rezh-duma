from datetime import datetime
from typing import Optional, Iterable

from fastapi import Query
from pydantic import NonNegativeInt
from backend.models.base import BaseModel
from backend.models.mixins.id import IDModelMixin
from backend.models.mixins.date import DateModelMixin


class ListOfBaseDomainsMixin(BaseModel):
    total: NonNegativeInt
    count: NonNegativeInt


class BaseDomainModelMixin(BaseModel):
    title: str
    text: str
    author: str
    location: Optional[str]
    location_name: Optional[str]
    files: Optional[list[str]]
    tags: Optional[list[str]]


class BaseDomainInDbModelMixin(BaseDomainModelMixin, IDModelMixin, DateModelMixin):
    status: str


class BaseDomainInSelectModelMixin:
    def __init__(self, title: Optional[str] = None, id_: Optional[int] = Query(None, alias="id"),
                 from_created_date: Optional[datetime] = None, to_created_date: Optional[datetime] = None,
                 author: Optional[str] = None, tags: Optional[list[str]] = Query(None)):
        self.title = title
        self.id = id_
        self.author = author
        self.from_created_date = from_created_date
        self.to_created_date = to_created_date
        self.tags = tags
