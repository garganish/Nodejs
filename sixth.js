var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  var x=fs.readFile('demos.html', function(err) {
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  });
  x.appendFile('mynewfile1.txt', 'Hello content!', function(data) {
  	res.write(data);
  	res.end();
});
}).listen(8080);