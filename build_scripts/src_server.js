// this script will configure a web server that will
// serve the files in the source directory

import express from 'express';
import path from 'path';
import open from 'open';  // used to open the site in a browser

const port = 3000;
const app = express();

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