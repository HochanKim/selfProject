package com.example.hmw.main.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.example.hmw.main.model.*;


@Mapper
public interface MainMapper {
	// 로그인 페이지
	// 로그인 아이디/비밀번호를 통한 회원 데이터
	MainModel userLogin(HashMap<String, Object> map);
	// 아이디 존재여부
	int inputId();
	
	// 회원가입 페이지
	// 회원가입 폼 양식 데이터
	List<MainModel> intoNewMember(HashMap<String, Object> map);
	// 닉네임 존재여부
	int checkNick();
}
