import express from 'express';
import path from 'node:path';

const app = express();
const reactBuildPath = path.join(import.meta.dirname, '../dist');

const ALLOWED_ESPN_URLS = [
  'https://site.api.espn.com/apis/site/v2/sports/',
  'https://site.web.api.espn.com/apis/common/v3/sports/',
];

app.get('/api/espn', async (req, res) => {
  const url = req.query.url;

  if (
    typeof url !== 'string'
    || !ALLOWED_ESPN_URLS.some((allowedUrl) => url.startsWith(allowedUrl))
  ) {
    return res.status(400).json({ error: 'A valid ESPN API URL is required' });
  }

  try {
    const espnResponse = await fetch(url);
    const data = await espnResponse.json();

    return res.status(espnResponse.status).json(data);
  } catch (error) {
    console.error(error);

    return res.status(502).json({ error: 'Unable to reach ESPN' });
  }
});

app.use(express.static(reactBuildPath));

app.get('/{*path}', (_req, res) => {
  res.sendFile(path.join(reactBuildPath, 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`NBA Dashboard listening on port ${port}`);
});
