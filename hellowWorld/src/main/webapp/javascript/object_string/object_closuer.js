// object_closure.js
// P_116

//변수에 함수담기
//1. 함수는 변수에 대입가능.
let fnc = function () {
    console.log('함수호출!!');
}
//2. 메소드의 매개값으로 대입가능.
let num = [1, 2, 3];
num.forEach(function (val) {
    console.log(val);
})
// 3. 결과값으로 함수반환.
function outerFunc(name) {
    let saying = name + '안녕 ~ ?';

    //return = 함수
    return function () {
        return saying;
    }
}

let closure1 = outerFunc('백지니');
console.log(closure1);
console.log(closure1());

//-----------------------------

function initCnt() {
    let cnt = 10; //function initCnt()안에 있으면 계속 초기화됨 

    return function addCnt() { 
    //초기화말고 계속 증가 시키고싶을 때 : return하고 let plusCnt, plus();
        cnt++;
        console.log(cnt);
    }
    //  addCnt();
}

let plustCnt = initCnt(); // 하면 addCnt호출해줌
plustCnt();
plustCnt();
plustCnt();
plustCnt();
