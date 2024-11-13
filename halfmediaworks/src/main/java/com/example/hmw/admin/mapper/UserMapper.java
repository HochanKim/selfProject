package com.example.hmw.admin.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.example.hmw.admin.model.UserModel;


@Mapper
public interface UserMapper {
	// 관리자 페이지
	// 사용자 가져오기
    List<UserModel> getUserList(HashMap<String, Object> map);	
}
