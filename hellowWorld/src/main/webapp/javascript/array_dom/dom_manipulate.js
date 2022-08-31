// dom_manipulate.js
// element생성: createElemnet()
// textNode생성: createTextNode()
// 부모-자식 형성: appendChild()

// <!-- <form action="" method="post">
//         <label for="user_id">사용자아이디</label>
//         <input text="text" name="user_id" id="user_id">
//         <label for="user_pass">사용자비밀번호</label>
//         <input text="text" name="user_pass" id="user_pass">
//         <button>로그인</button>
//     </form> -->

let frm = document.createElement('form'); //폼만들기
frm.setAttribute('action', 'addMember.jsp'); //
frm.setAttribute('method', 'post'); 

// 자식요소(label)  
//<label for="user_id">사용자아이디</label>
let labelId = document.createElement('label');
labelId.setAttribute('for', 'user_id');
labelId.innerText = '사용자 아이디';
frm.appendChild(labelId);

// 자식요소(input)
// <input text="text" name="user_id" id="user_id">
let inputId = document.createElement('input');
inputId.setAttribute('type', 'text');
inputId.setAttribute('name', 'user_id');
inputId.setAttribute('id', 'user_id');
frm.appendChild(inputId);

// 자식요소(label)
// <label for="user_pass">사용자비밀번호</label>
let labelId2 = document.createElement('label');
labelId2.setAttribute('for', 'user_id');
labelId2.innerText = '사용자 비밀번호';
frm.appendChild(labelId2)

// 자식요소(input)
// <input text="text" name="user_pass" id="user_pass">
let inputPw = document.createElement('input');
inputPw.setAttribute('type', 'text');
inputPw.setAttribute('name', 'user_pass');
inputPw.setAttribute('id', 'user_pass');
frm.appendChild(inputPw);

// 버튼
// <button>로그인</button>
let button = document.createElement('button');
button.innerText = '로그인';
frm.appendChild(button);

// div#show의 자식요소로 지정.
document.getElementById('show').appendChild(frm); 
console.log(frm);