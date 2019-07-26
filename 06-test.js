const http = require('http');
const server = http.createServer();
server.listen(8080, '127.0.0.1', () => {
    console.log('服务器已经打开，可以通过 http://127.0.0.1:8080 访问');
});
server.on('request', (req, res) => {
    console.log('被访问了一次');
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    if (req.url === '/index.html') {
        res.end('<h1>主页</h1>');
    } else if (req.url === '/list.html') {
        let html = `<h1>列表页</h1>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul> `
        res.end(html);
    } else if (req.url === '/register.html') {
        res.end('<h1>注册页</h1>');
    } else {
        res.end('404');
    }


})