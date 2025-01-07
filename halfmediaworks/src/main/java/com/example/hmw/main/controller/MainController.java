package com.example.hmw.main.controller;

import java.util.HashMap;

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
	
	// 메인 페이지
	@RequestMapping("hmwMainPage.do")
	public String homePage(Model model) throws Exception {
		return "main/index";
	}
	
	// 회원정보
	@RequestMapping("user/userInfo.do")
	public String infomation(Model model) throws Exception {
		return "user/userInfo";
	}
	
	// aboutUs
	@RequestMapping("main/aboutUs.do")
	public String aboutUs(Model model) throws Exception {
		return "main/aboutUs";
	}
	
	
	
	// 로그인 페이지 + 세션 불러오기
	@RequestMapping("user/login.do")
	public String userLogin(Model model) throws Exception {
		// 세션 가져오기
		// 'Service'단에서 Object 형태로 담긴 세션 저장 아이디와 상태(직원유무)를 'String'으로 다운 캐스팅하고 가져옴
		String inUserId = (String) session.getAttribute("sessionId");
		String inUserStatus = (String) session.getAttribute("sessionStatus");
		
		// 가져온 세션에 밸류명 지정해서 키값으로 저장
		model.addAttribute("sessionId", inUserId);
		model.addAttribute("sessionStatus", inUserStatus);
		
		return "user/login";
	}
	
	// 세션 처리
	@RequestMapping("/api/session")
    @ResponseBody
    public SessionInfo getSessionInfo(HttpSession session) {
		// 클래스(SessionInfo)를 통해 객체 'sessionInfo' 생성
        SessionInfo sessionInfo = new SessionInfo();

        // 세션에서 값을 가져오기
        String sessionId = (String) session.getAttribute("sessionId");
        String sessionStatus = (String) session.getAttribute("sessionStatus");

        // 세션 값이 없을 때 대비한 처리
        sessionInfo.setSessionId(sessionId != null ? sessionId : "");
        sessionInfo.setSessionStatus(sessionStatus != null ? sessionStatus : "N");

        return sessionInfo;
    }
	
	// 회원가입
	@RequestMapping("user/joinPage.do")
	public String userJoin(Model model) throws Exception {
		return "user/joinPage";
	}
	
	// 아이디-패스워드 찾기 페이지
	@RequestMapping("user/resetData.do")
	public String crossRoads(Model model) throws Exception {
		return "user/resetData";
	}
	
	// 아이디 찾기
	@RequestMapping("user/searchId.do")
	public String searchId(Model model) throws Exception {
		return "user/searchId";
	}
	
	// 비밀번호 재설정 (앞)
	@RequestMapping("user/resetPwd.do")
	public String resetPwd(Model model) throws Exception {
		return "user/resetPwd";
	}
	
	// 비밀번호 재설정 (최종)
	@RequestMapping("user/newPassword.do")
	public String updatePwd(Model model) throws Exception {
		return "user/newPassword";
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
	@RequestMapping(value = "/logout.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String logout(Model model, @RequestParam HashMap<String, Object> map) throws Exception { 
		try {
			HashMap<String, Object> logOutReq = new HashMap<String, Object>();
			logOutReq = mainService.userLogout(map);
			return new Gson().toJson(logOutReq);
	    } catch (Exception e) {
	        e.printStackTrace();
	        return "error";     
	    }
	}
	
	// 회원가입
	@RequestMapping(value = "user/newJoin.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String newJoin(Model model, @RequestParam HashMap<String, Object> map) throws Exception { 
		try {
			HashMap<String, Object> inputNew = new HashMap<String, Object>();
			inputNew = mainService.intoNewMember(map);
			return new Gson().toJson(inputNew);
		} catch (Exception e) {
			e.printStackTrace();
			return "error";     
		}
	}
	
	// 아이디 중복체크
	@RequestMapping(value = "user/idExist.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String idExistCheck(Model model, @RequestParam HashMap<String, Object> map) throws Exception { 
		try {
			HashMap<String, Object> idExistCheck = new HashMap<String, Object>();
			idExistCheck = mainService.idExistCheck(map);
			return new Gson().toJson(idExistCheck);
		} catch (Exception e) {
			e.printStackTrace(); 
			return "error";      
		}
	}
	
	// 닉네임 중복체크
	@RequestMapping(value = "user/nickExist.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String nickExistCheck(Model model, @RequestParam HashMap<String, Object> map) throws Exception { 
		try {			
			HashMap<String, Object> nickExistCheck = new HashMap<String, Object>();
			nickExistCheck = mainService.nickExistCheck(map);
			return new Gson().toJson(nickExistCheck);
		} catch (Exception e) {
			e.printStackTrace(); 
			return "error";      
		}
	}
	
	// 아이디 찾기 (닉네임)
	@RequestMapping(value = "user/sendNick.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String recallNickId(Model model, @RequestParam HashMap<String, Object> map) throws Exception { 
		try {			
			HashMap<String, Object> sendNick = new HashMap<String, Object>();
			sendNick = mainService.sendNick(map);
			return new Gson().toJson(sendNick);
		} catch (Exception e) {
			e.printStackTrace(); 
			return "error";      
		}
	}
	
	// 아이디 찾기 (이메일)
	@RequestMapping(value = "user/sendEmail.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String recallEmailId(Model model, @RequestParam HashMap<String, Object> map) throws Exception { 
		try {			
			HashMap<String, Object> sendEmail = new HashMap<String, Object>();
			sendEmail = mainService.sendEmail(map);
			return new Gson().toJson(sendEmail);
		} catch (Exception e) {
			e.printStackTrace();  
			return "error";       
		}
	}
	
	// 비밀번호 재설정
	@RequestMapping(value = "user/updatePassword.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String updatePwd(Model model, @RequestParam HashMap<String, Object> map) throws Exception { 
		try {
			HashMap<String, Object> updatePwd = new HashMap<String, Object>();
			updatePwd = mainService.resetPwd(map);
			return new Gson().toJson(updatePwd);
		} catch (Exception e) {
			e.printStackTrace();  
			return "error";       
		}
	}
	
	// 회원정보
	@RequestMapping(value = "user/getUserInfo.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getUserInfo(Model model, @RequestParam HashMap<String, Object> map) throws Exception {
		try {
			HashMap<String, Object> getInfo = new HashMap<String, Object>();
			getInfo = mainService.getUserInfo(map);
			return new Gson().toJson(getInfo);
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
	
	// 회원탈퇴
	@RequestMapping(value = "user/delete.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String delete(Model model, @RequestParam HashMap<String, Object> map) throws Exception { 
		try {
			HashMap<String, Object> delUser = new HashMap<String, Object>();
			delUser = mainService.exitUser(map);
			return new Gson().toJson(delUser);
		} catch (Exception e) {
			e.printStackTrace();  
			return "error";       
		}
	}
}
