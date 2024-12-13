package com.example.hmw.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class RegisterMailController {

    @Autowired
    private JavaMailSender javaMailSender;

    public String sendSimpleMessage(String to) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        String code = generateVerificationCode(); // 임의로 코드 생성
        helper.setTo(to);
        helper.setSubject("이메일 인증 코드");
        helper.setText("인증 코드는 다음과 같습니다: " + code, true);

        javaMailSender.send(message);
        return code;
    }

    private String generateVerificationCode() {
        // 인증 코드 생성 로직 (예: 6자리 랜덤 숫자)
        return String.valueOf((int) ((Math.random() * (999999 - 100000)) + 100000));
    }
}
