var fs = require('fs');

// asynchronous
/*
fs.mkdir('stuff', function() {
  fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFile('./stuff/write.txt', data);
  })
})
*/

// remote the dir - we can not remove directly directory if that is not empty

fs.unlink('./stuff/write.txt', function(){
  fs.rmdir('stuff')
})
