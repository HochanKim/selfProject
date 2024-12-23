package com.example.hmw.admin.service;

import java.util.HashMap;
import java.util.List;

import com.example.hmw.admin.model.AdminModel;

public interface AdminService {	
	// 관리자 페이지
	// 유저 목록
	HashMap<String, Object> getUserList(HashMap<String, Object> map);
	
	// 의뢰 목록
	HashMap<String, Object> getRequests(HashMap<String, Object> map);

	// 리스트 숫자
	int getTotalUser();
	// 리스트 숫자
	int getTotalContact();
	
	// 의뢰서
	HashMap<String, Object> receiveReq(HashMap<String, Object> map);
	
	// 의뢰 코드리스트
	// 방법
	HashMap<String, Object> selectClassficationCodes(HashMap<String, Object> map);
	// 목적
	HashMap<String, Object> selectIntensionCodes(HashMap<String, Object> map);
}
