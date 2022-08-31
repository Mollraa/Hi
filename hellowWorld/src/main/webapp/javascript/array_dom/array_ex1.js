// array_ex1.js

// https://www.mockaroo.com/ .예제사이트


const data = `[{"id":1,"first_name":"Amii","last_name":"Blum","email":"ablum0@wunderground.com","gender":"Female","salary":4651},
{"id":2,"first_name":"Brandie","last_name":"Tour","email":"btour1@adobe.com","gender":"Female","salary":4823},
{"id":3,"first_name":"Uta","last_name":"Roantree","email":"uroantree2@weather.com","gender":"Female","salary":7986},
{"id":4,"first_name":"Antoni","last_name":"Coye","email":"acoye3@delicious.com","gender":"Male","salary":2317},
{"id":5,"first_name":"D'arcy","last_name":"Blees","email":"dblees4@imgur.com","gender":"Male","salary":8735},
{"id":6,"first_name":"Ced","last_name":"McTrustey","email":"cmctrustey5@europa.eu","gender":"Male","salary":1870},
{"id":7,"first_name":"Alfie","last_name":"Withrop","email":"awithrop6@yellowbook.com","gender":"Male","salary":2120},
{"id":8,"first_name":"Nevins","last_name":"Kidby","email":"nkidby7@youtu.be","gender":"Male","salary":2691},
{"id":9,"first_name":"Kiley","last_name":"Cofax","email":"kcofax8@sakura.ne.jp","gender":"Female","salary":3441},
{"id":10,"first_name":"Genevra","last_name":"Chomicki","email":"gchomicki9@mozilla.org","gender":"Female","salary":1994},
{"id":11,"first_name":"Juditha","last_name":"Petworth","email":"jpetwortha@arstechnica.com","gender":"Female","salary":7210},
{"id":12,"first_name":"Geri","last_name":"Ulster","email":"gulsterb@ifeng.com","gender":"Female","salary":1407},
{"id":13,"first_name":"Ansley","last_name":"Picknett","email":"apicknettc@sakura.ne.jp","gender":"Female","salary":4118},
{"id":14,"first_name":"Kenneth","last_name":"Michelle","email":"kmichelled@netscape.com","gender":"Male","salary":2043},
{"id":15,"first_name":"Norry","last_name":"Clarke","email":"nclarkee@archive.org","gender":"Female","salary":5243}]`

let result = JSON.parse(data); // JSON.parse : string -> object 변환

// 교수님이 적은 무언가...
// let entries = result.map(member => {
//     let ary = []
//     ary.push(Object.values(member));
//     return ary;
// });
// console.log(entries);

result.forEach(element => {
    console.log(element.first_name);
}); // console.log(result[0]); // 가지고온 값의 첫번째 데이터 값을 보겠다.

// ex) 성별이 female이고, salary 5000이상인 사람.
let str = result.reduce((acc, val, idx) => {
    if(idx == 0){
        acc = '<ul>';
        // 0 = ul
    }
    if(val.gender == 'Female' && val.salary > 5000) {
        acc += `<li>${val.id}${val.first_name}${val.last_name}${val.salary}</li>`;
        // acc에 += `id,f이름,l이름,월급`
    }
    if(idx == result.length -1) {
        acc += '</ul>';
    }
    return acc;
}, '');

document.write(str); //<ul><li>15 Carolin ...</li></ul>