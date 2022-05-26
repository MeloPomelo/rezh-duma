from starlette.config import Config

VERSION = "1.0.0"

STANDARD_SCHEMES_LIMIT = 25
STANDARD_RULES_LIMIT = STANDARD_SCHEMES_LIMIT
STANDARD_USERS_LIMIT = 10

config: Config = Config(".env")

DATABASE_USER: str = config("DB_USERNAME")
DATABASE_PASSWORD: str = config("DB_PASSWORD")
DATABASE_HOST: str = config("DB_HOST")
DATABASE_PORT: int = config("DB_PORT", cast=int)
DATABASE_NAME: str = config("DB_DATABASE")

DATABASE_URL: str = fr"postgresql://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}:{DATABASE_PORT}/{DATABASE_NAME}"

DEBUG: bool = config("DEBUG", cast=bool, default=False)

PROJECT_NAME: str = config("PROJECT_NAME", default="Rezh Duma Api")

PORT: int = 8000
