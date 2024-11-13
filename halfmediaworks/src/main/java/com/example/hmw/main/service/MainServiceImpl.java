package com.example.hmw.main.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.hmw.main.mapper.MainMapper;
import com.example.hmw.main.model.MainModel;

@Service
public class MainServiceImpl implements MainService{

	@Autowired
	MainMapper mainMapper;
	
	
	// 로그인 허용
	@Override
	public HashMap<String, Object> acceptUserLogin(HashMap<String, Object> map) {
		HashMap<String, Object> resultMap = new HashMap<>();
		MainModel login = mainMapper.acceptUserLogin(map);
		resultMap.put("login", login);
		return resultMap;
	}
	

}
