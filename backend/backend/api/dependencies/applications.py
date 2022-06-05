from backend.db.base import database
from backend.db.repositories.applications import ApplicationsRepository
from backend.db.tables.applications import applications_table


def get_applications_repository() -> ApplicationsRepository:
    return ApplicationsRepository(database, applications_table)
