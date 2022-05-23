FROM python:3.10.4-slim-buster AS development_build
RUN pip install poetry
WORKDIR /code
COPY pyproject.toml poetry.lock /code/
RUN poetry install
COPY ./backend /code/backend
COPY main.py /code/main.py
