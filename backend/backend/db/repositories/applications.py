from databases import Database
from sqlalchemy import Table, select, func
from backend.core.config import STANDARD_DATA_LIMIT
from backend.db.repositories.base_domain import BaseDomainRepository
from backend.models.domains.application import ApplicationInDB
from backend.models.schemas.application import ApplicationInSelect, ListOfApplications, ApplicationInCreate


class ApplicationsRepository(BaseDomainRepository):

    def __init__(self, database: Database, table: Table):
        super().__init__(database, table)

    async def create(self, application: ApplicationInCreate) -> ApplicationInDB:
        application = ApplicationInDB(**application.dict(), status="Отправлено на рассмотрение")
        query = self.table.insert().values(**self._delete_id(application)).returning(self.table)
        application = await self.database.fetch_one(query=query)

        return ApplicationInDB(**application)

    async def update(self, id_: int, application: dict) -> ApplicationInDB:
        application = await self._update(id_, application)

        return ApplicationInDB(**application)

    async def select(self, application: ApplicationInSelect, limit: int = STANDARD_DATA_LIMIT,
                     offset: int = 0) -> ListOfApplications:
        query = self._add_params_to_query(self.table.select(), application.__dict__)
        query_with_restrictions = query.limit(limit).offset(offset)
        query_for_total = select(func.count()).select_from(query.subquery())
        applications = await self.database.fetch_all(query=query_with_restrictions)
        total = await self.database.execute(query_for_total)
        applications = [ApplicationInDB(**application) for application in applications]

        return ListOfApplications(total=total, list=applications, count=len(applications))
