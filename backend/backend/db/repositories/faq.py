from databases import Database
from sqlalchemy import Table, select, func
from backend.core.config import STANDARD_DATA_LIMIT
from backend.db.repositories.base_domain import BaseDomainRepository
from backend.models.domains.faq import FaqInDB
from backend.models.schemas.faq import FaqInSelect, ListOfFaqs, FaqInCreate


class FaqRepository(BaseDomainRepository):

    def __init__(self, database: Database, table: Table):
        super().__init__(database, table)

    async def create(self, faq: FaqInCreate) -> FaqInDB:
        faq = FaqInDB(**faq.dict())
        query = self.table.insert().values(**self._delete_id(faq)).returning(self.table)
        faq = await self.database.fetch_one(query=query)

        return FaqInDB(**faq)

    async def update(self, id_: int, faq: dict) -> FaqInDB:
        faq = await self._update(id_, faq)

        return FaqInDB(**faq)

    async def select(self, faq_: FaqInSelect, limit: int = STANDARD_DATA_LIMIT, offset: int = 0) -> ListOfFaqs:
        query = self._add_params_to_query(self.table.select(), faq_.__dict__)
        query_with_restrictions = query.limit(limit).offset(offset)
        query_for_total = select(func.count()).select_from(query.subquery())
        faqs = await self.database.fetch_all(query=query_with_restrictions)
        total = await self.database.execute(query_for_total)
        faqs = [FaqInDB(**faq) for faq in faqs]

        return ListOfFaqs(total=total, list=faqs, count=len(faqs))
