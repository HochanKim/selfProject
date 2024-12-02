package com.example.hmw.main.model;

import lombok.Data;

@Data
public class EmailModelDto {
	// 이메일 전송 변수
	private String to;
	private String subject;
	private String message;
}
