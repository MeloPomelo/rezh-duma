from backend.db.base import database


async def start_app_handler() -> None:
    await database.connect()


async def stop_app_handler() -> None:
    await database.disconnect()
