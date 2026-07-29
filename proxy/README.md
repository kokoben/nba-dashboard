# ESPN proxy

This server proxies only the two ESPN API roots used by NBA Dashboard. It is
not a general-purpose open proxy. When deployed, it also serves the built React
app at [nba-dashboard-rlh7.onrender.com](https://nba-dashboard-rlh7.onrender.com/).

The deployed app runs on Render's free tier, which puts the service to sleep
after a period of inactivity. The first visit afterward may take about a minute
to load. If the page is temporarily unavailable, give it a moment and refresh.

## Run locally

```sh
npm install
npm run dev
```

The service listens at `http://localhost:3000`. It accepts the real ESPN URL as
the `url` query parameter:

```text
/api/espn?url=https%3A%2F%2Fsite.api.espn.com%2Fapis%2Fsite%2Fv2%2Fsports%2F...
```

Only the two ESPN API roots used by the dashboard are accepted.
