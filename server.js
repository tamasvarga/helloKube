var externalip=require('externalip');
var http = require('http');
const publicIp = require('public-ip');

var handleRequest = function(request, response) {
  console.log('hello'); 
externalip(function (err, ip) {
  console.log(ip); // => 8.8.8.8
    response.writeHead(200);
    response.end(ip);
});	



};
var www = http.createServer(handleRequest);
www.listen(8080);