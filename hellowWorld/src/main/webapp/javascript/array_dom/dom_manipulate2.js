// dom_manipulate2.js

// querySelector = 하나만 가지고옴 
// querySelectorAll = 다 가지고옴
let addBtn = document.querySelector('button') // 버튼 하나면 가져올거당
// addBtn.onclick ='click';  //속성
addBtn.onclick = function () { 
    //메소드
    let mid = document.getElementById('mid'); // input태그
    let mname = document.getElementById('mname'); // input태그
    let mphone = document.getElementById('mphone'); // input태그
    console.log(mid.value, mname.value, mphone.value);

    //저장값 없으면 warning
    if(!mid.value | !mname.value | !mphone.value){
        alert('필수값을 입력해주세요 ^_^');
        return; // 함수종료
    }

    //회원저장
    const mValues = [mid.value, mname.value, mphone.value]

    // 배열저장반복 돌리기
    let tr = document.createElement('tr');
    mValues.forEach(val => {
        let td = document.createElement('td'); // id위치 . <td>user1</td>
        let txt = document.createTextNode(val) // 사용자가 입력한 값을 넣어줌 ex)user1 같은거
        td.appendChild(txt); // <td>user1</td>
        tr.appendChild(td); // <tr><td>user1</td></tr> . tr에 자식요소로 td를 넣어주겠슴돠
    });

    //table
    document.getElementById('list').appendChild(tr);

    //초기화
    mid.value ='';
    mname.value ='';
    mphone.value ='';
    mid.focus();

}