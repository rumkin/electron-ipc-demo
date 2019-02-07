const http = require('http');
const fs = require('fs');

const PORT = 8080;

module.exports = () => http.createServer((req, res) => {
  res.setHeader('content-type', 'text/html;charset=utf8');
  res.end(fs.readFileSync(__dirname + '/index.html'));
}).listen(PORT);
