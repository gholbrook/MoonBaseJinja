from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import random

app = FastAPI()
app.mount("/assets", StaticFiles(directory="static/assets"), name="static")
templates = Jinja2Templates(directory="templates")


@app.get("/charts-apex")
async def charts_apex(request: Request):
    return templates.TemplateResponse(request, "pages/charts-apex.html")

@app.get("/chats")
async def chats(request: Request):
    return templates.TemplateResponse(request, "pages/chats.html")

@app.get("/agents")
async def agents(request: Request):
    return templates.TemplateResponse(request, "pages/agents.html")

@app.get("/agent/{id}/overview")
async def agent_overview(request: Request, id: str):
    return templates.TemplateResponse(request, "pages/agent_overview.html", {"agent_id": id})

@app.get("/agent/{id}/context")
async def agent_context(request: Request, id: str):
    return templates.TemplateResponse(request, "pages/agent_context.html", {"agent_id": id})

@app.get("/agent/{id}/activity")
async def agent_activity(request: Request, id: str):
    return templates.TemplateResponse(request, "pages/agent_activity.html", {"agent_id": id})

@app.get("/agent/{id}/tools")
async def agent_tools(request: Request, id: str):
    return templates.TemplateResponse(request, "pages/agent_tools.html", {"agent_id": id})

@app.get("/policies")
async def policies(request: Request):
    return templates.TemplateResponse(request, "pages/policies.html")


@app.get("/")
async def dashboard(request: Request):
    # This data could come from a database, API, etc.
    stats = {
        "profit": "$69.69",
        "sales": "$4,679",
        "users": "8,458",
        "transactions": "8,458",
    }
    return templates.TemplateResponse(request, "pages/index.html", stats)


# API endpoint for live updates via JS
@app.get("/api/stats")
async def get_stats():
    return {
        "profit": random.randint(1, 10),
        "sales": random.randint(11, 20),
        "users": random.randint(21, 30),
        "transactions": random.randint(31, 40)
    }