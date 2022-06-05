from backend.models.mixins.base_domain import (BaseDomainModelMixin, BaseDomainInDbModelMixin,
                                               BaseDomainInSelectModelMixin)


class Poll(BaseDomainModelMixin):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)


class PollInDB(BaseDomainInDbModelMixin, Poll):
    pass
