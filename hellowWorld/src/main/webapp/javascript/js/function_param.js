// function_param.js
// P 66. 2장 함수

//함수호이스팅. = 선언하는 부분이 끝에 있어도 자동으로 맨위에서 실행됨
function myFunc(param) { //parameter
    //() = param 
    console.log('Hello ~ ' + param);
}

function myFunc2(param1, param2) {
    console.log(param1 + param2);
}

//함수선언식
myFunc('World'); //argument
myFunc2('Welcome', 'Home !! ')

//함수표현식 (or 호이스팅)
let myFunc3 = function (param) {
    document.write('<p>Hello, ' + param + '</p>');
    //이렇게 하고 아래 실행까지 해줘야 출력 됨.
}
myFunc3('메롱');

let myFunc4 = myFunc3;
myFunc4('WORLD');

//매개값을 처리하는 arguments 객체.
//arguments 여러개일 때 상황 ↓, P69, 71
function mySum(n1 = 0, n2 = 0) {
    let sum = 0;
    console.log(arguments);
    // console.log(n1 + n2);
    for (let num of arguments)
        sum += num;
    //갯수에 상관없이 다 배열 처리하겠다..?
    console.log(sum);
}
mySum(1, 2, 3, 4, 5, 6, 7); //갯수 안맞아도 n1 + n2만 알아서 실행됨

//화살표함수 , P81
function myFunc5(a, b) {
    console.log(a + b);
}

// //매개값을 두개받는setTimeout (실행함수(){} ,타임딜레이 밀리세컨)
// setTimeout(function (a, b) {
//     console.log(a);
// }, 2000);
// => 이건 교수님이 작성하시다가 지움, 안봐도 됨.

//forEach메소드의 매개값으로 화살표함수를 사용.
// ['Hello', 'World'].forEach(function(val, idx){}); 이거를 화살표 함수로 하면 ↓
['Hello', 'World'].forEach((val, idx) => {
    console.log(val,idx);
});
// = ['Hello', 'World'].forEach((val, idx) => console.log(val,idx)); // 하나일때 이렇게 작성가능.