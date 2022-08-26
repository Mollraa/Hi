// conditions.js

const members = [{
        id: 'user1',
        name: '백제니',
        score: 90,
        phone: '010-1234-1234',
        gender: 'M'
    },
    {
        id: 'user2',
        name: '노지수',
        score: 85,
        phone: '010-9876-5432',
        gender: 'W'
    },
    {
        id: 'user3',
        name: '김리사',
        score: 79,
        phone: '010-4567-1234',
        gender: 'M'
    },
    {
        id: 'user4',
        name: '이로제',
        score: 55,
        phone: '010-2222-1234',
        gender: 'W'
    }
];

//함수표현식(=함수선언식)은 먼저적어줘야함 
let welcomeFnc = function (param) {
    console.log('Welcome ' + param)
}
//화살표함수, 하나만 있을 땐 {} 생략가능
let helloFnc = (param) => {
    console.log('Hello ' + param)
}
//함수를 매개값으로 받는 함수.
//어떤 함수가 오느냐에 따라 실행기능은 달라진다. 
function callFunc(fnc) {
    let name = 'Hong';
    fnc(name);
    //fnc에담긴 값과 name을 합쳐준다.
}
callFunc(welcomeFnc);
callFunc(helloFnc);
//callFunc의 함수에 welcomeFnc라는 매개값을 받음

//함수선언식
// function welcomeFnc(param) {
//     console.log('Welcome ' + param)
// }
//함수선언식
// function helloFnc(param) {
//     console.log('Hello ' + param)
// }

//===================오전수업여기까지 08.26========================

const passMember = [];

for (let i = 0; i < members.length; i++) {
    if (members[i].score > 60) {
        console.log('이름: ' + members[i].name);
        passMember[passMember.length] = members[i].name;
    }
}
console.log(passMember);

const women = []
//확장 for
for (let member of members) {
    if (member.gender == 'W') {
        women[women.length] = member;
    }
}
console.log(women);

//-----------------------실습---------------------------
//테이블형식(표) =>
//성별: 남자 => 파란색글씨, 여자=>빨간색글씨
//makeTr(파란,빨강) / makeBlueTr(), makeRedTr()


function makeTr(mem = {}) {
    let tr = '<tr>';
    for (let prop in mem) {
        if (mem.gender == 'W') {
            tr += `<td style="color: red">${mem[prop]}</td>`;
        } else {
            tr += `<td style="color: blue">${mem[prop]}</td>`;
        }
    }
    tr += '</tr>';
    return tr;
}

function makeHd() {
    let titles = ['아이디', '이름', '점수', '연락처', '성별'];
    let tr = '<tr>';
    for (let title of titles) {
        tr += `<th>${title}</th>`;
    }
    tr += '</tr>';
    return tr;
}
let str = '<table border=1 style="text-align: center">';
str += makeHd();
for (let member of members) {
    str += makeTr(member);
}
str += '</table>'

document.write(str);

//----------------------------------------------------
//1.
function maketr(mem, color) {
    let tr = `<tr style='color ${color}' > `;
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}
//2.
function makeBlueTr(mem){
    let tr = `<tr style='color: blue'>`;
    for(let prop in mem){
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}


let str = '<table border=1>';
str += '<tr><th>아이디</th><th>이름</th><th>점수</th><th>연락처</th><th>성별</th></tr>';
members.forEach((val, ind, ary) => {
    if (val.gender == 'M') {
        str += makeTr(val, 'blue');
    } else if (val.gender == 'W') {
        str += makeTr(val, 'red');
    }
});

document.write(str);