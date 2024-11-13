package com.example.hmw.admin.model;

import lombok.Data;

@Data
public class UserModel {
	// 테이블 HMW_USER에서 가져올 데이터 컬럼
	private String userId;		// 회원 아이디
	private String userName;	// 회원명
	private String nickName;	// 회원 별명
	private String pNumber;		// 회원 전화번호
}
