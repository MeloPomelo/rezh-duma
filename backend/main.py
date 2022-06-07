import uvicorn
from backend.core.config import DEBUG, PORT


def main() -> None:
    uvicorn.run("backend.main:app", host="0.0.0.0", port=PORT, reload=DEBUG)


if __name__ == "__main__":
    main()
