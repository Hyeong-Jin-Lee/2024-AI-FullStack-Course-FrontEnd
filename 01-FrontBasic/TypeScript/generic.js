function getRandomElement(list) {
    //전달된 배열목록에서 랜덤하게 배열 단일아이템을 반환한다.
    var randIndx = Math.floor(Math.random() * list.length);
    return list[randIndx];
}
//문자열 배열전용 랜덤 문자추출기 함수
function getRandomString(list) {
    //전달된 배열목록에서 랜덤하게 배열 단일아이템을 반환한다.
    var randIndx = Math.floor(Math.random() * list.length);
    return list[randIndx];
}
function getRandomNumber(list) {
    //전달된 배열목록에서 랜덤하게 배열 단일아이템을 반환한다.
    var randIndx = Math.floor(Math.random() * list.length);
    return list[randIndx];
}
//특정타입에 최적화된 함수를 별도로 만들고 사용하기
var randomString = getRandomElement(["A", "B", "C"]);
console.log("문자열 배열에서 랜덤한 문자 추출하기:", randomString);
var randomNumber = getRandomElement([1, 2, 3]);
console.log("숫자 배열에서 랜덤한 숫자 추출하기:", randomNumber);
//제너릭 타입을 이용한 타입에 제한없이 사용가능한 함수 사용하기
var randomString1 = getRandomElement(["A", "B", "C"]);
var randomNumber1 = getRandomElement([1, 2, 3]);
var randomUser1 = getRandomElement([
    { id: 1, name: "이형진", email: "test1@test.co.kr" },
    { id: 2, name: "이상진", email: "test2@test.co.kr" },
    { id: 3, name: "이화진", email: "test3@test.co.kr" }
]);
//Generic기반으로 타입에 의존적이지 않은 함수 하나를 만들어 획기적인 코딩량을 줄이고 
//재사용 가능한 코드를 만들어
//유지 보수 효과를 극대화할 수 있다.
console.log("getRandomElement-string", randomString1);
console.log("getRandomElement-number", randomNumber1);
console.log("getRandomElement-Usertype", randomUser1);
