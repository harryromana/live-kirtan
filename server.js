const express = require('express');
const request = require('request');

const app = express();

app.get('/kirtan', (req, res) => {
  const url = 'https://live.sgpc.net:8442/';

  request({
    url: url,
    headers: {
      'User-Agent': 'Mozilla/5.0',
      'Icy-MetaData': '1'
    }
  }).pipe(res);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
