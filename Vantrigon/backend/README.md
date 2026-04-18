# Vantrigon Tech Backend

Production-ready FastAPI backend for the Vantrigon Tech frontend.

## Local Setup

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
uvicorn app.main:app --reload
```

The API will run at `http://127.0.0.1:8000`.

## API Docs

- Swagger UI: `http://127.0.0.1:8000/docs`
- ReDoc: `http://127.0.0.1:8000/redoc`
- Health check: `http://127.0.0.1:8000/health`

## Endpoints

- `POST /api/contact` - submit a contact form
- `GET /api/services` - list services
- `GET /api/projects` - list portfolio projects

## Contact Payload

```json
{
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "message": "I would like to discuss a backend project."
}
```

## Database

The app uses SQLAlchemy and creates the local SQLite database automatically on startup. To use PostgreSQL, install a PostgreSQL driver such as `psycopg[binary]`, then update `VANTRIGON_DATABASE_URL` in `.env`.
