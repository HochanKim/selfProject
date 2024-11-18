package com.example.hmw.main.model;

import lombok.Data;

@Data
public class MainModel {
	// 테이블 HMW_USER에서 가져올 데이터 컬럼
	private String userId;		// 회원 아이디
	private String pwd;			// 회원 비밀번호
	private int count;			// 비밀번호 불일치 횟수
	private String status;		// 고객계정, 직원계정 여부

}
