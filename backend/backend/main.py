from fastapi import FastAPI
from backend.core.config import DEBUG, PROJECT_NAME, VERSION
from backend.db.events import start_app_handler, stop_app_handler

app = FastAPI(title=PROJECT_NAME, debug=DEBUG, version=VERSION)

app.add_event_handler("startup", start_app_handler)
app.add_event_handler("shutdown", stop_app_handler)
