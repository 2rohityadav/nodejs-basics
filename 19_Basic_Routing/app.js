const http = require('http')
const fs = require('fs')

const server = http.createServer( (req, res) => {
  console.log('req was made: ' + req.url);

  // Basic routing
  if(req.url === '/home' || req.url ==='/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res)
  }else if(req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res)
  }else if(req.url === '/api/coders'){
    var coders = [{name: 'rohit', created: 'HomePage'}, {name: 'rocky', created: 'ContactPage'}]
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(coders));
  }else{
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res)
  }
});

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, ()=> {
  console.log(`i am listing on ${port}`);
});
