// string_slice.js

let str = 'Good, Morning!';
console.log(str.length);
console.log(str.slice(2, 7)); // index : 2 ~ index : 7 (exclude)
console.log(str.slice(2)); // index : 2 ~ 끝까지
console.log(str.slice(2, -2)); // index : 2 ~ index : 12 까지 | 전체크기(14)에서 2를 뺀 값까지 
console.log(str.slice(-2)); // index : (14-2) | 값이 하나일 때 : 끝에서부터 두개(-2)만
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

console.log(str.substring(0, 7));
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
//substr(3, 5); index: 3부터 5문자를 잘라오겠다.

//indexOf : 문자열을 찾아서 인덱스를 반환.
console.log(str.indexOf('Mor')); // 6
console.log('Good Morning, Good Afternoon'.lastIndexOf('Good')); //뒤에서 부터 찾을 때
console.log('Good Morning, Good Afternoon'.lastIndexOf('Goods')); //찾는 값이 없는경우 = -1

str = 'Good Morning, Good Afternoon, Good Evening';
let posi = str.indexOf('Good', str.indexOf('Good') + 1); // => 0
console.log(posi); //두번째 Good 문자 있는 위치 인덱스.

// 문자열에서 반복되는 구문의 횟수 찾기.
let cnt = 0;
let pos = str.indexOf('Good');
while (pos != -1) {
    cnt++;
    pos = str.indexOf('Good', pos + 1);
}
console.log(cnt + ' 회');

//연습문제
let searchKey = prompt('찾을 이름을 입력하세요.');
const members = [
    {name: "백제니", age: 25},
    {name: "김리사", age: 22},
    {name: "노지수", age: 18},
    {name: "이로제", age: 29}
]
//members 배열에서 searchKey를 찾아서 나이 콘솔 출력.
members.forEach(member => {
    //변수이름을 member로 정하고 searchKey의 값이 -1보다 크면 값을 비교해서 출력해줌 
    if (member.name.indexOf(searchKey) != -1) { // includes() => true / false
        console.log(member.name + '는 ' + member.age + '살입니다.^^');
    }
    // if (member.name.includes(searchKey)) { // includes() => true / false
    //     console.log();
    // }

})

