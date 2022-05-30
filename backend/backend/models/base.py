import pydantic
from datetime import datetime


class BaseModel(pydantic.BaseModel):
    class Config:
        json_encoders = {
            datetime: lambda dt: dt.strftime("%Y-%m-%dT%H:%M:%S.%fZ")
        }
