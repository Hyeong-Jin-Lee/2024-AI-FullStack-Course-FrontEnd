var productCode = "10000";
productCode = 20000;
//파라메터로 숫자/문자 둘 다 지원하는 함수
function getCode(code) {
    //파라메터로 전달된 코드의 데이터 타입이 숫자형이면 숫자형을 문자로 변화하고 문자열을 반환한다.
    if (typeof code === "number") {
        code = "P-" + code.toString();
    }
    return code;
}
//동일한 함수인데 숫자를 전달하는 경우 
console.log("getcode: ", getCode(1000));
//동일한 함수인데 문자를 전달하는 경우 
console.log("getcode: ", getCode("P-1000"));
var state = "open";
var oddNumber = 3;
//할당할 수 없는 값을 지정하면 에러발생
//let oddNumber2:OddNumbersUnderTen=2;
