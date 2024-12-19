package com.example.hmw.admin.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.example.hmw.admin.model.AdminModel;
import com.example.hmw.admin.model.CodesModel;


@Mapper
public interface AdminMapper {
	// 관리자 페이지
	// 사용자 가져오기
    List<AdminModel> getUserList(HashMap<String, Object> map);
    
    // 요청 의뢰 가져오기
    List<AdminModel> getRequests(HashMap<String, Object> map);

	// 목록 리스트 숫자
	int getTotalUser();
    // 목록 리스트 숫자
	int getTotalContact();
	
	// 의뢰서
	void receiveReq(HashMap<String, Object> map);
	
	// 의뢰 코드리스트
	// 방법
	List<CodesModel> selectClassficationCodes(HashMap<String, Object> map);
	// 목적
	List<CodesModel> selectIntensionCodes(HashMap<String, Object> map);
}
