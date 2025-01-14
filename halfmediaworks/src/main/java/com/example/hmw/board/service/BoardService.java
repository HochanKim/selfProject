package com.example.hmw.board.service;

import java.util.HashMap;
import java.util.List;

import com.example.hmw.board.model.BoardModelDto;

public interface BoardService {
	// 게시글 호출
	HashMap<String, Object> getContents(HashMap<String, Object> map);

	// 게시글 개수
	int getTotalBoard();
	
	// 게시글 카테고리 코드
	HashMap<String, Object> getBoardCategory(HashMap<String, Object> categoryCodeName);
	
	// 게시글 상세보기
	HashMap<String, Object> getContentView(HashMap<String, Object> viewMap);
	
	// 게시글 조회수 증가
	HashMap<String, Object> addClickContent(HashMap<String, Object> map);
	
	// 게시글 등록
	HashMap<String, Object> inputContents(HashMap<String, Object> registMap);
}
