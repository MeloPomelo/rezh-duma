import sqlalchemy as sa
from backend.db.base import metadata
from backend.db.tables.common_columns import generate_main_domain_columns

applications_table: sa.Table = sa.Table(
    "applications",
    metadata,
    sa.Column("feedback", sa.String, nullable=True),
    sa.Column("recipient", sa.Integer, nullable=True),
    sa.Column("is_public", sa.BOOLEAN, nullable=False),
    *generate_main_domain_columns()
)
