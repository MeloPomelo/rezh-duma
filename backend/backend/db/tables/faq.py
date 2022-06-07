import sqlalchemy as sa
from backend.db.base import metadata
from backend.db.tables.common_columns import generate_service_columns

faqs_table: sa.Table = sa.Table(
    "faqs",
    metadata,
    sa.Column("title", sa.String, nullable=False),
    sa.Column("text", sa.String, nullable=False),
    *generate_service_columns()
)
