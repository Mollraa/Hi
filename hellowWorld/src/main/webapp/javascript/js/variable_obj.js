//variable_obj.js

//P 57 ~ 61 - for문의 이해 |☆중요중요 기억해..☆
let strAry = [];
for (let i = 0; i < 10; i++) {
    //0부터 시작; 10보다 작으면; 10번반복;
    strAry[i] = 'i' + i; // i0. i1, i2 ... i9
}
//배열일 때 쓸 수 있는, 확장for..of
for (let str of strAry) {
    console.log(str);
    //배열에 있는 갯수 만큼 반복하겠다.
}
//객체 for...in
let obj = {
    fname: '제니', //속성
    lname: '백', //속성
    age: 20, //속성
    fullName: function () { //메소드
        return this.lname + '' + this.fname;
    }
}
//객체의 모든 속성값을 읽어오겠다.
for (let prop in obj) {
    // console.log(prop); //이렇게하면 속성만 읽어옴 : fname 
    console.log(prop, obj[prop]); //obj.lname // obj.prop = obj안에 prop를 읽어오겠다는 의미. 일케하지마
}

//배열[{객체},{객체},{객체}]
let members = [{
        id: 'user1',
        name: '백제니'
    },
    {
        id: 'user2',
        name: '노지수'
    },
    {
        id: 'user3',
        name: '김리사'
    }
]
let str = '<table border=1>';
//for..of : members에 있는 갯수 만큼 반복
for (let member of members) {
    str += '<tr>';
    //for.. in : 가지고온 요소들 (id, name) 에 대한 값만큼 반복
    for (let prop in member) {
        str += `<td>${member[prop]}</td>`; //html 에서 보기
        console.log(prop, member[prop]); //콘솔에서 보기
    }
    str += '</tr>';
    console.log('================');
}
str += '</table>';
document.write(str);


//forEach() 라는 메소드사용해서 해보기
str = '<table border=1>'; // 테이블 초기화 해줌
members.forEach(createTable); //createTable : 콜백함수.
str += '</table>';
document.write(str);

function createTable(val, idx) {
    //idx ↓ , 테이블의 헤더부분 출력.
    if (idx == 0) {
        str += '<tr>';
        for (let prop in val) {
            str += `<td>${prop}</td>`;
        }
        str += '<th>버튼</th>';
        str += '</tr>';
    }

    //테이블의 데이터영역 출력.
    //val = {id: 'user1',name: '백제니' } . 출력 부분 ↓
    str += '<tr>';
    for (let prop in val) {
        //prop기준으로 루틴을 돌릴거당
        str += `<td>${val[prop]}</td>`;
    }
    // str += `<td><button style="background-color: pink; color: white;">클릭<boutton></td>`;
    str += `<td><button onclick="alertName(event)">클릭<boutton></td>`;
    str += '</tr>';
}
function alertName(e){
    console.log(e.target.parentElement.parentElement.remove());
    //.parentElement = e의 target의 부모요소 의 부모요소 ~ ~ 
    // .style.backgroundColor='pink' = 배경색 / color는 폰트색 바꿈 / .remove() 클릭하면 삭제됨
    // window.alert(e)
}