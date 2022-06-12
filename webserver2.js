/**
 *packageName    :
 * fileName       : webserver2
 * author         : ipeac
 * date           : 2022-06-12
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-06-12        ipeac       최초 생성
 */
const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


let server = http.createServer();
server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});
