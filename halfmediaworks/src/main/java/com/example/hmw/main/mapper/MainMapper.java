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
	int inputId(HashMap<String, Object> map);
	
	// 회원가입 페이지
	// 회원가입 폼 양식 데이터
	void intoNewMember(HashMap<String, Object> map);	// 'insert문'은 리턴타입을 받지 않음
	// 닉네임 존재여부
	int checkNick(HashMap<String, Object> map);
	// 중복 숫자
	
	// 아이디 찾기, 비밀번호 변경
	// 닉네임
	List<MainModel> sendNick(HashMap<String, Object> map);
	// 이메일
	List<MainModel> sendEmail(HashMap<String, Object> map);
	
	// 이메일 전송

}