/**
 *packageName    :
 * fileName       : underscore
 * author         : ipeac
 * date           : 2022-06-12
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-06-12        ipeac       최초 생성
 */
const _ = require('underscore');
let arr = [3, 6, 9, 1, 12];
console.log(arr[0]); //3

console.log(_.first(arr)); //3

console.log(arr[arr.length-1]); // 12 - 마지막 원소

console.log(_.last(arr)); // 12  - 마지막 원소

