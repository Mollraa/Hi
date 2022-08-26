// table_func.js

function makeTr(mem = {}) {
    let tr = '<tr>'
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
        // = `<td>${member.id}</td><td>${member.name}</td><td>${member.score}</td>`;
        // = for (let member of members)
    }
    tr +='<td><button>확인</button></td>'
    tr += '</tr>';
    return tr;
}

function makeHd() {
    let titles = ['아이디', '이름', '점수','연락처'];
    let tr = '<tr>';
    for (let title of titles) {
        tr += `<th>${title}</th>`;
    }
    tr += '</tr>';
    return tr;
}

const members = [{
        id: 'user1',
        name: '백제니',
        score: 90,
        phone: '010-1234-1234'
    },
    {
        id: 'user2',
        name: '노지수',
        score: 85,
        phone: '010-9876-5432'
    },
    {
        id: 'user3',
        name: '김리사',
        score: 79,
        phone: '010-4567-1234'
    },
    {
        id: 'user4',
        name: '이로제',
        score: 0,
        phone: '010-2222-1234'
    }
];
//const새로운 값 할당못함 
// members='';
let str = '<table border=1>';
str += makeHd();
// =  str += '<tr><th>아이디</th><th>이름</th><th>점수</th></tr>';
for (let member of members) { //{id: 'user1', name: '백진희', score: 90}
    str += makeTr(member);
    // = 
    // str += '<tr>';
    // str += `<td>${member.id}</td><td>${member.name}</td><td>${member.score}</td>`;
    // str += '</tr>';
}
str += '</table>';
document.write(str);