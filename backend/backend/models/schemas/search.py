from typing import Optional
from backend.models.base import BaseModel
from backend.models.domains.application import ApplicationInDB
from backend.models.domains.faq import FaqInDB
from backend.models.domains.vote import VoteInDb


class ListOfSearches(BaseModel):
    faqs: list[FaqInDB]
    applications: list[ApplicationInDB]
    votings: list[VoteInDb]


class SearchInSelect:
    def __init__(self, title: Optional[str] = None):
        self.title = title
