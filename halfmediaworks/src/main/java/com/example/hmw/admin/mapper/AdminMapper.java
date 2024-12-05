package com.example.hmw.admin.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.example.hmw.admin.model.AdminModel;


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
}
