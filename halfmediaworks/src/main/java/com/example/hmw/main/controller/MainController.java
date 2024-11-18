package com.example.hmw.main.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.example.hmw.main.service.MainService;
import com.google.gson.Gson;

import jakarta.servlet.http.HttpSession;

@Controller
public class MainController {
	@Autowired
	MainService mainService;
	
	// 로그인 성공시, 세션을 저장
	@Autowired
	HttpSession session;
	
	// 세션을 전달해주는 API 설정
    @GetMapping("/api/session")
    public Map<String, Object> getSession(HttpSession session) {
        String sessionId = (String) session.getAttribute("sessionId");
        String sessionStatus = (String) session.getAttribute("sessionStatus");

        Map<String, Object> sessionData = new HashMap<>();
        sessionData.put("sessionId", sessionId);
        sessionData.put("sessionStatus", sessionStatus);

        return sessionData; // JSON 형태로 반환
    }
	

	// 로그인 페이지
	@RequestMapping("user/login.do")
	public String admin(Model model) throws Exception{
		model.addAttribute("userId", session.getAttribute("sessionId"));
		model.addAttribute("status", session.getAttribute("sessionStatus"));
		return "user/login";
	}
	
	
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
