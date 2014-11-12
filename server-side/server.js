var express = require('express'),
    server = express(),
    port = parseInt(process.argv[2]) || 3000;
    
server.configure(function () {
    this.use(express.static('../client-side/'));
}).listen(port);

console.log('HTTP Server starts listening on %d ...', port);
