// variable.js
var age; // = undefined :  호이스팅.
//전역변수 / 지역변수

//ES6:
let name = 'Hong'; // 변수선언. 재할당 O / 전역변수, 지역변수, 블럭레벨변수
fname = 'Hwang';
console.log(fname);

const PI = 3.14; // 상수선언. 재할당 X
// PI = 1.23;

//let,const는 선언하고 사용해야함 
//var는 선언안하고 사용하면 undefined상태
//var는 제일 위에서 선언되어있고, 값을 할당안한 상태를 나타내줌
//var는 윈도우속성. let은 상관없음 자유롭게 사용

console.log(age);
// var age = 20;
age = 20;

function localFnc(){
    var age = 30; //function함수 안에서만 가능. 지역변수. function끝나면 사라짐.
    console.log('지역변수: ' + age);
    //var age , age  동시에 쓰면 지역변수로 바뀜, age만 하면 바깥의 전역변수에 적용
    age = 35; //전역변수
    console.log('지역변수: ' + age);

    let fname = 'Kim';
    console.log(fname);

}
localFnc();
// console.log('전역변수: ' + age);
// console.log('전역변수: ' + fname);
{
    //{}블럭이 없는 경우, 위에서 선언되어있기 때문에 오류남
    //블럭 안에서 새로운 변수를 선언해준거임, 블럭 끝나면 끝.
    let fname = 'Park';
    console.log(fname);
    var age = 22; // = 여전히 전역변수. 에러 X | 주로 let을쓰쟈!
}

console.log(window);
//js에서 객체(object) = {}에 담김, alert: ƒ alert() = 속성들 볼 수 있음

//여기까지 P21