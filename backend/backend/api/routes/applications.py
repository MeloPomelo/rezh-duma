from fastapi import APIRouter, Depends, Response, status
from backend.core.config import STANDARD_DATA_LIMIT
from backend.models.domains.data_from_db import get_data_from_db
from backend.api.dependencies.applications import get_applications_repository
from backend.db.repositories.applications import ApplicationsRepository
from backend.models.schemas.application import (ApplicationInSelect, ListOfApplications, ApplicationInCreate,
                                                ApplicationInReply, ApplicationInUpdate)
from backend.models.domains.application import ApplicationInDB

router = APIRouter()


@router.get("/", response_model=ListOfApplications, status_code=status.HTTP_200_OK)
async def get_applications(db_list=Depends(get_data_from_db(STANDARD_DATA_LIMIT)),
                           repo: ApplicationsRepository = Depends(get_applications_repository),
                           params: ApplicationInSelect = Depends()):
    return await repo.select(params, db_list.limit, db_list.offset)


@router.post("/", response_model=ApplicationInDB, status_code=status.HTTP_201_CREATED)
async def create_application(application: ApplicationInCreate,
                             repo: ApplicationsRepository = Depends(get_applications_repository)):
    return await repo.create(application)


@router.post("/reply/{application_id}", response_model=ApplicationInDB, status_code=status.HTTP_200_OK)
async def reply(application_id: int, application: ApplicationInReply,
                repo: ApplicationsRepository = Depends(get_applications_repository)):
    return await repo.update(application_id, application.dict())


@router.put("/{application_id}", response_model=ApplicationInDB, status_code=status.HTTP_200_OK)
async def update_application(application_id: int, application: ApplicationInUpdate,
                             repo: ApplicationsRepository = Depends(get_applications_repository)):
    return await repo.update(application_id, application.dict())


@router.delete("/{application_id}", status_code=status.HTTP_204_NO_CONTENT, response_class=Response)
async def delete_application(application_id: int, repo: ApplicationsRepository = Depends(get_applications_repository)):
    await repo.delete(application_id)
