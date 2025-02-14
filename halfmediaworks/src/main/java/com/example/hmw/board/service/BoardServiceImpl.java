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

	// 게시글 목록
	@Override
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
	
	// 게시글 페이징
	@Override
	public int getTotalContents() {
		try {
	        int getBoardCount = boardMapper.getTotalContents();
	        return getBoardCount;
	    } catch (Exception e) {
	        // 로깅 또는 예외 처리
	        throw new RuntimeException("유저 리스트 숫자를 가져오는 중 오류 발생 : ", e);
	    }
	}

	// 게시글 카테고리 코드
	@Override
	public HashMap<String, Object> getBoardCategory(HashMap<String, Object> categoryCodeName) {
		HashMap<String, Object> categoryMap = new HashMap<>();
		try {
			List<BoardModelDto> boardCategory = boardMapper.getBoardCategory(categoryCodeName);
			categoryMap.put("categoryLists", boardCategory);
		} catch (Exception e) {
			System.out.println("카테고리 가져오는 중 오류 발생 : "+e);
		}
		return categoryMap;
	}

	// 게시글 상세보기
	@Override
	public HashMap<String, Object> getContentView(HashMap<String, Object> viewMap) {
		HashMap<String, Object> contentView = new HashMap<>();
		try {
			List<BoardModelDto> comeView = boardMapper.getContentView(viewMap);
			contentView.put("comeView", comeView);
		} catch (Exception e) {
			System.out.println("불러오는 중 에러 발생, 에러 이유 : "+e);
		}
		return contentView;
	}

	// 게시글 조회수 증가
	@Override
	public HashMap<String, Object> addClickContent(HashMap<String, Object> map) {
		HashMap<String, Object> plusCount = new HashMap<String, Object>();
		try {
			boardMapper.addClickContent(map);
		} catch (Exception e) {
			System.out.println("불러오는 중 에러 발생, 에러 이유 : "+e);
		}
		return plusCount;
	}

	// 게시글 등록
	@Override
	public HashMap<String, Object> inputContents(HashMap<String, Object> registMap) {
		HashMap<String, Object> registContent = new HashMap<String, Object>();
		try {
			boardMapper.inputContents(registMap);
		} catch (Exception e) {
			System.out.println("불러오는 중 에러 발생, 에러 이유 : "+e);
		}
		return registContent;
	}


}
