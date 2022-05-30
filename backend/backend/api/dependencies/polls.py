from backend.db.base import database
from backend.db.repositories.polls import PollsRepository
from backend.db.tables.polls import polls_table


def get_polls_repository() -> PollsRepository:
    return PollsRepository(database, polls_table)
