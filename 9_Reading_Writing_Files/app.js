var fs = require('fs');

// asynchronous read & write methods ( non blocking the code )
fs.readFile('readme.txt', 'UTF-8', function(err, data){
  // console.log(data);

  // write the file
  fs.writeFile('write_asy.txt', data);
});

// So the above code is nonblocking asynchronous mean we can demonstrate below code fire while reading the file so the this code execute prior reading the file even though below code after the readFile method
console.log('roh');
