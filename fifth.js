var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello anish!', function (err) {
  if (err) throw err;
  console.log('Saved!');

var http = require('http');
//var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('mynewfile1.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text'});
    res.write(data);
    res.end();
  });
}).listen(8080);
});