/**
 *packageName    :
 * fileName       : javscript_callback
 * author         : ipeac
 * date           : 2022-06-12
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-06-12        ipeac       최초 생성
 */
a = [3, 1, 2];

function b(v1, v2) {

    return v2 - v1;
}
//인자로 메서드 전달
a.sort(b);

console.log(a);  // sort - reverse