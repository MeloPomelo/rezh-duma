from datetime import datetime
from typing import Optional

from backend.models.base import BaseModel


class DateModelMixin(BaseModel):
    created_at: Optional[datetime]
