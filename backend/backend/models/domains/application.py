from typing import Optional
from backend.models.mixins.base_domain import BaseDomainModelMixin, BaseDomainInDbModelMixin


class Application(BaseDomainModelMixin):
    is_public: bool


class ApplicationInDB(BaseDomainInDbModelMixin, Application):
    feedback: Optional[str]
