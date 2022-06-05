import sqlalchemy as sa
from backend.db.base import metadata
from backend.db.tables.common_columns import generate_main_domain_columns

polls_table: sa.Table = sa.Table(
    "polls",
    metadata,
    *generate_main_domain_columns()
)