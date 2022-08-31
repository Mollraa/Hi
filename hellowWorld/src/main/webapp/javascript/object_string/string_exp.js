// String_exp.js

let now = new Date(); //
console.log(now.toDateString()); // Tue Aug 30 2022
console.log(now.toLocaleDateString()); // 2022. 8. 30.
console.log(now.toTimeString()); // 17:28:44 GMT+0900 (한국 표준시)
console.log(now.toLocaleTimeString()); // 오후 5:28:44

//각가의 값만 가져오기 , 월은 0부터 시작해서 +1해줘야 지금 날짜 보임
console.log(`${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`);
// = 2022년 8월 30일 17시 33분 58초
console.log(`${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`);
// = 09월 01일 07시 01분 01초 이런식으로 만들어보깅
console.log(`${now.getSeconds()<10?'0' + now.getSeconds():now.getSeconds()}초`);
// = 02초 (삼항식)
console.log(`0${now.getSeconds()}`.slice(-2));
// = 02초 (slice)

console.log('abc'.toUpperCase()); // 대문자로 변환
console.log('ABC'.toLowerCase()); // 소문자로 변환


//숙제
//hhmiss = 시분초를 09:08:07 , 12:34:07
//1.
Date.prototype.hhmiss = () => {
    if (now.getHours() >= 12) {
        // let s = now.getHours() - 12

        return `${(now.getHours()-12)<10? '0'+ (now.getHours() - 12):(now.getHours() - 12)}시` +
            `${now.getMinutes()<10? '0'+ now.getMinutes():now.getMinutes()}분` +
            `${now.getSeconds()<10? '0'+ now.getSeconds():now.getSeconds()}초`;
    }
    return `${now.getHours()<10? '0'+ now.getHours():now.getHours()}시` +
        `${now.getMinutes()<10? '0'+ now.getMinutes():now.getMinutes()}분` +
        `${now.getSeconds()<10? '0'+ now.getSeconds():now.getSeconds()}초`;
}
console.log(now.hhmiss());
//2.
Date.prototype.hhmiss = function () {
    // 09:08:07
    console.log(('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2) + ':' + ('0' + now.getSeconds()).slice(-2));
}
now.hhmiss();