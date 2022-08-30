// string_charat.js

// chartAt(index) -> 문자열 반환

console.log('World'.charCodeAt(3));

function checkGender(no) {
    //남자 / 여자 구문 콘솔출력.
    let gender = no.replace('-','').charAt(6);
    if (gender == '1' || gender == '3') {
        console.log('남자입니다.')
    } else if (gender == '2' || gender == '4') {
        console.log('여자입니다.')
    } else {
        console.log('잘못된 번호입니다.')
    }
}
checkGender('970120-2345678');
checkGender('950120-1345678');
checkGender('0301203345678');
checkGender('0301204345678');
checkGender('0301205345678');
