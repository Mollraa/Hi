package jdbc;

//import com.bank.common.DAO;

public class MemberManage extends DAO{
	
	//싱글톤
	private static MemberManage mm = new MemberManage();
	
	private MemberManage() {
		
	}
	
	public static MemberManage getInstance() {
		return mm;
	}
	
	//로그인 메소드
	public Member loginInfo(String id) {
		Member member = null;
		try {
			conn();
			//id -> PK
			// 1 row
			// id / pw / ..../ 
			String sql = "select * from bankmember where member_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				member = new Member();
				//MemberManage -> 로그인 메소드
				//setAccountId -> setMemberId
				member.setMemberId(rs.getString("member_id"));
				member.setMemberPw(rs.getString("member_pw"));
				member.setMemberName(rs.getString("member_name"));
				member.setRole(rs.getString("role"));
			}
			
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return member;
	}
	
	//고객 등록 메소드
	public int registCustomer(Member member) {
		int result = 0;
		try {
			conn();
			String sql = "insert into bankMember (member_id, member_pw, "
					+ "member_name, role) values (?,?,?,?)";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member.getMemberId());
			pstmt.setString(2, member.getMemberPw());
			pstmt.setString(3, member.getMemberName());
			pstmt.setString(4, member.getRole());
			
			result = pstmt.executeUpdate();
			
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return result;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
