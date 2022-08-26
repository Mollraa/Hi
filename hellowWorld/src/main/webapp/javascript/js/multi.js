// multi.js : 구구단 출력.

/* 
<p> 3 * 1 = 3</p>
<p> 3 * 2 = 6</p>
<p> 3 * 3 = 9</p>
<p> 3 * 4 = 12</p> */
function gugudan(numb) {
    // + = `` 
    let num = numb;
    let str = '';
    for (let i = 1; i <= 9; i++) {
        // str += '<p>' + num + '*' + i + ' = ' + (num * i) + '</p> = 밑이랑 같음 ';
        str += `<p>${num} * ${i} = ${num*i} </p>`;
        // str += `<p>${m}* ${n} = ${m*n} </p>`
    }
    return str;
}
let result = gugudan(8);
document.write(result);

// document.write(str);

let num1 = 30;
console.log(`num1의 값은 ${num1} 입니다.`);

//
// {
//     let a = 10; //{} 안에서만 값인정
//     console.log(a)
//     var a = 10;
// }

// console.log(b);
// var a = 10; //블럭{} 안밖으로 영향안받음 (...? 여튼 대략 그럼)
//