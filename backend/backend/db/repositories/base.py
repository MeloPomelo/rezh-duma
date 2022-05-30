from datetime import datetime, timezone

from databases import Database
from sqlalchemy import Table


class BaseRepository:
    def __init__(self, database: Database, table: Table):
        self.database = database
        self.table = table

    @staticmethod
    def created_at() -> dict:
        return {'created_at': datetime.now(timezone.utc)}
