//object_tab.js

//function을 선언 (대문자로시작)생성자함수를 만들어줌
function Table(param){
    //members변수선언해줌 -> new키워드 t1이 가지고있는 만들어진 인스턴스에 변수를 담겠다.
    this.members = param;
    //addMember 함수 : 기능이 할당되어있음(함수선언식이랑 비슷함 기능을 가지고있음)
    this.addMember = function(member){  //members에 추가하기
        //push배열의 요소에 제일 마지막에 추가해줄때 쓰는거
        this.members.push(member);
    }
    //members에 대한 데이터를 루틴돌면서 테이블테그안에다 그 값들은 넣어줌
    this.showList = function() {  //table 태그를 만들어주는 부분.
        let str = '<table border=1>';
        //forEach 화살표함수 써줌. member=> 부터 }) 까지 
        this.members.forEach(member => {
            str += '<tr>';
            //for in 하면서 한건씩 넣어줌
            for(let prop in member){
                str += `<td>${member[prop]}</td>`;
            }
            str += '</tr>';
        })
        str += '</table>';
        return str;
    }
}
//데이터와 배열값 들을 넣어줌
let members = [{id:'user1', name:'백제니', age:24},
                {id:'user2', name:'노지수', age:21},
                {id:'user3', name:'김리사', age:28},
                {id:'user4', name:'이로제', age:22}]

//table객체에 members, addmember showlist가 있는데 그중에 addmember에 추가?해줌
let t1 = new Table(members);
t1.addMember({id:'user5', name:'카리나',age:20});

let str = t1.showList();
document.write(str);
// = document.write(t1.showList());