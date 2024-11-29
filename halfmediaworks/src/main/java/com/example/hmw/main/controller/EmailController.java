package com.example.hmw.main.controller;

import com.example.hmw.main.model.EmailModelDto;
import com.example.hmw.main.service.EmailService;
import com.google.gson.Gson;


import java.util.HashMap;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class EmailController {

	@Autowired
    EmailService emailService;
	
	@Autowired
    RegisterMailService registerMail; // 주입된 서비스 객체
    
    // 이메일 전송 페이지
 	@RequestMapping("user/mailCheck.do")
 	public String sendEmail(Model model) throws Exception {
 		return "user/mailCheck";
 	}
 	
 	// 이메일 인증
 	@PostMapping("user/mailConfirm.dox")
 	@ResponseBody
 	String mailConfirm(@RequestParam("email") String email) throws Exception {

		String code = registerMail.sendSimpleMessage(email);
	 	System.out.println("인증코드 : " + code);
	 	return code;
 	}
 	
 	
 	// 'view'로 전달
 	// 로그인 허용
 	@RequestMapping(value = "user/selectEmailAddr.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
 	@ResponseBody
 	public String sendEmail(Model model, @RequestParam HashMap<String, Object> map) throws Exception { 
 		try {
 			HashMap<String, Object> sendEmail = new HashMap<String, Object>();
 			sendEmail = emailService.sendEmail(map);
 			return new Gson().toJson(sendEmail);
 	    } catch (Exception e) {
 	        e.printStackTrace();  // 구체적인 오류 로그 확인
 	        return "error";       // 오류 발생 시 반환 값
 	    }
 	}
 	

}
