//for_test2.js
const arr = []
//arr[arr.length] = 10;

arr.push(10); //배열의 위치 값에 값을 할당
arr.push(20); //또 다른 값을 주고싶으면 재할당.

let obj = {
    sname: 'Jon',
    age: 21,
    friends: ['Park'],
    //friends에 배열타입 추가.
    addFriend: function (friend) { //addFriend: ƒ (friend) = f는 함수정의 구문이 있다는 의미.
        // 값을 추가하는 메소드.
        this.friends.push(friend);
    },
    friendList: function () {
        //칭구의 이름음 콘솔에 출력하는 메소드 만들기.
        // for(let i=0; i<)
    }
}
obj.addFriend('Kim');
obj.addFriend({
    name: 'Ho',
    phone: '010-1234-1234'
}); //다른 타입으로 넣기 가능.

console.log(obj.friends[2]['phone']);
console.log(obj.friends[0]['name']);