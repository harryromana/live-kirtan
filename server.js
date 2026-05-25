const express = require('express');
const https = require('https');

const app = express();

app.get('/kirtan', (req, res) => {
  const url = 'https://live.sgpc.net:8442/';

  https.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
      'Icy-MetaData': '1'
    }
  }, (stream) => {
    res.setHeader('Content-Type', 'audio/mpeg');
    stream.pipe(res);
  }).on('error', (err) => {
    res.status(500).send('Stream Error');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
