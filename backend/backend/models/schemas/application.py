from backend.models.base import BaseModel
from backend.models.domains.application import Application, ApplicationInDB
from backend.models.mixins.base_domain import ListOfBaseDomainsMixin, BaseDomainInSelectModelMixin


class ListOfApplications(ListOfBaseDomainsMixin):
    list: list[ApplicationInDB]


class ApplicationInCreate(Application):
    pass


class ApplicationInSelect(BaseDomainInSelectModelMixin):
    pass


class ApplicationInReply(BaseModel):
    feedback: str
    status: str


class ApplicationInUpdate(ApplicationInCreate):
    pass