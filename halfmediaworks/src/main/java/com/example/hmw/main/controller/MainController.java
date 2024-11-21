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
	public String userLogin(Model model) throws Exception {
		// 세션 가져오기
		// 'Service'단에서 Object 형태로 담긴 세션 저장 아이디와 상태(직원유무)를 'String'으로 다운 캐스팅하고 가져옴
		String inUserId = (String) session.getAttribute("sessionId");
		String inUserStatus = (String) session.getAttribute("sessionStatus");
		
		model.addAttribute("sessionId", inUserId);
		model.addAttribute("sessionStatus", inUserStatus);
		
		System.out.println("세션 저장 아이디(서버 컨트롤러) : "+inUserId);
		System.out.println("세션 저장 직원유무(서버 컨트롤러) : "+inUserStatus);
		
		return "user/login";
	}
	
	@RequestMapping("/api/session")
    @ResponseBody
    public SessionInfo getSessionInfo(HttpSession session) {
        SessionInfo sessionInfo = new SessionInfo();

        // 세션에서 값을 가져옵니다.
        String sessionId = (String) session.getAttribute("sessionId");
        String sessionStatus = (String) session.getAttribute("sessionStatus");

        // 세션 값이 없을 때 대비한 처리
        sessionInfo.setSessionId(sessionId != null ? sessionId : "");
        sessionInfo.setSessionStatus(sessionStatus != null ? sessionStatus : "N");

        return sessionInfo;
    }

	
	
	// 'view'로 전달
	// 로그인 허용
	@RequestMapping(value = "user/login.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String loginPass(Model model, @RequestParam HashMap<String, Object> map) throws Exception { 
		try {
			HashMap<String, Object> loginInfo = new HashMap<String, Object>();
			loginInfo = mainService.acceptLogin(map);
			return new Gson().toJson(loginInfo);
	    } catch (Exception e) {
	        e.printStackTrace();  // 구체적인 오류 로그 확인
	        return "error";       // 오류 발생 시 반환 값
	    }
	}
	
	// 로그아웃
	@RequestMapping(value = "user/logout.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String logout(Model model, @RequestParam HashMap<String, Object> map) throws Exception { 
		try {
			HashMap<String, Object> logOutReq = new HashMap<String, Object>();
			logOutReq = mainService.userLogout(map);
			return new Gson().toJson(logOutReq);
	    } catch (Exception e) {
	        e.printStackTrace();  // 구체적인 오류 로그 확인
	        return "error";       // 오류 발생 시 반환 값
	    }
	}

}
