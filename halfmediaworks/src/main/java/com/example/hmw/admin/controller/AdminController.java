package com.example.hmw.admin.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.example.hmw.admin.service.AdminService;
import com.google.gson.Gson;

import jakarta.servlet.http.HttpSession;

@Controller
public class AdminController {
	@Autowired
	AdminService adminService;
	
	@Autowired
	HttpSession session;

	// 관리자 페이지
	@RequestMapping("admin/adminPage.do")
	public String admin(Model model) throws Exception {
		return "admin/adminMain";
	}


	// 관리자 페이지 사용자 데이터
	@RequestMapping(value = "admin/getUser.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getUserList(Model model, @RequestParam HashMap<String, Object> map, @RequestParam("start") String start, @RequestParam("size") String size) throws Exception { 
		try {
			HashMap<String, Object> userMap = new HashMap<String, Object>();
			userMap = adminService.getUserList(map);
			return new Gson().toJson(userMap);
	    } catch (Exception e) {
	        e.printStackTrace();  // 구체적인 오류 로그 확인
	        return "error";       // 오류 발생 시 반환 값
	    }
	}
	
	// 관리자 페이지 의뢰 데이터
	@RequestMapping(value = "admin/getRequest.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getRequest(Model model, @RequestParam HashMap<String, Object> map) throws Exception { 
		try {
			HashMap<String, Object> reqMap = new HashMap<String, Object>();
			reqMap = adminService.getRequests(map);
			return new Gson().toJson(reqMap);
		} catch (Exception e) {
			e.printStackTrace();  // 구체적인 오류 로그 확인
			return "error";       // 오류 발생 시 반환 값
		}
	}
	
	// 유저 페이징
	@RequestMapping(value = "admin/getUserList.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getUserCount(Model model, @RequestParam HashMap<String, Object> map) throws Exception {
		try {
			int userCount = adminService.getTotalUser();
			return new Gson().toJson(userCount);
		} catch (Exception e) {
			System.out.println("페이징 서버에러");
			e.printStackTrace();  // 구체적인 오류 로그 확인
			return "error";       // 오류 발생 시 반환 값
		}
	}
	
	// 요청 페이징
	@RequestMapping(value = "admin/getContactList.dox", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getContCount(Model model, @RequestParam HashMap<String, Object> map) throws Exception {
		try {
			int contCount = adminService.getTotalContact(); 
			return new Gson().toJson(contCount);
		} catch (Exception e) {
			System.out.println("페이징 서버에러");
			e.printStackTrace();  // 구체적인 오류 로그 확인
			return "error";       // 오류 발생 시 반환 값
		}
	}

}
