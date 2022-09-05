package jdbc;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

@WebServlet("/myCalendar")
public class MyCalendarServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public MyCalendarServlet() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/json;charset=utf-8");

		MemberManage dao = MemberManage.getInstance();
		List<FullCalendar> list = dao.scheduleList();
		// [{},{},{},{}]

		// FullCalendar여기서 필드값을 start, end맞춰주거나, 아래처럼 해주기
		JsonArray ary = new JsonArray();
		for (FullCalendar cal : list) {
			JsonObject obj = new JsonObject();
			obj.addProperty("title", cal.getTitle());
			obj.addProperty("start", cal.getStartDate());
			obj.addProperty("end", cal.getEndDate());
			ary.add(obj);
		}

		Gson gson = new GsonBuilder().create(); // instance생성
		String json = gson.toJson(ary); // toJson메소드(cal)
		response.getWriter().print(json); // 출력스트림으로 출력

//		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8"); // 요청방식중에 한글이 있으면
		 MemberManage dao = MemberManage.getInstance();

//		String job = request.getParameter("job"); // doPost에 입력 삭제 겹처서 job~어쩌구로 나눠줌

		// 한건입력시
//		if (job.equals("insert")) {
//			FullCalendar full = new FullCalendar();
//			full.setTitle(request.getParameter("title"));
//			full.setStartDate(request.getParameter("start"));
//			full.setEndDate(request.getParameter("end"));
//
//			MemberManage dao = MemberManage.getInstance();
//			if (dao.insertCalendar(full)) {
//				response.getWriter().print("success");
//			} else {
//				response.getWriter().print("fail");
//			}
//		} 
		
		  String job = request.getParameter("job");
	      if (job.equals("insert")) {

	         FullCalendar full = new FullCalendar();
	         full.setTitle(request.getParameter("title"));
	         full.setStartDate(request.getParameter("start"));
	         full.setEndDate(request.getParameter("end"));

	         if (dao.insertCalendar(full)) {
	            response.getWriter().print("success");

	         } else {
	            response.getWriter().print("fail");
	         }
	      }
		// 한건삭제시
		else {
			FullCalendar full = new FullCalendar();
			full.setTitle(request.getParameter("title"));
			full.setStartDate(request.getParameter("start"));
			full.setEndDate(request.getParameter("end"));

			if (dao.delCalendar(full)) {
				response.getWriter().print("success");

			} else {
				response.getWriter().print("fail");
			}

		}
//		else if (job.equals("delete")) {
//			String title = request.getParameter("title");
//			
//			MemberManage dao = MemberManage.getInstance();
//			if (dao.deleteCalendar(title)) {
//				response.getWriter().print("success");
//			} else {
//				response.getWriter().print("fail");
//			}
//		}

	}
}
