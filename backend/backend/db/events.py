from backend.db.base import database
from backend.db.mongodb import mongo_db
from motor.motor_asyncio import AsyncIOMotorClient
from backend.core.config import MONGODB_URL, MAX_CONNECTIONS_COUNT, MIN_CONNECTIONS_COUNT


async def start_app_handler() -> None:
    await database.connect()
    mongo_db.client = AsyncIOMotorClient(MONGODB_URL,
                                         maxPoolSize=MAX_CONNECTIONS_COUNT,
                                         minPoolSize=MIN_CONNECTIONS_COUNT)


async def stop_app_handler() -> None:
    await database.disconnect()
    mongo_db.client.close()
