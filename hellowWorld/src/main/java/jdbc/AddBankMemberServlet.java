package jdbc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/AddBankMemberServlet")
public class AddBankMemberServlet extends HttpServlet {
   private static final long serialVersionUID = 1L;
       
    
    public AddBankMemberServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

   
   protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      // a 태그의 파라미터 정보 읽어들이도록. 
      //?id=user1&pw=1234&name=김사용&role=0
      request.setCharacterEncoding("utf-8");
      
      String id = request.getParameter("id");
      String pw = request.getParameter("pw");
      String nm=request.getParameter("name");
      String rl = request.getParameter("role");
      
      Member member = new Member();
      member.setMemberId(id);
      member.setMemberPw(pw);
      member.setMemberName(nm);
      member.setRole(rl);
      
      MemberManage.getInstance().registCustomer(member);
      
      response.sendRedirect("index.html");
      
   }

   
   protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      // TODO Auto-generated method stub
      doGet(request, response);
   }

}