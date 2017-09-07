const fs = require('fs');
const http = require('http')

const server = http.createServer( (req, res) => {
    console.log('req was made: ' + req.url);
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');

    const myRS = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
    // now send data to the client instead write
    myRS.pipe(res);
})

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
})


// Now here we get rid of writable streams because we are not writing a data here we want to write the data into the view or response data. "read pipe and res"
