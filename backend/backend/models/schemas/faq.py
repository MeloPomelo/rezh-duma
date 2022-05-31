from typing import Optional
from fastapi import Query
from backend.models.domains.faq import Faq, FaqInDB
from backend.models.mixins.base_domain import ListOfBaseDomainsMixin


class ListOfFaqs(ListOfBaseDomainsMixin):
    list: list[FaqInDB]


class FaqInCreate(Faq):
    pass


class FaqInSelect:
    def __init__(self, title: Optional[str] = None, id_: Optional[int] = Query(None, alias="id")):
        self.title = title
        self.id = id_


class FaqInUpdate(FaqInCreate):
    pass
