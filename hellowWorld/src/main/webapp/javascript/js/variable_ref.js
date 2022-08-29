// variable_ref.js

//원시혐 VS 참조형
//P28
let str1 = 'Hello'; //string / 원시형
let str2 = new String('Hello'); // object / new~ 로만들어진 애들은 참조형 객체타입.

console.log(str1 == str2); //값을 비교.
console.log(str1 === str2); //값과 타입 비교.

let num1 = 20; //number
let num2 = new Number(20); //object
console.log(num1 == num2);

let obj; // undefined.
obj = null; // null.

let sym1 = Symbol('symbol'); //unique 키 값을 생성.
let sym2 = Symbol('symbol');
console.log(sym1 == sym2);

//객체(object) =  자바에서 클래스
obj = {
    sname: 'Jo', //속성: 속성값 을 가짐
    age: 20,
    showAge: function () {
        console.log('나이는 :' + this.age + '입니다.');
    } //함수정의 부분 = 메소드
}

console.log(obj.sname);
console.log(obj['age']);
obj.showAge();

obj.sname = 'Jin'; //값 할당.

// 배열
const numbers = []; //new Array();
numbers[numbers.length] = 10; //추가
numbers[numbers.length] = 20; //추가
numbers[numbers.length] = 30; //추가

numbers.forEach(function (val) {
    console.log(val); //콜백함수
}); // 메소드(콜백함수(값, 인덱스, 배열)))

const randomVals = [];
for (let i = 0; i < 5; i++) {
    let val = Math.ceil(Math.random() * 10); //0~1사이의 임의의 값을 생성.
    //Math.ceil은 올림 해주는거
    randomVals[i] = val;
}
console.clear(); // 콘솔메세지 초기화.
randomVals.forEach(function (val) {
    if (val > 5) {
        console.log(val);
    }
});

//[3,1,6,8,4]
randomVals.splice(0, randomVals.length);
// splice 매개값 4개받음 (배열의 위치, ,바뀔값(안적어주면 다지운다는의미), )

//ex) Math.random() : 0 ~ 1 임의값 생성.
//21 ~ 50 까지의 임의 값을 생성. : Math.ceil(Math.random()*30)+20
// console.log(randomVals);
// console.log(Math.ceil(.8)); // 0 ~ 1 / (Math.ceil~ 올림해줌)
for (let i = 0; i < 5; i++) {
    randomVals[i] = Math.ceil(Math.random() * 30) + 20;
    //5번 반복하면서 21~50까지 임의의수를 넣어줌
}
console.clear(); // 콘솔메세지 초기화.
// console.log(randomVals); //이건 다출력하는거
randomVals.forEach(showEven); //짝수만 출력 (function~ )에 바로 해도됨. 2가지방법.

//콜백함수 (callback function).
function showEven(val) {
    if (val % 2 == 0) {
        console.log(val);
    }
}
//P 31
// 자료형의 변환 - 연산자에 따른 자동 형 변환규칙
console.clear(); // 콘솔메세지 초기화.
console.log(-'3' * 4); // '-12'
console.log('3' + 4); // '34' : 숫자형 변환.
console.log((3).toString()); // : 문자열로 형 변환.

//P 38 ~ 39. ex)
console.clear(); // 콘솔메세지 초기화.
console.log(Math.abs(-20));
console.log(Math.sign(30));

console.clear(); // 콘솔메세지 초기화.
const arr2 = [-3, 2, -45, 0, 8, 9];
const arr3 = arr2.map(function (val) {
    return Math.sign(val);
}); // Math.~ = 배열의 갯수만큼 콜백함수 실행. => 새로운 배열 반환.(forEach랑 차이점)
// Math관련 된거는 다 알아두기.. ☆ 
console.log(arr3);

//P 41
//NaN, Infinity
console.log(3 / 'five'); // 연산을 처리할 수 없을때 NaN
console.log(1 / 0); // 아주작은 값으로 무한대의 값이 나올 때 Infinity


//30이상 숫자뽑기
// for(let i=0; i<3; i++){
//     randomVals1[i] = Math.ceil(Math.random()* 30);
//     console.log(randomVals1);
// }
