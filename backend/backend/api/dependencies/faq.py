from backend.db.base import database
from backend.db.repositories.faq import FaqRepository
from backend.db.tables.faq import faqs_table


def get_faq_repository() -> FaqRepository:
    return FaqRepository(database, faqs_table)
