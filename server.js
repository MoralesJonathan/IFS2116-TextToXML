const http = require('http');
const express = require('express');
const server = express();;
const bodyParser = require('body-parser');

const hostname = process.env.IP;
const port = process.env.PORT;

server.use(express.static('platform'))
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


server.get('/', function(req, res) {
    res.sendfile('platform/index.html')
})


server.listen(port, function() {
  console.log('Server is running!');
})