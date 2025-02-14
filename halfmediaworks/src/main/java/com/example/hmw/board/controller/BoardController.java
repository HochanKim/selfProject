package com.example.hmw.board.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.example.hmw.board.service.BoardService;
import com.google.gson.Gson;



@Controller
public class BoardController {
	@Autowired
	BoardService boardService;
	

	// 게시판
	@RequestMapping("user/board.do")
	public String communication(Model model) throws Exception {
		return "user/board";
	}
	
	// 게시글 작성
	@RequestMapping("user/postPage.do")
	public String postPage(Model model) throws Exception {	
		return "user/postPage";
	}
	
	// 게시글 상세보기
	@RequestMapping("user/contentView.do")
	public String contentView(Model model, @RequestParam String num) throws Exception {
		model.addAttribute("contentId", num);	// 게시판에서 클릭한 특정 게시글의 번호(contentId)
		return "user/contentView";
	}
	

	// 게시판 등록된 글 불러오기
	@RequestMapping(value = "user/getBoard.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getBoardConts(Model model, @RequestParam HashMap<String, Object> map, @RequestParam("start") String start, @RequestParam("size") String size) throws Exception { 
		// 'map'에 담긴 파라미터들을 정수로 변환 (MySQL 구문)
		map.put("start", Integer.parseInt(start));
		map.put("size", Integer.parseInt(size));
		try {
			HashMap<String, Object> boardLists = new HashMap<String, Object>();
			boardLists = boardService.getContents(map);
			return new Gson().toJson(boardLists);
	    } catch (Exception e) {
	        e.printStackTrace();  // 구체적인 오류 로그 확인
	        return "error";       // 오류 발생 시 반환 값
	    }
	}
	
	// 게시판 페이징 
	@RequestMapping(value = "user/getBoardPageList.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getUserList(Model model) throws Exception { 
		try {
			int listCounts = boardService.getTotalContents();
			return new Gson().toJson(listCounts);
	    } catch (Exception e) {
	    	System.out.println("페이징 서버 에러");
	        e.printStackTrace();  // 구체적인 오류 로그 확인
	        return "error";       // 오류 발생 시 반환 값
	    }
	}
	
	// 게시판 카테고리 코드
	@RequestMapping(value = "user/getBoardCategory.dox", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getBoardCategory(Model model, @RequestParam HashMap<String, Object> categoryCodeName) throws Exception { 
		try {
			HashMap<String, Object> categoryCode = boardService.getBoardCategory(categoryCodeName);
			return new Gson().toJson(categoryCode);
	    } catch (Exception e) {
	        e.printStackTrace();  // 구체적인 오류 로그 확인
	        return "error";       // 오류 발생 시 반환 값
	    }
	}
	
	// 게시글 상세보기
	@RequestMapping(value = "user/contentView.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getContentView(Model model, @RequestParam HashMap<String, Object> viewMap) throws Exception { 
		try {
			HashMap<String, Object> contentView = boardService.getContentView(viewMap);
			return new Gson().toJson(contentView);
	    } catch (Exception e) {
	        e.printStackTrace();  // 구체적인 오류 로그 확인
	        return "error";       // 오류 발생 시 반환 값
	    }
	}
	
	// 게시글 조회수 증가
	@RequestMapping(value = "user/plusCount.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String plusCount(Model model, @RequestParam HashMap<String, Object> map) throws Exception { 
		try {
			HashMap<String, Object> plusCount = new HashMap<String, Object>();
			plusCount =  boardService.addClickContent(map);
			return new Gson().toJson(plusCount);
	    } catch (Exception e) {
	        e.printStackTrace();  // 구체적인 오류 로그 확인
	        return "error";       // 오류 발생 시 반환 값
	    }
	}
	
	// 게시글 작성 및 등록
	@RequestMapping(value = "user/postPage.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String inputContents(Model model, @RequestParam HashMap<String, Object> registMap) throws Exception {
		try {
			HashMap<String, Object> insertCont = new HashMap<String, Object>();
			insertCont = boardService.inputContents(registMap);
			return new Gson().toJson(insertCont);
		} catch (Exception e) {
			e.printStackTrace();  // 구체적인 오류 로그 확인
	        return "error";       // 오류 발생 시 반환 값
		}
	}
	
	// 코드별 게시글 호출
//	@RequestMapping(value = "user/getClickCode.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
//	@ResponseBody
//	public String clickCode(Model model, @RequestParam HashMap<String, Object> map, @RequestParam("start") String start, @RequestParam("size") String size) throws Exception { 
//		// 리스트별 페이징 매개변수
//		map.put("start", Integer.parseInt(start));
//		map.put("size", Integer.parseInt(size));
//		try {
//			HashMap<String, Object> clickBoardLists = new HashMap<String, Object>();
//			clickBoardLists = boardService.clickCode(map);
//			return new Gson().toJson(clickBoardLists);
//	    } catch (Exception e) {
//	        e.printStackTrace();  // 구체적인 오류 로그 확인
//	        return "error";       // 오류 발생 시 반환 값
//	    }
//	}
	
}
