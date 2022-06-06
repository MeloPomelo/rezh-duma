from datetime import datetime

import sqlalchemy as sa
from backend.db.base import metadata
from backend.db.tables.common_columns import generate_service_columns

vote_table: sa.Table = sa.Table(
    "vote",
    metadata,
    sa.Column("title", sa.String, nullable=False),
    sa.Column("text", sa.String, nullable=False),
    sa.Column("start_date", sa.DateTime(timezone=True), nullable=True, default=datetime.utcnow,
              server_default=sa.sql.func.now()),
    sa.Column("end_date", sa.DateTime(timezone=True), nullable=True, default=datetime.utcnow,
              server_default=sa.sql.func.now()),
    *generate_service_columns()
)
