var express = require("express");
var app = express();
var serverConfig = require("./server_config.js");
var bodyParser = require('body-parser');
var session = require('express-session');
var port = serverConfig.serverPort;
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.post('/webhook/test', function(req, res){
  console.log(req.body);
  console.log(Object.keys(req.body));
})

app.listen(port, function(){
  console.log("Listeing on port ", port);
});
