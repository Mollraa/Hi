// mysource.js 기능
 document.addEventListener('DOMContentLoaded', function() {
	fetch('../../../board')
	 .then(result => result.json())
    .then(showResultCallBack)
    .catch(error => console.error(error));
    
    function showResultCallBack(result) {
    var Board1 = document.getElementById('container');
    var myEvents = result;
    
    var Board = new Board.Board(Board1, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      initialDate: new Date(),
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,
      
      select: function(arg) {  //한건추가 메소드 , arg = 캘린더내부에서 발생하는 이벤트
        var title = prompt('게시글을 등록하세요!');
        if (title) {  //사용자가 값을 입력하면~!
        	console.log(arg);
        	//1.Ajax 호출.  XMLHttpRequest => open(), send()
        	fetch('../../../board', { //☆☆☆☆☆☆
        		method: 'POST', //☆☆☆☆☆☆
        		headers: {'Content-type': 'application/x-www-form-urlencoded'}, //☆☆☆☆☆☆
        		 // bno, title, content, writer, creation_date
        		body: 'title=' + title + '&start=' + arg.startStr + '&end='+ arg.endStr
        	})
      
      
    }
    
	});