from datetime import datetime, timezone
from typing import Iterable

from databases import Database
from sqlalchemy import Table, or_
from sqlalchemy.sql import Select
from sqlalchemy.testing.schema import Column

from backend.db.repositories.base import BaseRepository
from backend.models.base import BaseModel


class BaseDomainRepository(BaseRepository):
    def __init__(self, database: Database, table: Table):
        super().__init__(database, table)

    async def delete(self, id_: int):
        query = self.table.delete().where(self.table.columns.id == id_)
        await self.database.execute(query=query)

    def _add_params_to_query(self, query: Select, params: dict) -> Select:
        for key, value in params.items():
            column = self.table.columns.get(key)
            if column is not None and value is not None:
                if isinstance(value, str):
                    query = self._search_words_in_field(query, value.split(), column)
                elif not isinstance(value, datetime):
                    query = query.where(column == value)

        if date := params.get('from_created_date', False):
            query = query.where(date <= self.table.columns.created_at)
        if date := params.get('to_created_date', False):
            query = query.where(self.table.columns.created_at <= date)

        return query

    async def _update(self, id_: int, data: dict) -> dict:
        query = self.table.update().where(self.table.c.id == id_)
        query = query.values(**data).returning(self.table)
        dict_ = await self.database.fetch_one(query=query)

        return dict_

    @staticmethod
    def _search_words_in_field(query: Select, words: Iterable[str], field: Column) -> Select:
        conditionals = [field.ilike(f'%{word.strip()}%') for word in words]
        return query.filter(or_(*conditionals))

    @staticmethod
    def _delete_id(params: BaseModel) -> dict:
        data = params.dict()
        data['created_at'] = datetime.now(timezone.utc)
        data.pop('id', None)
        return data

    @staticmethod
    def _get_date():
        return {"created_at": datetime.now(timezone.utc)}
