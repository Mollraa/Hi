//object_clone.js

//assign
let originObj = {
    sname: 'Park',
    age: 22,
    changeAge: function () {
        this.age++;
    }
}

let cloneObj = originObj // originObj 참조값을 cloneObj.
cloneObj.sname = 'Choi';
console.log(originObj.sname);
originObj.changeAge();
console.log(cloneObj.age); //orig바꿧는데 clane도바뀜 => 둘이 같은 객체를 보고있다는의미

//복사.
let obj2 = new Object();
let copyObj = Object.assign({}, originObj);
// (새로만들객체, 복사할객체) 넣어줌
// assign({} <= 초기값없으면 복사, 있으면 덮어쓰기됨 )
copyObj.sname = 'Back'; //위에서 값('choi')을 할당할때랑 다르게 안먹힘. 초기값으로 assign해줬기 때문
console.log(originObj.sname);

// assign({} <= 초기값없으면 복사, 있으면 덮어쓰기됨)의 예시
let newObj = {
    sname: 'Kim',
    phone: '010-9999-7777',
    age: 33
}
let dupObj = Object.assign(newObj, originObj);
console.log(dupObj); //sname, age는 있어서 적용X, phone새로운 거라서 적용O


//객체의 속성을 지정. ---------------------
let s1 = {
    sname: 'Lee'
}
s1.age = 32; //지울때 : delete s1.age
s1['phone'] = '010-3333-4444';
s1.friends = [{
        name: '김영식',
        phone: 111 - 2222 - 3333,
        age: 18
    },
    {
        name: '홍명보',
        phone: 100 - 2000 - 0003,
        hobbies: ['독서', '수영'],
        age: 18
    }
];
// console.log(s1);
console.log(s1.friends[0].name); //s1이 가지고있는 friends중에 이름불러오기;
console.log(s1.friends[1].hobbies[0]); //명보의 첫번째 취미 불러오기;

//클래스로 만들어보기 ----------
class Student {
    constructor(sname, age) {
        this.sname = sname;
        this.age = age;
    }
}
let s2 = new Student('홍지니', 21);
//P 136_ 13.속성기술자로 객체 속성을 정의하기.
// Object가 가지는 .defineProperties( s2, 속성의이름정의 );메소드사용
Object.defineProperty(s2, 'score', {
    set: function(score){
        if(score > 100){
            throw '잘못된 값을 입력했습니다. (100보다 적은 값을 입력하세요)';
        } else if (score < 0) {
            throw '잘못된 값을 입력했습니다. (0보다 큰 값을 입력하세요)';
        } else {
            this._score = score; //._는 외부에서 숨겨진 속성값
        }
    },
    get: function(){
        return this._score;
    }
});
s2.score = 20;
console.log('점수는 : ' + s2.score);

//새로운 선언방법 , prototype 추가적인 속성을 담고싶을 떄
let s3 = new Student('킴카다시안', 25);

Student.prototype.showInfo = function(){
    return `이름은 ${this.sname} 이고 아니는 ${this.age}입니다.`;
}

console.log(s2.showInfo());
console.log(s3.showInfo());
