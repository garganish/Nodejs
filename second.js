var http = require('http');
var ut = require('upper-case');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(ut("anish garg"));
    res.end();
}).listen(8080);