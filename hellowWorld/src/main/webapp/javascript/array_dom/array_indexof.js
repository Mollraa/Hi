// array_indexof.js

// String.prototype.indexOf()
// Array.prototype.indexOf()
// Array.prototype.some()

const members = ['진정욱', '노은경', '백나현']
const newMems = ['김민지', '노은경', '정다슬'];

let pos = members.indexOf('노언경'); // '노언경'의 인덱스 값 호출 : 없는값 = -1
// let pos = members.indexOf('노은경'); // '노은경'의 인덱스 값 호출 : 있는값 = 1
// console.log(pos);

// ----
// members배열에 newMems추가
// 반복문 사용.
newMems.forEach(member => {
    // member의 값이 members의 배열에 존재하는지 여부 확인 후 추가.
    if(members.indexOf(member) == -1){ // == -1 . 없으면 추가
        members.push(member);
    }
})
console.log(members); // ['진정욱', '노은경', '백나현', '김민지', '정다슬']
members.push('김민');

// Array.prototype.some(). 예제
// = let result = members.some(member => member == '노은경'); | 값 하나일 때 
let result = members.some(member => {
    return member == '노은경';
    //return의 값에 만족하면 ture
})
result = members.every(member => member.length == 3); // members에 모든 값을 만족 할 때. T or F
result = members.find(member => member.startsWith('김')); 
console.log(result);
