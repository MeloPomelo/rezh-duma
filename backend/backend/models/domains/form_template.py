from backend.models.mixins.id import IDModelMixin
from backend.models.mixins.date import DateModelMixin
from backend.models.domains.question import Question


class FormTemplate(IDModelMixin):
    questions: list[Question]


class FormTemplateInDB(FormTemplate, DateModelMixin):
    pass
