from backend.db.repositories.applications import ApplicationsRepository
from backend.db.repositories.faq import FaqRepository
from backend.db.repositories.vote import VoteRepository
from backend.models.schemas.search import SearchInSelect, ListOfSearches


class SearchRepository:
    def __init__(self, faq_repo: FaqRepository, app_repo: ApplicationsRepository, vot_repo: VoteRepository):
        self.faq_repo = faq_repo
        self.app_repo = app_repo
        self.vot_repo = vot_repo

    async def select(self, params: SearchInSelect, limit: int, offset: int) -> ListOfSearches:
        faqs = await self.faq_repo.select(params, limit, offset)
        applications = await self.app_repo.select(params, limit, offset)
        votings = await self.vot_repo.select(params, limit, offset)

        return ListOfSearches(faqs=faqs.list, applications=applications.list, votings=votings.list)
