package com.example.hmw.main.model;

import lombok.Data;

@Data
public class EmailModelDto {
	private String to;
	private String subject;
	private String message;
}
