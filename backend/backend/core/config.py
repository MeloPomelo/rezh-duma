from starlette.config import Config
from databases import DatabaseURL


VERSION = "1.0.0"

STANDARD_DATA_LIMIT = 40

config: Config = Config(".env")

DATABASE_USER: str = config("DB_USERNAME")
DATABASE_PASSWORD: str = config("DB_PASSWORD")
DATABASE_HOST: str = config("DB_HOST")
DATABASE_PORT: int = config("DB_PORT", cast=int)
DATABASE_NAME: str = config("DB_DATABASE")

MONGO_HOST: str = config("MONGO_HOST")
MONGO_PORT: int = config("MONGO_PORT", cast=int)
MONGO_DB: str = config("MONGO_DB")

DATABASE_URL: str = fr"postgresql://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}:{DATABASE_PORT}/{DATABASE_NAME}"
MONGODB_URL: str = fr"mongodb://{MONGO_HOST}:{MONGO_PORT}/{MONGO_DB}"


MIN_CONNECTIONS_COUNT: int = config("MIN_CONNECTIONS_COUNT", cast=int, default=1)
MAX_CONNECTIONS_COUNT: int = config("MAX_CONNECTIONS_COUNT", cast=int, default=1)

DEBUG: bool = config("DEBUG", cast=bool, default=False)

PROJECT_NAME: str = config("PROJECT_NAME", default="Rezh Duma Api")

PORT: int = 8000
