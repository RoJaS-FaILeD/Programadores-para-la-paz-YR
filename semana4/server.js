const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(5000, '0.0.0.0', () => {
  console.log('Servidor ejecutándose en puerto 5000');
});
