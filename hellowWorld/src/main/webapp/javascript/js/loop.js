//loop.js

let numbers = [23, 33, 14, 52, 77, 55, 16];
//1)
//짝수함 => reult.
let result = 0;
for (let i = 0; i < numbers.length; i++) {
    if (i % 2 == 0) {
        result += numbers[i];
    }
}
console.log('짝수합/ 홀수번째위치 : ' + result);
result = 0;

//2) froEath써서 하는 방법~
result = 0;
numbers.forEach((val, ind) => {
    if (val > 30) {
        result += val;
    }
});
console.log('짝수합/ 홀수번째 위치/ 30보다 큰 값 : ' + result);