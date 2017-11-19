// this script will configure a web server that will
// serve the files in the source directory

var express = require('express');
var path = require('path');
var open = require('open');  // used to open the site in a browser

var port = 3000;
var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});