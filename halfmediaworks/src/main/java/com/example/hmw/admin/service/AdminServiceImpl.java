package com.example.hmw.admin.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hmw.admin.mapper.AdminMapper;
import com.example.hmw.admin.model.AdminModel;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	AdminMapper userMapper;
	
	
	@Override
	// 관리자 페이지
	// 유저 목록
	public HashMap<String, Object> getUserList(HashMap<String, Object> map) {
		HashMap<String, Object> userMap = new HashMap<>();
		List<AdminModel> membersList = userMapper.getUserList(userMap);
		userMap.put("userList", membersList);
		return userMap;
	}

	// 의뢰 목록
	@Override
	public HashMap<String, Object> getRequests(HashMap<String, Object> map) {
		HashMap<String, Object> reqMap = new HashMap<>();
		List<AdminModel> requestList = userMapper.getRequests(reqMap);
		reqMap.put("requestList", requestList);
		return reqMap;
	}	
}
