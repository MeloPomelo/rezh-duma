from databases import Database
from sqlalchemy import Table
from backend.db.repositories.base import BaseRepository


class PollsRepository(BaseRepository):

    def __init__(self, database: Database, table: Table):
        super().__init__(database, table)
