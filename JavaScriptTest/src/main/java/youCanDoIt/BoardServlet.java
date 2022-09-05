package youCanDoIt;

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

@WebServlet("/board")
public class BoardServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public BoardServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// 조회의 기능 구현.
		response.setContentType("text/json;charset=utf-8");
		BoardDAO dao = BoardDAO.getInstance();
		List<Board> list = dao.getBoardList();
		
		JsonArray ary = new JsonArray();
		for(Board bor : list) {
			JsonObject obj = new JsonObject();
			obj.addProperty("bno", bor.getBno());
			obj.addProperty("title", bor.getTitle());
			obj.addProperty("content", bor.getContent());
			obj.addProperty("writer", bor.getWriter());
			obj.addProperty("creation_date", bor.getCreationDate());
			ary.add(obj);
		}
		Gson gson = new GsonBuilder().create(); // instance생성
		String json = gson.toJson(ary); // toJson메소드(cal)
		response.getWriter().print(json); // 출력스트림으로 출력
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		response.setCharacterEncoding("utf-8");

		// 추가, 삭제의 기능을 구현.

	}

}
