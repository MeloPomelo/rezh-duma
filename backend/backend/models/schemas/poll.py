from backend.models.domains.poll import Poll, PollInDB
from backend.models.mixins.base_domain import ListOfBaseDomainsMixin, BaseDomainInSelectModelMixin


class ListOfPolls(ListOfBaseDomainsMixin):
    list: list[PollInDB]


class PollInCreate(Poll):
    pass


class PollInSelect(BaseDomainInSelectModelMixin):
    pass
