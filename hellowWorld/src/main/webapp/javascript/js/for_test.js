//for_test.js

// 1 ~ 100 사이의 임의의 수를 생성 => 배열에 저장[5].
// 배열값중 최대값을 구하는 반복문을 작성.
// 배열요소는 document.write() => 5개 요소를 화면에 출력.

// const random = [];
// let max1 = 0;
// let min1 = 0;
// for (let i = 0; i < 5; i++) {
//     let val = Math.ceil(Math.random() * 100);
//     random[i] = val;
// }
// document.write(random);
// document.write('<br>');

//------------------------------------------
const tempArr = [];
for (let i = 0; i < 5; i++) {
    let temp = Math.ceil(Math.random() * 100);
    tempArr[i] = temp;
}
tempArr.forEach(val => document.write(`<p>${val}</p>`));

let max = tempArr[0];
let min = tempArr[0];
//[0]번의 값을 기준으로 비교.
tempArr.forEach(val => {
    if (val > max) {
        max = val;
    }
     else if (val < min) {
        min = val;
    }
});
console.log('Max : ' + max);
console.log('Min : ' + min);

// 함수의 스코프 체인. P85 
var a = 1;
var b = 5;

function outerFunc() {
    //var b; => 호이스팅 된 상태. 지역변수
    function innerFunc() {
        a = b; //b에 있는 값을 a에 담아주겠다
    }
    console.log(a); // a = 1
    a = 2;
    b = 4;
    innerFunc();
    console.log(a); // a = 4
    var b = 2; //var는 호이스팅 된다.
    console.log(b); // b = 2
}
outerFunc();
console.log(b); // b = 5