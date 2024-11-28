package com.example.hmw.main.service;

import java.util.HashMap;

public interface EmailService {
	// 데이터에 등록된 이메일 주소 확인
	HashMap<String, Object> sendEmail(HashMap<String, Object> map);
}
