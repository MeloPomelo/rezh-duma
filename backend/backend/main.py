from fastapi import FastAPI
from backend.core.config import DEBUG, PROJECT_NAME, VERSION
from backend.db.events import start_app_handler, stop_app_handler
import backend.api.routes as routes

app = FastAPI(title=PROJECT_NAME, debug=DEBUG, version=VERSION)

api_routes = ((routes.applications_router, "applications"),
              (routes.faq_router, "faqs"))

for router, tag in api_routes:
    app.include_router(router, prefix=fr"/{tag}", tags=[tag])

app.add_event_handler("startup", start_app_handler)
app.add_event_handler("shutdown", stop_app_handler)
