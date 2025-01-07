package com.example.hmw.board.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.hmw.board.model.BoardModelDto;

@Mapper
public interface BoardMapper {
	// 게시글 호출
	List<BoardModelDto> getContents(HashMap<String, Object> map);
}
