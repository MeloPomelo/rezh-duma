from fastapi import APIRouter, Depends, Response, status
from backend.core.config import STANDARD_DATA_LIMIT
from backend.models.domains.data_from_db import get_data_from_db
from backend.api.dependencies.faq import get_faq_repository
from backend.db.repositories.faq import FaqRepository
from backend.models.schemas.faq import FaqInSelect, ListOfFaqs, FaqInCreate, FaqInUpdate
from backend.models.domains.faq import FaqInDB

router = APIRouter()


@router.get("/", response_model=ListOfFaqs, status_code=status.HTTP_200_OK)
async def get_faqs(db_list=Depends(get_data_from_db(STANDARD_DATA_LIMIT)),
                   repo: FaqRepository = Depends(get_faq_repository),
                   params: FaqInSelect = Depends()):
    return await repo.select(params, db_list.limit, db_list.offset)


@router.post("/", response_model=FaqInDB, status_code=status.HTTP_201_CREATED)
async def create_faq(faq: FaqInCreate,
                     repo: FaqRepository = Depends(get_faq_repository)):
    return await repo.create(faq)


@router.put("/{faq_id}", response_model=FaqInDB, status_code=status.HTTP_200_OK)
async def update_faq(faq_id: int, faq: FaqInUpdate,
                     repo: FaqRepository = Depends(get_faq_repository)):
    return await repo.update(faq_id, faq.dict())


@router.delete("/{faq_id}", status_code=status.HTTP_204_NO_CONTENT, response_class=Response)
async def delete_faq(faq_id: int, repo: FaqRepository = Depends(get_faq_repository)):
    await repo.delete(faq_id)
