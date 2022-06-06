from databases import Database
from sqlalchemy import Table, select, func

from backend.core.config import STANDARD_DATA_LIMIT
from backend.db.repositories.base_domain import BaseDomainRepository
from backend.db.mongodb import AsyncIOMotorClient
from backend.models.domains.form import FormInDB, FormInCreate
from backend.models.domains.form_template import FormTemplateInDB
from backend.models.domains.vote import VoteInDb
from backend.core.config import MONGO_DB
from backend.models.schemas.vote import VoteInCreate, VoteInResponse, ListOfVotes, VoteInSelect


class VoteRepository(BaseDomainRepository):

    def __init__(self, database: Database, table: Table, mongo: AsyncIOMotorClient):
        super().__init__(database, table)
        self.mongo = mongo
        self.template_collection = "templates"
        self.vote_collection = "votes"

    async def create(self, vote: VoteInCreate) -> VoteInResponse:
        vote_dict = vote.dict()
        questions = vote_dict.pop("questions")
        vote = VoteInDb(**vote_dict)
        query = self.table.insert().values(**self._delete_id(vote)).returning(self.table)
        vote = await self.database.fetch_one(query=query)
        vote = VoteInDb(**vote)
        template = FormTemplateInDB(id=vote.id, questions=questions)
        template_dict = template.dict()
        await self.mongo[MONGO_DB][self.template_collection].insert_one(template_dict)

        return VoteInResponse(**vote.dict(), template=template_dict)

    async def update(self, id_: int, application: dict) -> VoteInResponse:
        vote = await self._update(id_, application)

        return VoteInResponse(**vote)

    async def _get_template(self, id_: int) -> dict | None:
        template = await self.mongo[MONGO_DB][self.template_collection].find_one({"id": id_})
        print(1, template)

        return template or None

    async def select(self, vote: VoteInSelect, limit: int = STANDARD_DATA_LIMIT,
                     offset: int = 0) -> ListOfVotes:
        query = self._add_params_to_query(self.table.select(), vote.__dict__)
        query_with_restrictions = query.limit(limit).offset(offset)
        query_for_total = select(func.count()).select_from(query.subquery())
        votes = await self.database.fetch_all(query=query_with_restrictions)
        total = await self.database.execute(query_for_total)
        if vote.id and total:
            print(votes)
            votes = [VoteInResponse(**vote_, template=await self._get_template(vote.id)) for vote_ in votes]
        else:
            votes = [VoteInResponse(**vote_, template=None) for vote_ in votes]

        return ListOfVotes(total=total, list=votes, count=len(votes))

    async def get_answers(self, vote_id: int, author_id: int) -> FormInDB:
        answers = await self.mongo[MONGO_DB][self.vote_collection].find_one({"id": vote_id, "author_id": author_id})

        return FormInDB(**(answers or {'answers': [], 'author_id': author_id}))

    async def vote(self, form: FormInCreate) -> FormInDB:
        form_in_db = {**form.dict(), **self._get_date()}
        await self.mongo[MONGO_DB][self.vote_collection].insert_one(form_in_db)

        return FormInDB(**form_in_db)
