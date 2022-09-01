// dom_manipulate2.js
// querySelector = 하나만 가지고옴 
// querySelectorAll = 다 가지고옴

//샘플데이터 가져와서 해보기 (실제DB에서 가져올 데이터 (아자스))
const members = [{
        mid: 'admin',
        mname: '관리자',
        mphone: '010-1234-5678'
    },
    {
        mid: 'jin12',
        mname: '백제니',
        mphone: '010-2047-5880'
    },
    {
        mid: 'kim26s',
        mname: '김리사',
        mphone: '010-5259-5259'
    }
]


document.addEventListener('DOMContentLoaded', function () { //DOMContentLoaded가 다운받아진다음에, function~을 실행하겠습니다.
    showMember(); //맴버를 보여주는 작업입니다.
    // 등록버튼 이벤트.
    let addBtn = document.querySelector('button'); // 버튼 하나면 가져올거당
    addBtn.addEventListener('click', addMember); // addBtn.onclick ='click'; / 속성일때
    // 회원찾기 이벤트.
    findMember();
    let findBtn = document.getElementById('findMember');
    findBtn.addEventListener('click', findMember); // (이벤트, 콜백함수)
    // 전체선택/해제 이벤트.
    let allCheck = document.getElementById('allCheck');
    allCheck.addEventListener('change', allChecked);

}); //dom요소에 이벤트 등록. (이벤트타입, 이벤트실행 핸들링?) { }


//전체선택해제
function allChecked() {
    // ture / false 값은 this의 checked 값을 할당.
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    chks.forEach(check => {
        check.checked = this.checked;
    })
}


//수정
function modiMember() {
    let id = document.getElementById('mid').value;
    console.log(id);
}


function findMember() {
    // 찾을 아이디.
    let id = document.getElementById('mid').value; //.value id의 값(속성)을 읽어옴
    console.log(id);

    let trs = document.getElementsByTagName('tbody')[0].children;
    trs = document.querySelectorAll('tbody>tr'); //tbody의 tr요소를 다 가 져 오겠다. | :nth~하면 순번까지 가져올수있음
    // console.log(trs); // NodeList [tr, tr, tr]
    trs.forEach(tr => { // 이전에 있던 클래스는 지워주고, 다시 클래스 적용
        //tr.className  = ''; // 클래스 속성값을 변경
        tr.removeAttribute = 'class';
    })
    //찾기 & 변경
    trs.forEach(tr => {
        // console.log(tr.firstElementChild); // <td>admin</td>
        console.log(tr.firstElementChild.textContent); // admin
        if (tr.firstElementChild.textContent == id) {
            tr.setAttribute('class', 'focus');
            // 값변경
            let childTd = tr.children;
            childTd[1].textContent = document.getElementById('mname').value; //name
            childTd[2].textContent = document.getElementById('mphone').value; //name
        }
    });
}


function showMember() {
    //리스트보여주기
    let table = document.getElementById('list');
    members.forEach(member => { // = function makeTr(mValues) {
        let mValues = [];
        //object -> array 바꿔주기
        // 1)
        // for (let prop in member) { //member에 있는 속성값을 루핑돌면서
        //     mValues.push(member[prop]); // 배열에 담아주겠다.
        // } 
        // 2)
        mValues = Object.values(member); // Object.keys(member): [속성, 속성]
        let tr = makeTr(mValues); //()에 들어갈게 배열이즤~ obj -> arr 바꿔줘야겠즤?
        table.appendChild(tr); // <tr><td><button> 삭제 </button></td></tr>
    });
} //end of showMember()


function addMember() {
    //메소드
    let mid = document.getElementById('mid'); // input태그
    let mname = document.getElementById('mname'); // input태그
    let mphone = document.getElementById('mphone'); // input태그
    console.log(mid.value, mname.value, mphone.value);

    //저장값 없으면 warning
    if (!mid.value | !mname.value | !mphone.value) {
        alert('필수값을 입력해주세요 ^_^');
        return; // 함수종료
    }
    //회원저장
    const mValues = [mid.value, mname.value, mphone.value]
    let tr = makeTr(mValues); // 배열저장반복 돌리기 -> makeTr로 갔엉
    document.getElementById('list').appendChild(tr); //리스트 하위요소로 tr을 넣겠습니당~

    //초기화
    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();
} //end of addMember()


//공통된 tr만들기 , addMember()의 tr이고 (mValues=[mid, mname, mphone])의 배열로 값을 들어오겠다~
function makeTr(mValues = []) {
    // 배열저장반복 돌리기
    let tr = document.createElement('tr');
    tr.addEventListener('click', function () {
        console.log(this.firstElementChild.innerText); // = <td><button> user1</button><td> , tr을 기준으로 id라는 녀석을 txt값을 가져오고싶다.
        // this. = tr / this.firstChild = testNode포함 / firstElementChild = elemnet기준 txt제외 / .innerText = user1같은 txt값만 가지고오고싶다.

        //선택된 tr의 정보를 입력화면에 보여지도록 만들기. / addEventListener = P729보기
        document.getElementById('mid').value = this.firstElementChild.nextElementSibling.innerText; //id
        document.getElementById('mname').value = this.firstElementChild.nextElementSibling.nextElementSibling.innerText; //name
        document.getElementById('mphone').value = this.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText; //phone
    }, false);

    //체크박스 추가.
    //<tr><td><input id="allcheck" type="checkbox"></td></tr>
    let chk = document.createElement('input');
    chk.addEventListener('click', function (e) {
        //tr의 이벤트가 발생하지 않도록 하기 위해서.
        e.stopPropagation();
    })
    //하나선택하면 전체선책 해제
    chk.addEventListener('change', function() {
        let checkProp = document.querySelectorAll('tbody tr input[type="checkbox"]');
        // [input, input, input] 배열(forEach) : every(), some()
        document.getElementById('allCheck').checked = 
                                            [...checkProp].every(item => item.checked);
        //[...checkProp] = ... 이 배열타입으로 만들어줌 | 이안의 요소들이 만족되면 
        //(item => {return item.checked == true}); = (item => item.checked);
    })
    // chk.checked = true; // true or false = 체크,언체크 선택가능
    chk.setAttribute('type', 'checkbox');
    td2 = document.createElement('td');
    td2.appendChild(chk);
    tr.appendChild(td2);

    //td생성
    mValues.forEach(val => {
        let td = document.createElement('td'); // id위치 . <td>user1</td>
        let txt = document.createTextNode(val) // 사용자가 입력한 값을 넣어줌 ex)user1 같은거
        td.appendChild(txt); // <td>user1</td>
        tr.appendChild(td); // <tr><td>user1</td></tr> . tr에 자식요소로 td를 넣어주겠슴돠
    });

    //삭제버튼추가
    let td = document.createElement('td'); // <td></td>
    let btn = document.createElement('button'); // <button> 삭제 </button>
    let txt = document.createTextNode('삭제'); //버튼의 속성이 text
    //이벤트일 경우에 기능
    btn.addEventListener('click', function (e) {
        this.parentElement.parentElement.remove(); // 삭제라는 버튼이 포함되어있는 전체를 지움.
        // button의 td의 tr을 remove
        e.stopPropagation(); // 이벤트 전파 차단. | 매개값e propage~
    }, false); // true안해주면 디폴드값 false

    btn.appendChild(txt); // 삭제
    td.appendChild(btn); // <td><button> 삭제 </button></td>
    tr.appendChild(td); // <tr><td><button> 삭제 </button></td></tr>

    return tr;
}