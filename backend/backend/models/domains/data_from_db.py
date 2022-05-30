from pydantic import PositiveInt, NonNegativeInt


def get_data_from_db(limit_: PositiveInt, offset_: NonNegativeInt = 0):
    class DataFromDB:
        def __init__(self, limit: PositiveInt = limit_, offset: NonNegativeInt = offset_):
            self.limit = limit
            self.offset = offset

    return DataFromDB
