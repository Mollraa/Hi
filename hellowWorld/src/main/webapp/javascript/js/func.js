// funs.js
//sum변수선언 (num1, num2)매개변수로 쓰고싶은 값

let num = null;

console.log(num);
//boolean : 0, null, undifined, '' => false | ☆기억해..☆
//함수선언식 , function
function sum(num1=0, num2=0){
    // num1 + num2; return nudefined; 리턴안해주면 선언만해준 상태가 됨
    // (num1=0, num2=0) 매개값이 없는 경우에 초기값 지정해줌, 혹은 if~elst 해주기 = NaN 안뜨게 
   
    // if(!num1 && !num2)
    // return num1 + num2; //두개의 값을 더해주는 식 
    // else return 0;
    //일케하면 길어지니까 

    return num1 + num2;
}
console.log(sum(1,2,3,4));
// = console.log(sum(1,2,3)); 매개값의 개수에 상관없이 있는 값만 계산처리.
console.log(sum(1)); // = NaN (Not a Number) => 1 + undifined
console.log(sum() + sum(2,3)); // = NaN (Not a Number) => 1 + undifined

console.log(sum);
//sum선언한적 없는데 호출하면, 함수선언식 뜸
//console.log(sum);의 처리과정 ↓
//함수표현식 , sum = function
sum = function(num1, num2){
    return num1 + num2;
}

//함수선언문
let showInfo = function(name){
    return `안녕하세요 ${name} 님.`;
}
//함수선언문 사용방식
console.log(showInfo('백진희>_<'));
// = 
let welcome = showInfo;
console.log(welcome('김민수'));
// = 
let members = ['노은경', '이준의', '김민선'];
for(let member of members){
    console.log(welcome(member));
}