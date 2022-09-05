create table tbl_board (
 bno number primary key,
 title varchar2(100),
 content varchar2(300),
 writer varchar2(30),
 creation_date date
);
create sequence seq_board;

insert into tbl_board (bno, title, content, writer, creation_date) values(seq_board.nextval, '같이 공부해요', '자바스크립트 같이 공부할 사람', 'user1', sysdate);
insert into tbl_board (bno, title, content, writer, creation_date) values(seq_board.nextval, '점심메뉴', '비오는 날은 짬뽕', 'user2', sysdate);
insert into tbl_board (bno, title, content, writer, creation_date) values(seq_board.nextval, '축하축하', 'sqld 시험 패스했어요', 'user3', sysdate);
