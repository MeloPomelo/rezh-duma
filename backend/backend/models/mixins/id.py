from typing import Optional

from pydantic import PositiveInt
from backend.models.base import BaseModel


class IDModelMixin(BaseModel):
    id: Optional[PositiveInt]
