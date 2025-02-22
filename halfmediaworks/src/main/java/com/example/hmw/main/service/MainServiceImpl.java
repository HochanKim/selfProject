package com.example.hmw.main.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.hmw.main.mapper.MainMapper;
import com.example.hmw.main.model.MainModel;

import jakarta.servlet.http.HttpSession;

@Service
public class MainServiceImpl implements MainService{

	@Autowired
	MainMapper mainMapper;
	
	// 로그인 성공시, 세션을 저장
	@Autowired
	HttpSession session;
	
	// 로그인 허용
	@Override
	public HashMap<String, Object> acceptLogin(HashMap<String, Object> map) {
		HashMap<String, Object> resultMap = new HashMap<>();
		try {
			// 아이디-비밀번호 일치여부 (불일치시 데이터 null)
			MainModel idPwd = mainMapper.userLogin(map);
			// 회원 정보
			MainModel getUserInfo = mainMapper.userLogin(map);
			
			if(idPwd == null) {	
				// 아이디나 비밀번호가 맞지 않다
				resultMap.put("code", 400);
				int idCheck = mainMapper.inputId(map); 
				if(idCheck == 0) {	
					// 맞지 않은 아이디 or 존재하지 않은 아이디
					resultMap.put("message", "아이디가 다르거나 존재하지 않습니다.");
				} else {
					// 아이디는 있지만 비밀번호가 일치하지 않음
					resultMap.put("message", "비밀번호가 틀렸습니다");
				}
			} else {
				// 로그인 성공
				resultMap.put("userInfo", getUserInfo);
				resultMap.put("code", 200);
				resultMap.put("message", "로그인에 성공하였습니다.");
				
				// 세션에 저장
				session.setAttribute("sessionId", ((MainModel) idPwd).getUserId());			// 아이디
				session.setAttribute("sessionStatus", ((MainModel) idPwd).getStatus());		// 관리권한
				session.setAttribute("sessionNick", ((MainModel) idPwd).getNickName());		// 닉네임
			}
			
		} catch(Exception e) {
			resultMap.put("result", "fail");
			resultMap.put("message", "db조회 오류");
		}
		return resultMap;
	}
	
	// 로그아웃
	@Override
	public HashMap<String, Object> userLogout(HashMap<String, Object> map) {
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		try {
			// 세션 삭제
			session.invalidate();
			resultMap.put("message", "로그아웃되었습니다.");
		} catch(Exception e) {
			resultMap.put("result", "fail");
			resultMap.put("message", "로그아웃 처리 중 문제가 발생했습니다.");
		}
		return resultMap;
	}

	// 회원가입
	@Override
	public HashMap<String, Object> intoNewMember(HashMap<String, Object> map) {
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		try {
			mainMapper.intoNewMember(map);		// 'insert문'은 리턴타입이 없음
			resultMap.put("message", "정상적으로 가입되었습니다.");
		} catch(Exception e) {
			resultMap.put("message", "회원가입 과정 중 문제가 발생했습니다.");
		}
		return resultMap;
	}

	// 아이디 중복체크
	@Override
	public HashMap<String, Object> idExistCheck(HashMap<String, Object> map) {
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		// 아이디 중복 체크
		int idCheck = mainMapper.inputId(map);
		if(idCheck == 1) {	
			// 중복 아이디
			resultMap.put("message", "동일한 아이디가 존재합니다.");
		} else {
			resultMap.put("message", "사용 가능한 아이디입니다.");
			resultMap.put("newId", idCheck);
		}
		
		return resultMap;
	}
	
	// 닉네임 중복체크
	@Override
	public HashMap<String, Object> nickExistCheck(HashMap<String, Object> map) {
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		// 닉네임 중복 체크
		int checkNick = mainMapper.checkNick(map);
		if(checkNick == 1) {
			// 중복 닉네임
			resultMap.put("message", "닉네임이 이미 존재합니다.");
		} else {
			resultMap.put("message", "사용 가능한 닉네임입니다.");
			resultMap.put("newNick", checkNick);
		}
		return resultMap;
	}

	// 닉네임으로 아이디 찾기
	@Override
	public HashMap<String, Object> sendNick(HashMap<String, Object> map) {
		HashMap<String, Object> nickMap = new HashMap<String, Object>();
		// 가져온 아이디
		List<MainModel> nickWithId = mainMapper.sendNick(map);
		nickMap.put("getId", nickWithId);
		return nickMap;
	}

	// 이메일로 아이디 찾기
	@Override
	public HashMap<String, Object> sendEmail(HashMap<String, Object> map) {
		HashMap<String, Object> emailMap = new HashMap<String, Object>();
		// 가져온 아이디
		List<MainModel> nickWithEmail = mainMapper.sendEmail(map);
		emailMap.put("getId", nickWithEmail);
		return emailMap;
	}

	// 비밀번호 변경
	@Override
	public HashMap<String, Object> resetPwd(HashMap<String, Object> map) {
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		try {
			mainMapper.resetPwd(map);
			resultMap.put("message", "정상적으로 비밀번호를 변경하였습니다.");
		} catch(Exception e) {
			resultMap.put("message", "문제가 발생했습니다.");
		}
		return resultMap;
	}
	
	// 회원정보
	@Override
	public HashMap<String, Object> getUserInfo(HashMap<String, Object> map) {
		HashMap<String, Object> getInfo = new HashMap<String, Object>();
		try {
			List<MainModel> userInfo = mainMapper.getUserInfo(map);
			// 불러온 유저 정보
			getInfo.put("userData", userInfo);
		} catch(Exception e) {
			getInfo.put("message", "문제가 발생했습니다.");
		}
		return getInfo;
	}

	// 회원탈퇴
	@Override
	public HashMap<String, Object> exitUser(HashMap<String, Object> map) {
		HashMap<String, Object> delMap = new HashMap<String, Object>();
		try {
			mainMapper.exitUser(map);
			delMap.put("message", "회원탈퇴를 완료했습니다.");
		} catch(Exception e) {
			delMap.put("message", "탈퇴하는 과정 중 문제가 발생했습니다.");
		}
		return delMap;
	}
}
