from fastapi import APIRouter, Depends, Response, status
from backend.core.config import STANDARD_DATA_LIMIT
from backend.models.domains.data_from_db import get_data_from_db
from backend.api.dependencies.applications import get_applications_repository
from backend.db.repositories.applications import ApplicationsRepository
from backend.models.schemas.application import ApplicationInSelect, ListOfApplications, ApplicationInCreate
from backend.models.domains.application import ApplicationInDB

router = APIRouter()


@router.get("", response_model=ListOfApplications, status_code=status.HTTP_200_OK)
async def get_applications(db_list=Depends(get_data_from_db(STANDARD_DATA_LIMIT)),
                           repo: ApplicationsRepository = Depends(get_applications_repository),
                           params: ApplicationInSelect = Depends()):
    return await repo.select(params, db_list.limit, db_list.offset)


@router.post("", response_model=ApplicationInDB, status_code=status.HTTP_201_CREATED)
async def create_application(application: ApplicationInCreate,
                             repo: ApplicationsRepository = Depends(get_applications_repository)):
    return await repo.create(application)


# @router.put("/{id}", response_model=[], status_code=status.HTTP_200_OK)
# async def update_application(rule_id: int, rule: RuleInUpdate,
#                              repo: ApplicationsRepository = Depends(get_applications_repository)):
# author = " ".join((user.first_name, user.last_name, user.patronymic or "")).strip()
# rule_in_db = await rules.update(rule_id, rule, author=author)

# return RuleInResponse(rule=rule_in_db)


@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT, response_class=Response)
async def delete_application(application_id: int, repo: ApplicationsRepository = Depends(get_applications_repository)):
    await repo.delete(application_id)
