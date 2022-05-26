import sqlalchemy as sa
from backend.db.base import metadata
from backend.db.tables.common_columns import generate_main_domain_columns

applications_table: sa.Table = sa.Table(
    "applications",
    metadata,
    *generate_main_domain_columns()
)
