import sqlalchemy as sa
from datetime import datetime
from sqlalchemy.dialects.postgresql import ARRAY


def _generate(columns: list[dict]) -> list[sa.Column]:
    return [sa.Column(*column["args"], **column["kwargs"]) for column in columns]


def generate_service_columns() -> list[sa.Column]:
    service_columns: list[dict] = [
        {"args": ["created_at", sa.DateTime(timezone=True)],
         "kwargs": {"server_default": sa.sql.func.now(), "nullable": True, "default": datetime.utcnow}},
        {"args": ["id", sa.Integer],
         "kwargs": {"primary_key": True}}
    ]

    return _generate(service_columns)


def generate_main_domain_columns() -> list[sa.Column]:
    policy_part_columns: list[dict] = [
        {"args": ["title", sa.String], "kwargs": {"nullable": False}},
        {"args": ["text", sa.String], "kwargs": {"nullable": False}},
        {"args": ["location", sa.String], "kwargs": {"nullable": True}},
        {"args": ["location_name", sa.String], "kwargs": {"nullable": True}},
        {"args": ["status", sa.String], "kwargs": {"nullable": False}},
        {"args": ["files", ARRAY(sa.String)], "kwargs": {"nullable": True}},
        {"args": ["author", sa.String], "kwargs": {"nullable": False}},
        {"args": ["tags", ARRAY(sa.String)], "kwargs": {"nullable": True}},
    ]

    return _generate(policy_part_columns) + generate_service_columns()
