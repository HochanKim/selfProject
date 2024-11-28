package com.example.hmw.main.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.hmw.main.mapper.MainMapper;
import com.example.hmw.main.model.MainModel;

import jakarta.servlet.http.HttpSession;

@Service
public class EmailServiceImpl implements EmailService{

	@Autowired
	MainMapper mainMapper;
	
	// 로그인 성공시, 세션을 저장
	@Autowired
	HttpSession session;

	// 데이터에 등록된 이메일 주소 확인
	@Override
	public HashMap<String, Object> sendEmail(HashMap<String, Object> map) {
		HashMap<String, Object> emailMap = new HashMap<String, Object>();
		// 가져온 아이디
		List<MainModel> email = mainMapper.sendEmail(map);
		emailMap.put("selectEmailAddr", email);
		return emailMap;
	}
	
}
