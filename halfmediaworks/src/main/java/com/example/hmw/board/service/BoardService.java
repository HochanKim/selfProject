package com.example.hmw.board.service;

import java.util.HashMap;

public interface BoardService {
	// 게시글 호출
	HashMap<String, Object> getContents(HashMap<String, Object> map);
}
