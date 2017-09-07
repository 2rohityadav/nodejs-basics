const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('req was made: ' + req.url);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html', 'utf8');

  const myRS = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myRS.pipe(res);
});

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`listening to port ${port}`);
});
