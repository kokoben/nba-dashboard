# ESPN proxy

This server proxies only the two ESPN API roots used by NBA Dashboard. It is
not a general-purpose open proxy. When deployed, it also serves the built React
app at [nba-dashboard-rlh7.onrender.com](https://nba-dashboard-rlh7.onrender.com/).

The deployed app runs on Render's free tier and may occasionally take a moment
to become available or return a temporary error. If that happens, wait a few
seconds and refresh the page.

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
