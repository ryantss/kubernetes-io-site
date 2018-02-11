var http = require('http');

var handleRequest = function(request, response){
    console.log('Received request for URL: ' + request.url);
    response.writeHead(200);
    response.end('Hellow World from Minikube tutorial (AGAIN, to simulate updated to the app)!');
};

var www = http.createServer(handleRequest);
www.listen(8080);