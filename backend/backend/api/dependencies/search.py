from backend.api.dependencies.applications import get_applications_repository
from backend.api.dependencies.faq import get_faq_repository
from backend.api.dependencies.vote import get_vote_repository
from backend.db.repositories.search import SearchRepository


def get_search_repository() -> SearchRepository:
    return SearchRepository(get_faq_repository(), get_applications_repository(), get_vote_repository())
