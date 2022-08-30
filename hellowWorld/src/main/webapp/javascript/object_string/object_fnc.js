//object_fnc.js

//생성자 함수(Constructor Function)
//함수라서 로컬변수 이용가능
function Student(sno, sname){
    this.sno = sno;
    this.sname = sname;
    this.showInfo = function(){
        return `학번은 ${this.sno}, 이름은 ${this.sname}입니다.`;
    }
}

let s1 = new Student('s11', '백제니'); //new키워드로 불러줘야함
console.log(`학번은 : ${s1.sno}`);
console.log(s1.showInfo());
