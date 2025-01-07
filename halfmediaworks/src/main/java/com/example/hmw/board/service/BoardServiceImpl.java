package com.example.hmw.board.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hmw.board.mapper.BoardMapper;
import com.example.hmw.board.model.BoardModelDto;

@Service
public class BoardServiceImpl implements BoardService {
	@Autowired
	BoardMapper boardMapper;

	@Override
	// 게시글 호출
	public HashMap<String, Object> getContents(HashMap<String, Object> map) {
		HashMap<String, Object> boardMap = new HashMap<>();
		try {
			List<BoardModelDto> boardLists = boardMapper.getContents(map);
			boardMap.put("getContents", boardLists);
		} catch (Exception e) {
			System.out.println("불러오는 중 에러 발생, 에러 이유 : "+e);
		}
		return boardMap;
	}
}
