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

app.listen(3000, () => {
  console.log('Server running');
});
