package com.example.hmw.main.controller;

// 세션 정보를 저장하는 클래스 'SessionInfo'
public class SessionInfo {
    private String sessionId;		// 회원 아이디
    private String sessionStatus;	// 관리자 권한 유무
    private String sessionNick;		// 회원 닉네임

    // Getters and Setters
    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public String getSessionStatus() {
        return sessionStatus;
    }

    public void setSessionStatus(String sessionStatus) {
        this.sessionStatus = sessionStatus;
    }
    
    public String getSessionNick() {
    	return sessionNick;
    }
    
    public void setSessionNick(String sessionNick) {
    	this.sessionNick = sessionNick;
    }
}
