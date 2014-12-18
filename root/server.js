var http = require("http");
var express = require("express");

var app = express();
var server = http.Server(app);
var PORT = parseInt(process.argv[2]) || 9999;

app.use(express.static(__dirname +"/dist"));

server.listen(PORT, function() {
  console.log("running on port %d", PORT);
});
