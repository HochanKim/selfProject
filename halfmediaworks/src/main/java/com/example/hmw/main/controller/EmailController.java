package com.example.hmw.main.controller;

import com.example.hmw.main.service.EmailService;
import com.google.gson.Gson;


import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class EmailController {

	@Autowired
    EmailService emailService;
    
    // 이메일 전송 페이지
 	@RequestMapping("user/mailCheck.do")
 	public String sendEmail(Model model) throws Exception {
 		return "user/mailCheck";
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
