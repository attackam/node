const http = require('http');
const fs = require('fs');
const server = http.createServer();
server.listen(8080, () => {
    console.log('服务器已经开启，可以通过 http://127.0.0.1:8080 访问');
});
server.on('request', (req, res) => {
    if (req.url === '/index.html') {
        fs.readFile('./views/index.html', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    } else if (req.url === '/list.html') {
        fs.readFile('./views/list.html', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    } else if (req.url === '/detail.html') {
        fs.readFile('./views/detail.html', (err, data) => {
            if (err) throw err;
            res.end(data);

        });
    } else if (req.url === '/assets/css/list.css') {
        fs.readFile('./assets/css/list.css', (err, data) => {
            if (err) throw err;
            // res.setHeader('Content-Type', 'text/css');
            res.end(data);
        });
    } else if (req.url === '/assets/js/list.js') {
        fs.readFile('./assets/js/list.js', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    } else if (req.url === '/assets/images/1.jpg') {
        fs.readFile('./assets/images/1.jpg', (err, data) => {
            if (err) throw err;
            res.end(data);
        })
    } else {
        res.end('404');
    }
});