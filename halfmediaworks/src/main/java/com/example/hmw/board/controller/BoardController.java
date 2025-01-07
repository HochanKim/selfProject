package com.example.hmw.board.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.example.hmw.board.service.BoardService;
import com.google.gson.Gson;

import jakarta.servlet.http.HttpSession;

@Controller
public class BoardController {
	@Autowired
	BoardService boardService;
	
	// 로그인 성공시, 세션을 저장
	@Autowired
	HttpSession session;

	// 게시판
	@RequestMapping("user/board.do")
	public String communication(Model model) throws Exception {
		return "user/board";
	}

	@RequestMapping(value = "user/getBoard.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getBoardConts(Model model, @RequestParam HashMap<String, Object> map) throws Exception { 
		try {
			HashMap<String, Object> boardLists = new HashMap<String, Object>();
			boardLists = boardService.getContents(map);
			return new Gson().toJson(boardLists);
	    } catch (Exception e) {
	        e.printStackTrace();  // 구체적인 오류 로그 확인
	        return "error";       // 오류 발생 시 반환 값
	    }
	}
	
}
