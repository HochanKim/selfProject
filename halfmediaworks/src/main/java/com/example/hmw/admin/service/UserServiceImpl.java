package com.example.hmw.admin.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hmw.admin.mapper.UserMapper;
import com.example.hmw.admin.model.UserModel;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserMapper userMapper;

	@Override
	public HashMap<String, Object> getUser(HashMap<String, Object> map) {
		HashMap<String, Object> resultMap = new HashMap<>();
		List<UserModel> testList = userMapper.getUser(resultMap);
		resultMap.put("result", testList);
		return resultMap;
	}
	

}
