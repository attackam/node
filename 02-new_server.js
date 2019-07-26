const http = require('http');
const server = http.createServer();
server.listen(8080, '127.0.0.1', () => {
    console.log('服务器已经启动了');

});
server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('你好');
})