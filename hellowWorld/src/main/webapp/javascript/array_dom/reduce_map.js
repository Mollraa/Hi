// reduce_map.js
// P 207

// Array.prototype.map(); => 매핑(A -> A') |건수 똑같
// Array.prototype.filter(); => 필터링 (A -> a) |건수 줄어듬

const names = ['이현성', '이주훈', '황용주', '최승현'];

let mapfnc = (name, idx) => {
    let obj = {}
    obj.name = name;
    obj.sno = idx + 1; // {name:'이현성', sno: 1} / 순번이라서 +1
    return obj;
}

// filfnc = return 값이 ture이면 반환, false이면 반환안함.
let filfnc = (member) => { 
    return member.name.startsWith('이'); // '이'로 시작하는 이름을 가진 맴버 return
}

let reduceMapFnc = (acc, val, idx) => { //acc누적 val변수이름 idx
    let obj = {}
    obj.name = val;
    obj.sno = idx + 1;
    acc.push(obj); // [{name:'이현성', sno:1} , {name:'이주훈', sno:2}]
    return acc;
}

let reduceFilFnc = (acc, val, idx) => {
    if (val.name.startsWith('이')) {
        acc.push(val);
    }
    return acc;
}

//----1----
//같은형태의 데이터, 타입?만달라짐
// let members = names.map(
//     (name, idx) => {
//         let obj = {}
//         obj.name = name;
//         obj.sno = idx + 1; // {name:'이현성', sno: 1} / 순번이라서 +1
//         return obj;
//     }
// );
// console.log(members);

//----
// let lees = members.filter(
// //     (member) => {
// //     // return 값이 ture이면 반환, false이면 반환안함.
// //     return member.name.startsWith('이'); // '이'로 시작하는 이름을 가진 맴버 return
// // }
// );
// console.log(lees);

//----
// let result = names.map((name, idx) => {
//     let obj = {}
//     obj.name = name;
//     obj.sno = idx + 1; // {name:'이현성', sno: 1} / 순번이라서 +1
//     return obj;
// }).filter((member) => {
//     // return 값이 ture이면 반환, false이면 반환안함.
//     return member.name.startsWith('이'); // '이'로 시작하는 이름을 가진 맴버 return
// });
// console.log(result);
//----1 end ----


//map메소드
let members = names.map(mapfnc);
console.log(members);

//filter메소드
let lees = members.filter(filfnc);
console.log(lees);

//map.fulter 메소드 체인
let result = names.map(mapfnc)
                    .filter(filfnc);
console.log(result);

// reduce로 map과 같은 기능 구현.
members = names.reduce(reduceMapFnc, []);
console.log(members);

// reduce로 filter와 같은 기능 구현.
lees = members.reduce(reduceMapFnc, []);
console.log(lees);

result = names.reduce(reduceMapFnc,[]).reduce(reduceFilFnc, []);
console.log(result);