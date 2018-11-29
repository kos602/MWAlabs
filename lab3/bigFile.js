const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer((req, resp)=>{
    let filePath = path.join(__dirname, './big.txt');

    /*
    var file = fs.readFileSync(filePath);
    resp.write(file);
    resp.end();
    */

    /*
    fs.readFile(filePath, function (err, data) {
        if (err) throw err;
        resp.write(data);
        resp.end();
    });
    */

    var readStream = fs.createReadStream(filePath);
    readStream.pipe(resp);

}).listen(1337, () => console.log('Server started at port 1337'));
