package youCanDoIt;

import java.sql.Date;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BoardDAO extends DAO {
	private static BoardDAO b = new BoardDAO();

	private BoardDAO() {

	}

	public static BoardDAO getInstance() {
		return b;
	}

	public List<Board> getBoardList() {
		String sql = "select * from tbl_board";
		List<Board> list = new ArrayList<>();
		conn();
		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				Board bor = new Board();
				bor.setBno(rs.getInt("bno"));
				bor.setTitle(rs.getString("title"));
				bor.setContent(rs.getString("content"));
				bor.setWriter(rs.getString("writer"));
				bor.setCreationDate(rs.getString("creation_date"));
				list.add(bor);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}

	public boolean deleteBoard(Board board) {
		conn();
		String sql = "delete from tbl_board where bno = ?, title = ?, content = ?, writer = ?,creation_date = ?";
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, board.getBno());
			pstmt.setString(2, board.getTitle());
			pstmt.setString(3, board.getContent());
			pstmt.setString(4, board.getWriter());
			pstmt.setString(5, board.getCreationDate());
			
			int r = pstmt.executeUpdate();
			if (r > 0) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return false;
	}

	public boolean insertBoard(Board board) {
		String sql = "insert into tbl_board (bno, title, content, writer, creation_date) values(seq_board.nextval, ?, ?, ?, sysdate)";
		conn();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, board.getBno());
			pstmt.setString(2, board.getTitle());
			pstmt.setString(3, board.getContent());
			pstmt.setString(4, board.getWriter());
			pstmt.setString(5, board.getCreationDate());
			
			int r = pstmt.executeUpdate();
			if (r > 0) {
				return true;
			} 
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return false;
	}
}
