const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

http.createServer((req, resp)=>{

    let urlObject = url.parse(req.url, true);

    if (urlObject.query.url !== undefined) {

    }

    if (file) {
        let filePath = path.join(__dirname, '../lab3/big.txt');
        let readStream = fs.createReadStream(filePath);
        readStream.pipe(resp);
    }

}).listen(1337, () => console.log('Server started at port 1337'));
