package com.example.hmw.admin.model;

import lombok.Data;

@Data
public class CodesModel {
	// 테이블 hmw_classification
	private String method;				// 의뢰 방법
	private String methodKorean;		// 한국어
	
	// 테이블 hmw_intension
	private String intension;				// 의뢰 목적
	private String intensionKorean;		// 한국어
}
