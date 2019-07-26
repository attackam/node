const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.listen(8080, () => {
    console.log('http://127.0.0.1:8080');

});
server.on('request', (req, res) => {
    if (req.url.startsWith('/assets') || req.url.startsWith('/views')) {
        if (req.url.endsWith('.css')) {
            res.setHeader('Content-type', 'text/css');
        }

        fs.readFile('.' + req.url, (err, data) => {
            if (err) throw err;
            res.end(data);
        })
    }
});