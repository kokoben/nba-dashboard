# ESPN proxy

This service proxies only the two ESPN API roots used by NBA Dashboard. It is
intentionally local-only and not a general-purpose open proxy.

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
