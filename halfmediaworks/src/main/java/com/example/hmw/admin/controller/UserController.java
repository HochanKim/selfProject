package com.example.hmw.admin.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.example.hmw.admin.service.UserService;
import com.google.gson.Gson;

@Controller
public class UserController {
	@Autowired
	UserService userService;

	@RequestMapping("admin/adminPage.do")
	public String admin(Model model) throws Exception{
		return "admin/adminMain";
	}
	
	
	@RequestMapping(value = "admin/getUser.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getUserInfo(Model model, @RequestParam HashMap<String, Object> map) throws Exception { 
		try {
			HashMap<String, Object> resultMap = new HashMap<String, Object>();
			resultMap = userService.getUser(map);
			return new Gson().toJson(resultMap);
	    } catch (Exception e) {
	        e.printStackTrace();  // 구체적인 오류 로그 확인
	        return "error";       // 오류 발생 시 반환 값
	    }
	}

}
