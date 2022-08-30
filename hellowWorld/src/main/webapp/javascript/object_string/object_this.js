//object_this.js
//P 111

// 1.객체에서 this는 객체를 가리킴.☆
// 2. 함수에서 this는 전역객체(window)를 가리킴.☆
// 3. 이벤트에서 this는 이벤트를 받는 대상을 가리킴.

let obj = {}

//obj객체안에 act메소드
obj.act = function(){ //메소드.
    // console.log(this); // 이 경우에는 = 함수처럼 보여지지만 아님.act가 가지고있는 메소드
    this.value = 'default value'; // obj의 value

    //메소드안에서 쓰는 함수
    function innerAct(){
        this.value = 'innerAct value'; //this .의 value에 ''담음
        console.log('innerAct : ' + this.value); //함수안의 전역객체를 불러오겠다.
        // console.log(this); //act안에서 함수 전역객체
    }
    function innerReact(caller){
        caller.value = 'innerReact value';
        console.log('this.value : ' + this.value); //함수안에서 전역객체 this
        console.log('caller.value : ' + caller.value);
    }
    //innerAct라는 함수를 실행();
    innerAct();
    console.log('obj객체의 this.value: ' + this.value);

    innerReact(this); //obj가 가지는 전역객체 this
        console.log('obj객체의 this.value: ' + this.value); 
        // => caller.value = 'innerReact value'; 여기서 값이 바뀜
        
}
obj.act();
// console.log(this); // 전역객체(window)보여짐

//이벤트.
let btn = document.createElement('button') //<button></button>
btn.innerHTML = '클릭'; // => 버튼이라는 테그안에 클릭을 만들어줌
btn.onclick = function(){
    //이벤트안에서 this
    console.log(this);
}

document.querySelector('body').append(btn); //body안에 .append(btn) (자식?)하위요소 추가
console.log(btn);