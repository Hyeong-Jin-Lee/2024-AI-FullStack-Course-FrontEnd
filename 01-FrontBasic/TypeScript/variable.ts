//변수별 타입을 지정하고 값을 할당한다

var memberName: string = "이형진"; //변수인데 값이 변함
let age: number = 24;
let price: number = 5000; //변수
const isMale: boolean = true; //상수

let totalPayPrice: number = 0;

function showTotalPrice(price: number, count: number): void {
    totalPayPrice = price * count;
    console.log(`totalPayPrice: ${totalPayPrice}`);
}

console.log("사용자명:", memberName);
console.log("나이:", age);
console.log("가격:", price);
console.log("성별:", isMale);

showTotalPrice(price, 2);