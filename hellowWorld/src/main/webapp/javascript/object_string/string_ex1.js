// string_ex1.js

let items = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellendus culpa, iusto rerum esse ab aliquid excepturi neque nam itaque consequuntur, corrupti vitae veniam qui molestiae libero perspiciatis sint quae!';

let bdy = document.querySelector('body'); //body태그 찾아서 bdy변수할당.
let div = document.createElement('div'); //div element 생성.
bdy.append(div); //body태그의 하위(append) 자식요소로 붙임.

let words = items.split(' '); // items.split(' '); = 공백을 기준으로 단어배열 만들기
words.forEach(word => {
    let span = document.createElement('span') // <span></span> , create Element 태그만들어 주는거
    span.innerText = word; //innerText라는 속성에 가지고온 word를 담겠다.

    div.append(span);

});

let inp = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = '찾기';

//btn 이벤트
// btn.onclick = function () 
inp.onchange = function () {
    //버튼을 클릭하면 ..
    let findWord = inp.value;
    let spans = document.querySelectorAll('span'); // all다 불러와서 확인
    // console.log(findWord);
    // console.log(spans);
    spans.forEach(function (span) {
        // <span>Lorem,</span> <span>ipsum,</span> 이런식으로 단어들이 들어있는데 
        // 찾으려는 아이랑 입력한 아이랑 값이 같으면 삭제하겠다.
        // findWord == span.innerText => span.remove();
        if (findWord == span.innerText) {
            span.remove();
        } 
        // else {
        //     throw '다시입력 해주세요.';
        // } 웨.. 적 용 안 되..?
    });
    inp.value = ''; //초기값삭제
    inp.focus(); //삭제후 초점맞춰줌
}

document.querySelector('div').after(inp, btn);