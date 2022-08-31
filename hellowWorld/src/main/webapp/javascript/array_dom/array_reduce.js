// array_reduce.js
// P 203

const numbers = [2, 3, 8, 5, 1];
let sum = 0;
//1
// numbers.forEach(function (el) {
//     sum += el;
// });
// console.log(sum);

//2
// let result = numbers.reduce(function (a, b, c, d) {
//     console.log(a,b,c,d);
//     return a + b;   //리턴값이 그 다음 순번의 첫번째 값으로 쓰임 
//                     // 0 2 0 (5) [2, 3, 8, 5, 1] - 첫번째 0 누적값 없어서
//                     // 2 3 1 (5) [2, 3, 8, 5, 1]
//                     // 5 8 2 (5) [2, 3, 8, 5, 1]
//                     // 13 5 3 (5) [2, 3, 8, 5, 1]
//                     // 18 1 4 (5) [2, 3, 8, 5, 1]
// }, 0); // 매개값(function, return값 자리 0);
// result = numbers.reduce();
// console.log(result);

let result = numbers.reduce(function (acc, val, idx, ary) {
    return acc + val;
}, 0);

result = numbers.reduce((acc, val, idx, ary) => {
    console.log(acc, val);
    acc.push(val + 2); // [4, 5, 10, 7, 3];
    return acc;
}, []);

// 문자열 만들기, <ul><li>2</li><li>3</li><li>8</li><li>5</li><li>1</li></u1>
result = numbers.reduce((acc, val, idx) => {
    console.log(acc);
    if (idx == 0) {
        acc = '<ul>'; //acc에 ul담아줌
    }
    acc += '<li>' + val + '</li>'; // += 위에 값이 담겨있어서 누적시킴
    if (idx == numbers.length - 1)
        acc += '</ul>';

    return acc; // 다음순번의 누적초기값으로 사용.
}, '');
// '' 내가 어떻게 정의하느냐에 따라 resutl에 담김
//numbers가 가지고있는 배열 많큼 .reduce()루틴돌면서 가져오겠다..? 
document.write(result);

// 배열요소의 제일 큰 값 구하기. --------미완성
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    // 제일 큰 값을 구하는 코드.
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log('최대값 : ' + max);

result = numbers.reduce((acc, val) => {
    return acc > val ? acc : val; //= 다음 요소의 초기값
}, Number.MIN_SAFE_INTEGER);
console.log('최종결과 : ' + result, Number.MIN_SAFE_INTEGER);
