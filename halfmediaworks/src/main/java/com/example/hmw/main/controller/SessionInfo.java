package com.example.hmw.main.controller;

// 세션 정보를 저장하는 클래스 'SessionInfo'
public class SessionInfo {
    private String sessionId;
    private String sessionStatus;

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
}
