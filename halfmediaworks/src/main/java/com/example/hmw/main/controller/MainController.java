package com.example.hmw.main.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.example.hmw.main.service.MainService;
import com.google.gson.Gson;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Controller
public class MainController {
	@Autowired
	MainService mainService;
	
	// 로그인 성공시, 세션을 저장
	@Autowired
	HttpSession session;
	
	// 로그인 페이지 + 세션 불러오기
	@RequestMapping("user/login.do")
	public String admin(Model model, HttpServletRequest request, HttpSession session) throws Exception{
		// 세션 가져오기
		String inUserId = (String) session.getAttribute("sessionId");
		String inUserStatus = (String) session.getAttribute("sessionStatus");
		
		System.out.println("세션 저장 아이디(서버 컨트롤러) : "+inUserId);
		System.out.println("세션 저장 직원유무(서버 컨트롤러) : "+inUserStatus);
		
		return "user/login";
	}
	
	// 로그아웃 


	
	
	// 'view'로 전달
	// 로그인 허용
	@RequestMapping(value = "user/login.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String loginPass(Model model, @RequestParam HashMap<String, Object> map) throws Exception { 
		try {
			HashMap<String, Object> resultMap = new HashMap<String, Object>();
			resultMap = mainService.acceptLogin(map);
			return new Gson().toJson(resultMap);
	    } catch (Exception e) {
	        e.printStackTrace();  // 구체적인 오류 로그 확인
	        return "error";       // 오류 발생 시 반환 값
	    }
	}

}
