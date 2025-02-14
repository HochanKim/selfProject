package com.example.hmw.board.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.hmw.board.model.BoardModelDto;

@Mapper
public interface BoardMapper {
	// 게시글 호출
	List<BoardModelDto> getContents(HashMap<String, Object> map);

	// 게시글 개수
	int getTotalContents();
	
	// 게시글 카테고리 코드
	List<BoardModelDto> getBoardCategory(HashMap<String, Object> categoryCodeName);
	
	// 게시글 상세보기
	List<BoardModelDto> getContentView(HashMap<String, Object> viewMap);
	
	// 게시글 조회수 증가
	void addClickContent(HashMap<String, Object> map);
	
	// 게시글 등록
	void inputContents(HashMap<String, Object> registMap);
	
}
