package jdbc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/addMemberServlet")
public class AddMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public AddMemberServlet() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	// 실행되는 곳
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 요청정보 받아와서 사용자가입력한 값 -> DB에 입력하면 응답정보 받아서 입력
		// 요청정보 param. / HttpServletRequest request = 요청정보가 담긴리퀘스트
		request.setCharacterEncoding("utf-8"); // 한글처리부분
		response.setContentType("text/json;charset=utf-8");

		String id = request.getParameter("mid");
		String pw = request.getParameter("mpw");
		String nm = request.getParameter("mnm");

		// 규칙에 맞게 맴버클래스에 담아준다.
		Member member = new Member();
		member.setMemberId(id);
		member.setMemberPw(pw);
		member.setMemberName(nm);
//		System.out.println(member);

		MemberManage dao = MemberManage.getInstance();
		int addCnt = dao.registCustomer(member); // 정상적으로 한건이 리턴되면

		// 처리결과를 ajax 호출한 페이지로 반환.
		if (addCnt == 1) {
			String json = "{\"retCode\": \"success\", \"memberId\" : \""+id+"\", \"memberPw\" : \""+pw+"\", \"memberName\" : \""+nm+"\"}";
			response.getWriter().print(json); // HttpServletResponse response = 응답정보 반환
		} else {
			String json = "{\"retCode\": \"fail\"}";
			response.getWriter().print(json);
		}

	}

}
