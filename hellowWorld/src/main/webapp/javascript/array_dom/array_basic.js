// array_basic.js
// 배열에 요소추가/삭제
// push() : 마지막 추가. | pop () ; 마지막 제거
// unshift() : 첫번째 추가. | shift() : 첫번째 제거
// slice(firstindex, lastindex), = 특정 위치 값 가져오기
// splice(위치, 대체할 갯수, 대체할 값) : 추가, 수정, 삭제 ☆

//배열선언
const names = []; //값이 하나도 없는 0인 배열 선언

//배열에 요소추가
names[0] = '정다슬';
names[names.length] = '백진희'; //names.length = 배열의 인덱스 값 +1
names[names.length] = '황용주';
names[names.length] = '손정빈';
names.push('김아현'); //push 제일 마지막 위치에 추가

names.pop();
names.pop();
names.shift(); //shift() : 첫번째 제거 = 다슬제거됨
names.unshift('손정빈'); // unshift() : 첫번째 추가.

const newNames = names.splice(0,2);
// newNames.splice(2, 0, '김리사');
// newNames.splice(1, 1, '홍길동'); //1번째위치에서, 요소1개를가지고와서, 홍길동으로 대체
newNames.splice(0, 2, '홍길동'); // 0번째위치에서, 요소2개 (손정빈, 백진희)를가지고와서 삭제, 홍길동으로 대체

// const newNames = names.slice(0,2);
console.log(newNames); //'손정빈' '백진희'

//splice_추가. 수정. 삭제 
// names.splice(0, 0, '김민지', '노은경', '진정욱'); // 0번째위치에, 대체할 값은 없고, 김민지,노은경,진정욱 추가
// names.splice(0, 3, '김민지', '노은경', '진정욱'); // 0번째위치에, 원래있던 3개의자리에, 김민지,노은경,진정욱 추가
// names.splice(0, 3); // 추가할 값이 없어서, 다 삭제됨
// names.splice(0, 3, '홍석천'); // 0번째위치, 3에, 홍석천추가
names.splice(2, 0, '홍석천'); // 2번위치, 요소0, 홍석천추가 
//또 다른 삭제방법
names.length = 0; //크기를 지정.
//다 합쳐주기
const otherName = names.concat(newNames);
console.log(otherName);


names.forEach(name => {
    console.log(name);
})
