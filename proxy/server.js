import express from 'express';

const app = express();

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

app.listen(3000, '127.0.0.1', () => {
  console.log('ESPN proxy listening at http://localhost:3000');
});
