//변수별 타입을 지정하고 값을 할당한다
var memberName = "이형진"; //변수인데 값이 변함
var age = 24;
var price = 5000; //변수
var isMale = true; //상수
var totalPayPrice = 0;
function showTotalPrice(price, count) {
    totalPayPrice = price * count;
    console.log("totalPayPrice: ".concat(totalPayPrice));
}
console.log("사용자명:", memberName);
console.log("나이:", age);
console.log("가격:", price);
console.log("성별:", isMale);
showTotalPrice(price, 2);
