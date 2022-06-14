from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from main import *


app = FastAPI()


class Notice(BaseModel):
    login: str
    url: List[str]
    title: str


@app.post("/notices/", response_model=Notice)
async def create_item(item: Notice):
    login = item.login
    url = item.url
    title = item.title
    send_notice(login, url, title)
