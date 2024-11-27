package com.example.hmw.main.model;

import lombok.Data;

@Data
public class MainModel {
	// 테이블 HMW_USER 컬럼
	private String userId;		// 회원 아이디
	private String pwd;			// 회원 비밀번호
	private int count;			// 비밀번호 불일치 횟수
	private String status;		// 고객계정, 직원계정 여부
	
	private String nickName;		// 닉네임
	private String userName;		// 고객이름
	private String reason;		// 가입목적
	private String pNumber;		// 고객 전화번호
	private String email;		// 고객 이메일
}
