package com.example.hmw.board.model;

import lombok.Data;

@Data
public class BoardModelDto {
	// hmw_contents 테이블
	private int contentId;		// 글 번호
	private String title;		// 글 제목
	private String content;		// 글 내용
	private int cnt;			// 조회수
	private String nickName;	// 작성자 닉네임
	private String kind;		// 글 카테고리
	private String cdateTime;	// 작성시간
	private String udateTime;	// 수정시간
	private String userId;		// 작성자 아이디 (세션확인용)
	private String status;		// 관리자 판단 여부 (세션확인용)
	
	// hmw_conts_kind 테이블
	private int kindId;			// 카테고리 번호
	private String kindName;	// 게시글 카테고리
}
