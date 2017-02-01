const http = require('http');
const express = require('express');
const server = express();;
const bodyParser = require('body-parser');
const pd = require('pretty-data').pd;

const hostname = process.env.IP;
const port = process.env.PORT;

server.use(express.static('platform'))
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));




server.get('/', function(req, res) {
    res.sendfile('platform/index.html')
})

server.post('/getXML', function(req, res) {
    var unformattedxml = req.body.text;
    console.log(unformattedxml)
    var xml_pp = pd.xml(unformattedxml);
    console.log(xml_pp);
    res.send(xml_pp);
})

server.listen(port, function() {
  console.log('Server is running!');
})