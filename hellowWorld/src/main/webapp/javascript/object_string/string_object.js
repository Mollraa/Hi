//string_object.js

// 메소드 : trim() > trimStart() > trimEnd() (좌우공백)
// 메소드 : replace(a, b) : a문자를 b문자 변환.
// 정규표현식 : replace(/\s+/, '표현값') (s+한개이상의 공백)
// 메소드 : split('구분자') => 문자열을 배열생성.
// 메소드 : join('구분자') => 배열 -> 문자열


//P 154. 4장 문자열
let str1 = 'Hello';
let str2 = new String('Hello');

console.log(str1, str2, str1 == str2, str1 === str2);
console.log(str1.substring(0, 3));
//substring - 제일 많이 쓰는 메소드 
//3번째 까지 잘라오겠다.

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring
// 여기참고해서 ↓
//String => string
console.log(typeof str2.valueOf()); //객체 -> 기본타입으로 보겠다.

//eval
let result = eval(new String('1 + 2 * 3').valueOf());
console.log(result);

//trim 
let trimStr = '  모든 공백을 제거하는 메소 드 s    ';
// console.log(trimStr.trim()); //앞,뒤 공백제거.
// console.log(trimStr.trimStart()); //앞 공백제거.
console.log(trimStr.trimStart().trimEnd()); //앞,뒤 공백제거.


// String 객체의 메소드 추가 정의. (원하는 거 설정, 공백지울 때)
//표현식
let obj = {}; //new Object()
let aty = {}; //new Array();
let regExp = /\s+$/; new RegExp();

String.prototype.ltrim = function(){
    //메소드 -> 객체 -> 
    // return this.replace('s', 'S');  // 소문자s 를 대문자 S로 바꿔주겠다.
    // return this.replace(/\s/, ''); // 모든공백을 지워주겠다.
    return this.replace(/^\s+/, ''); // 왼쪽공백만 제거할거
}
String.prototype.rtrim = function(){
    return this.replace(/\s+$/, ''); //+$는 1개이상 공백이 있으면 제거할거다.
}
console.log(trimStr.ltrim().rtrim()); // 원하는 설정.
console.log(trimStr.ltrim()); 

//P 158, 159
trimStr = '    how are you       to     day     everyone.        ';
console.log(trimStr.trim().replace(/\s+/g, ' '));
// (/\s+/g, ' ') = 문자열에 있는 2개 이상의 붙은 공백을 1개로 줄이기
// ( / /, '' )= 문장 전체의 공백을 하나로만듦

//split, filter, join , forEach, map .. ☆
const trimAry = trimStr.split(' ');
const filAry = trimAry.filter(function(str){
    //새로운 배열을 하나 만들어주는데 /값이 있는거만
    return str != '';
});
console.log(filAry.join(' ')); 

// console.log(trimAry); 

const str = 'The quick brown fox jumps over the lazy dog.';
const strAry = str.split(' ');
console.log(strAry);
console.log(strAry[2]); // String -> Array
console.log(strAry.join('-')); //Array -> String (-을 구분해 문자열을 완성하겠다.)



