package com.example.hmw.admin.model;

import lombok.Data;

@Data
public class UserModel {
	// 테이블 HMW_USER에서 가져올 데이터 컬럼
	private String userId;		// 회원 아이디
	private String userName;	// 회원명
	private String nickName;	// 회원 별명
	private String pNumber;		// 회원 전화번호
	
	// 테이블 HMW_COMTACT에서 가져올 데이터 컬럼
	private String name;				// 의뢰자 성명
	private String phone;				// 의뢰자 전화번호
	private String email;				// 의뢰자 이메일
	private String qText;				// 의뢰 내용
	private String classification;		// 촬영 종류
	private String purpose;				// 촬영 목적
	private String dateTime;			// 제안서 제출한 날
}
