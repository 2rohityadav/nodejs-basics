const http = require('http');

const server = http.createServer((req, res) => {
  console.log('req was made: ' + req.url);

  res.writeHead(200, {'Content-Type', 'application/json'});
  const myObj = {
    name: 'rohit',
    job: 'coding',
    age: 29
  }

  // so this is how we can send data to the client
   // res.end()
  // So this method "end()" here expect either string or buffer and this myObj none of those because this is an object so what we need to do. create a string and this string will be in json format.
  res.end(JSON.stringify(myObj));
});

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`listing to the port: ${port}`);
});
