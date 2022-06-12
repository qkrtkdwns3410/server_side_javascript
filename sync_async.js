/**
 *packageName    :
 * fileName       : sync_async
 * author         : ipeac
 * date           : 2022-06-12
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-06-12        ipeac       최초 생성
 */
const fs = require('fs');
// Sync
console.log(1);

let data = fs.readFileSync(`data.txt`, {encoding: 'utf-8'});
console.log(data);
// Async
console.log(2);
//백그라운드에서 작업이 실행됨
fs.readFile('data.txt', {encoding: 'utf-8'}, function (err, data) {
    console.log(3);
    console.log(data)
});
console.log(4);



