package com.example.hmw.main.service;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import com.example.hmw.main.model.EmailModelDto;

public interface EmailService {
	// 데이터에 등록된 이메일 주소 확인
	HashMap<String, Object> sendEmailAndId(HashMap<String, Object> map);

	// 이메일 전송 메소드
	MimeMessage createMessage(String to) throws MessagingException, UnsupportedEncodingException;

	// 이메일 인증코드
	String createKey();

	// 이메일 발송
	String sendSimpleMessage(String to) throws Exception;
	
}
