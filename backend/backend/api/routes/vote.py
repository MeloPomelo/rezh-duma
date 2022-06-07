from fastapi import APIRouter, Depends, Response, status
from backend.core.config import STANDARD_DATA_LIMIT
from backend.models.domains.data_from_db import get_data_from_db
from backend.api.dependencies.vote import get_vote_repository
from backend.db.repositories.vote import VoteRepository
from backend.models.domains.form import FormInCreate, FormInDB
from backend.models.schemas.vote import ListOfVotes, VoteInCreate, VoteInSelect, VoteInResponse

router = APIRouter()


@router.get("", response_model=ListOfVotes, status_code=status.HTTP_200_OK)
async def get_votes(db_list=Depends(get_data_from_db(STANDARD_DATA_LIMIT)),
                    repo: VoteRepository = Depends(get_vote_repository),
                    params: VoteInSelect = Depends()):
    return await repo.select(params, db_list.limit, db_list.offset)


@router.post("", response_model=VoteInResponse, status_code=status.HTTP_201_CREATED)
async def create_vote(vote: VoteInCreate,
                      repo: VoteRepository = Depends(get_vote_repository)):
    return await repo.create(vote)


@router.delete("/{vote_id}", status_code=status.HTTP_204_NO_CONTENT, response_class=Response)
async def delete_application(vote_id: int, repo: VoteRepository = Depends(get_vote_repository)):
    await repo.delete(vote_id)


@router.get("/{vote_id}/{author_id}", response_model=FormInDB, status_code=status.HTTP_201_CREATED)
async def get_vote(vote_id: int, author_id: int,
                   repo: VoteRepository = Depends(get_vote_repository)):
    return await repo.get_answers(vote_id, author_id)


@router.post("/{vote_id}", response_model=FormInDB, status_code=status.HTTP_201_CREATED)
async def create_vote(vote_id: int, vote: FormInCreate,
                      repo: VoteRepository = Depends(get_vote_repository)):
    return await repo.vote(vote)
