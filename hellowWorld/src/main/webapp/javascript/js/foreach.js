// foreach.js

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

//for반복문. 배열메소드(forEach) = 매개값으로 함수가 옵니다~
members.forEach();
// members.forEach(function (val, ind, ary) {
//     //(function (a, b, c) , a = members의 값 = val, b = index, c = ary
//     console.log(val.name);
//     // console.log(val.phone);
// }); = (function (val, ind, ary) 일케하면 길어지니까 ↓

// function callBackFnc(val, ind, ary){
//     console.log(val);
// }

members.forEach(callBackFnc); // 콜백함수 이름만 넣어줌

function callBackFnc(val, ind, ary) {
    console.log(val);;
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

function makeTr(mem, color) {
    let tr = `<tr style='color: ${color}'>`;

    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}