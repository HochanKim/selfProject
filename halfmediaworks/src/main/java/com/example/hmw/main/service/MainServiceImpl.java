package com.example.hmw.main.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.hmw.main.mapper.MainMapper;
import com.example.hmw.main.model.MainModel;

import jakarta.servlet.http.HttpSession;

@Service
public class MainServiceImpl implements MainService{

	@Autowired
	MainMapper mainMapper;
	
	// 로그인 성공시, 세션을 저장
	@Autowired
	HttpSession session;
	
	// 로그인 허용
	@Override
	public HashMap<String, Object> acceptLogin(HashMap<String, Object> map) {
		HashMap<String, Object> resultMap = new HashMap<>();
		try {
			// 아이디-비밀번호 일치여부 (불일치시 데이터 null)
			MainModel idPwd = mainMapper.userLogin(map);
			System.out.println("로그인 : "+idPwd);
			if(idPwd == null) {	
				// 아이디나 비밀번호가 맞지 않다
				resultMap.put("code", 400);
				int idCheck = mainMapper.inputId(map); 
				if(idCheck == 0) {	
					// 맞지 않은 아이디 or 존재하지 않은 아이디
					resultMap.put("message", "아이디가 다르거나 존재하지 않습니다.");
				} else {
					// 아이디는 있지만 비밀번호가 일치하지 않음
					System.out.println("아이디 존재 : "+idCheck);
					resultMap.put("message", "비밀번호가 틀렸습니다");
				}
			} else {
				// 로그인 성공
				resultMap.put("code", 100);
				resultMap.put("message", "로그인에 성공하였습니다.");
				session.setAttribute("sessionId", idPwd.getUserId());
				session.setAttribute("sessionStatus", idPwd.getStatus());
			}
		} catch(Exception e) {
			resultMap.put("result", "fail");
			resultMap.put("message", "db조회 오류");
		}
		return resultMap;
	}
	
	// 로그아웃
	@Override
	public HashMap<String, Object> userLogout(HashMap<String, Object> map) {
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		session.invalidate();
		resultMap.put("message", "로그아웃되었습니다.");
		return resultMap;
	}
	

}
