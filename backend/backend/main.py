from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.core.config import DEBUG, PROJECT_NAME, VERSION
from backend.db.events import start_app_handler, stop_app_handler
import backend.api.routes as routes

app = FastAPI(title=PROJECT_NAME, debug=DEBUG, version=VERSION)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_routes = ((routes.applications_router, "applications"),
              (routes.faq_router, "faqs"), (routes.votes_router, "votes"),
              (routes.search_router, "search"))

for router, tag in api_routes:
    app.include_router(router, prefix=fr"/api/{tag}", tags=[tag])

app.add_event_handler("startup", start_app_handler)
app.add_event_handler("shutdown", stop_app_handler)
