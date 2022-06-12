from fastapi import APIRouter, Depends, status

from backend.api.dependencies.search import get_search_repository
from backend.core.config import STANDARD_DATA_LIMIT
from backend.db.repositories.search import SearchRepository
from backend.models.domains.data_from_db import get_data_from_db
from backend.models.schemas.search import SearchInSelect, ListOfSearches

router = APIRouter()


@router.get("/", response_model=ListOfSearches, status_code=status.HTTP_200_OK)
async def get_faqs(db_list=Depends(get_data_from_db(STANDARD_DATA_LIMIT)),
                   repo: SearchRepository = Depends(get_search_repository),
                   params: SearchInSelect = Depends()):
    return await repo.select(params, db_list.limit, db_list.offset)
