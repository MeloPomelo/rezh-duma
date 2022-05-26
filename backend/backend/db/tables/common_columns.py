import sqlalchemy as sa
from datetime import datetime
from sqlalchemy.dialects.postgresql import UUID
from uuid import uuid4


def _generate(columns: list[dict]) -> list[sa.Column]:
    return [sa.Column(*column["args"], **column["kwargs"]) for column in columns]


def generate_service_columns() -> list[sa.Column]:
    service_columns: list[dict] = [
        {"args": ["created_at", sa.DateTime(timezone=True)],
         "kwargs": {"server_default": sa.sql.func.now(), "nullable": False, "default": datetime.utcnow}},
        {"args": ["updated_at", sa.DateTime(timezone=True)],
         "kwargs": {"server_default": sa.sql.func.now(), "nullable": False, "default": datetime.utcnow}},
        {"args": ["id", UUID],
         "kwargs": {"primary_key": True, "unique": True, "nullable": False, "default": uuid4}}
    ]

    return _generate(service_columns)


def generate_main_domain_columns() -> list[sa.Column]:
    policy_part_columns: list[dict] = [
        {"args": ["title", sa.String], "kwargs": {"nullable": False}},
        {"args": ["text", sa.String], "kwargs": {"nullable": False}},
        {"args": ["address", sa.String], "kwargs": {"nullable": True}},
        {"args": ["tags", sa.String], "kwargs": {"nullable": True}},
        {"args": ["author", sa.String], "kwargs": {"nullable": True}},
    ]

    return _generate(policy_part_columns) + generate_service_columns()
