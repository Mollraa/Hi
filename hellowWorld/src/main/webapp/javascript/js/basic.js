//basic.js

//student.id = .~ 해주면 값 할당도 가능
let student = {} //object
student.id = 'st1';
student.name = '백진희';
student['score'] = 90;
//object = prop in
for(let prop in student){
    console.log(student[prop]); 
}
// = console.log(student);


//배열 = let of
let numbers = [];
numbers[0] = 90;
numbers[1] = 82;
numbers[2] = 54;
numbers[3] = 95;
//요소들 각각 출력
for(let num of numbers){
    console.log(num);
}


//학생들을 담기위한 배열 선언
let students = [];
let stu1 = {
    sno: '1001',
    sName: '조승희',
    score: 100
}
let stu2 = {
    sno: '1002',
    sName: '박경도',
    score: 89
}
let stu3 = {
    sno: '1003',
    sName: '경민수',
    score: 78
}
//배열의변수에 값을 추가해줌.
students[0] = stu1;
students[1] = stu2;
students[2] = stu3;

//학생의 이름만 출력
let str = '<ul>';
for(let student of students){
    console.log('학번: ' + student.sno + '학생이름: ' + student.sName + ', 점수: ' + student.score);
    str += '<li>' + '학번:<b> '+student.sno +'</b>, 학생이름: '+ student.sName +', 점수: '+student.score +'</li>';
}
str += '</ul>';
document.write(str); //str변수에 담아서 출력
