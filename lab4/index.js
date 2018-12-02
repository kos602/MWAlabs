const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');
const { fork } = require('child_process');

http.createServer((req, resp)=>{

    let urlObject = url.parse(req.url, true);
    let file = '';

    if (urlObject.query.url !== undefined) {
        file = path.join(__dirname, urlObject.query.url);
    }

    if (file) {
        const childProcess = fork('child.js');
        childProcess.send(fileUrl);
        childProcess.on('message', (data) => resp.write(data));
        childProcess.on('exit', () => { resp.end(); });
    } else {
        resp.end("No url parameter was given");
    }

}).listen(1337, () => console.log('Server started at port 1337'));
