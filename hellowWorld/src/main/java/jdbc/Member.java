package jdbc;

public class Member {
	/*MEMBER_ID   NOT NULL VARCHAR2(20) 
	MEMBER_PW   NOT NULL VARCHAR2(20) 
	MEMBER_NAME NOT NULL VARCHAR2(20) 
	ACCOUNT_ID           VARCHAR2(20) 
	ROLE                 CHAR(1)
	*/
	
	private String memberId; //회원ID
	private String memberPw; //회원 비밀번호
	private String memberName; //회원 이름
	private String accountId; //계좌 번호
	private String role;		  //권한, 1 : 은행원, 0 : 사용자

	public String getMemberId() {
		return memberId;
	}
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}
	public String getMemberPw() {
		return memberPw;
	}
	public void setMemberPw(String memberPw) {
		this.memberPw = memberPw;
	}
	public String getMemberName() {
		return memberName;
	}
	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
	public String getAccountId() {
		return accountId;
	}
	public void setAccountId(String accountId) {
		this.accountId = accountId;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	
}
