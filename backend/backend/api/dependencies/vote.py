from backend.db.base import database
from backend.db.mongodb import mongo_db
from backend.db.repositories.vote import VoteRepository
from backend.db.tables.vote import vote_table


def get_vote_repository() -> VoteRepository:
    return VoteRepository(database, vote_table, mongo_db.client)
