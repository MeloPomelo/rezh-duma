FROM python:3.10.4-slim-buster AS development_build
RUN pip install poetry
WORKDIR /app
COPY pyproject.toml poetry.lock alembic.ini /app/
RUN poetry install
COPY ./backend /app/backend
COPY ./migrations /app/migrations
COPY main.py /app/main.py
