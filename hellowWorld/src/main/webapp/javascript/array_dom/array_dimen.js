// array_dimen.js

const members = [
    ['김리사', 20],
    ['노지수', 22],
    ['백제니', 24]
]
//제일 마지막 위치에 배열[] 추가
members.push(['이로제', 25]);
//수정
//members[0] = 0 '김리사' 20 .를 가져옴 | [1]배열의 값을 50으로 변경
members[0][1] = 50;

// 배열 -> object 타입으로 변경 ( = 객체리터럴)
const objMembers = [
    // {name: '홍영기', age: 20},
    // {name: '김민수', age: 28},
    // {name: '기러기', age: 25}
];
members.forEach(member => {
    // console.log(member);
    // console.log(`이름 : ${member[0]}`); //member의 이름에 해당하는 인덱스0을 볼거당
    console.log(`이름 : ${member[0]} , 나이 : ${member[1]}`); // = member의 이름 = 인덱스0, 나이 =[1] 볼거당

    // 배열 -> object  타입으로 변경 ( = 객체리터럴)
    let obj = {
        name: member[0],
        age: member[1]
    }
    objMembers.push(obj);
})
console.log(objMembers);

// object -> 배열로바꾸기
const aryMembers = [];
objMembers.forEach(member => {
    let ary = [member.name , member.age];
    aryMembers.push(ary);
});
console.log(aryMembers);
// console.table(members);