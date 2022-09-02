package jdbc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/updateMemberServlet")
public class UpdateMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public UpdateMemberServlet() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		request.setCharacterEncoding("utf-8"); // 한글처리부분
		response.setContentType("text/json;charset=utf-8");
		
		// let param = 'mid='+id+ '&mnm='+nm+ '&mpw='+pw; //서블릿쪽에서 파라미터이름으로 써짐
		String id = request.getParameter("mid");
		String nm = request.getParameter("mnm");
		String pw = request.getParameter("mpw");

		Member mem = new Member();
		mem.setMemberId(id);
		mem.setMemberName(nm);
		mem.setMemberPw(pw);

		MemberManage dao = MemberManage.getInstance();
		// 정상적으로 처리되면 retCode => success or retCode => fail
		if (dao.updateMember(mem)) {
			String json = "{\"retCode\": \"success\", \"memberId\" : \""+id+"\", \"memberPw\" : "+pw+", \"memberName\" : \""+nm+"\"}";
			response.getWriter().print(json); // HttpServletResponse response = 응답정보 반환
		} else {
			String json = "{\"retCode\": \"fail\"}";
			response.getWriter().print(json);
		}
	}
}
