var http = require('http');

http.createServer(function(req, res){
    res.end('Hello from aws EC2 instance !');
}).listen(8080);
