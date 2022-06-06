from backend.models.domains.form_template import FormTemplateInDB
from backend.models.domains.question import Question
from backend.models.domains.vote import Vote, VoteInDb
from backend.models.mixins.base_domain import ListOfBaseDomainsMixin, BaseDomainInSelectModelMixin


class VoteInCreate(Vote):
    questions: list[Question]


class VoteInSelect(BaseDomainInSelectModelMixin):
    pass


class VoteInResponse(VoteInDb):
    template: FormTemplateInDB | None


class ListOfVotes(ListOfBaseDomainsMixin):
    list: list[VoteInResponse]
