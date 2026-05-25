const express = require('express');
const https = require('https');

const app = express();

app.get('/kirtan', (req, res) => {
  const options = {
    hostname: 'live.sgpc.net',
    port: 8442,
    path: '/',
    method: 'GET',
    headers: {
      'User-Agent': 'VLC/3.0.0',
      'Icy-MetaData': '1',
      'Connection': 'keep-alive'
    }
  };

  const request = https.request(options, (response) => {
    res.writeHead(200, {
      'Content-Type': 'audio/mpeg',
      'Transfer-Encoding': 'chunked'
    });
    response.pipe(res);
  });

  request.on('error', (e) => {
    res.status(500).send('Stream Error');
  });

  request.end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
