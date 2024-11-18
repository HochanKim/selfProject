package com.example.hmw.main.service;

import java.util.HashMap;

public interface MainService {	
	// 로그인 허용/실패
	HashMap<String, Object> acceptLogin(HashMap<String, Object> map);
	// 로그아웃
	HashMap<String, Object> userLogout(HashMap<String, Object> map);
}
