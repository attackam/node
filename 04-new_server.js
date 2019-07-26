const http = require('http');
const server = http.createServer();
server.listen(8080, '127.0.0.1', () => {
    console.log('服务器已经启动了，可以通过 http://127.0.0.1:8080 访问');
})
server.on('request', (req, res) => {
    console.log('有请求进来了');
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('你好');
})