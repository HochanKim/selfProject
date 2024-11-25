package com.example.hmw.main.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hmw.admin.model.AdminModel;
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
			System.out.println("로그인 : "+idPwd);
			
			if(idPwd == null) {	
				// 아이디나 비밀번호가 맞지 않다
				resultMap.put("code", 400);
				int idCheck = mainMapper.inputId(); 
				if(idCheck == 0) {	
					// 맞지 않은 아이디 or 존재하지 않은 아이디
					resultMap.put("message", "아이디가 다르거나 존재하지 않습니다.");
				} else {
					// 아이디는 있지만 비밀번호가 일치하지 않음
					System.out.println("아이디 존재 : "+idCheck);
					resultMap.put("message", "비밀번호가 틀렸습니다");
				}
			} else {
				// 로그인 성공
				resultMap.put("code", 200);
				resultMap.put("message", "로그인에 성공하였습니다.");
				
				// 세션에 저장
				session.setAttribute("sessionId", idPwd.getUserId());
				session.setAttribute("sessionStatus", idPwd.getStatus());
				System.out.println("세션 저장 아이디 : "+idPwd.getUserId());
				System.out.println("세션 저장 직원유무 : "+idPwd.getStatus());
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
			System.out.println("로그아웃 이후 세션 : "+session);
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
			List<MainModel> newMember = mainMapper.intoNewMember(resultMap);
			resultMap.put("userInfo", newMember);
			resultMap.put("message", "정상적으로 가입되었습니다.");
		} catch(Exception e) {
			resultMap.put("result", "fail");
			resultMap.put("message", "회원가입 과정 중 문제가 발생했습니다.");
		}
		return resultMap;
	}

	// 아이디 중복체크
	@Override
	public HashMap<String, Object> idExistCheck(HashMap<String, Object> map) {
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		// 아이디 중복 체크
		int idCheck = mainMapper.inputId();
		if(idCheck == 1) {	
			// 중복 아이디
			resultMap.put("message", "이미 존재하는 아이디입니다.");
		} else {
			resultMap.put("message", "사용 가능한 아이디입니다.");
			resultMap.put("newId", idCheck);
		}
		System.out.println("아이디 : "+idCheck);
		return resultMap;
	}
	
	// 닉네임 중복체크
	@Override
	public HashMap<String, Object> nickExistCheck(HashMap<String, Object> map) {
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		// 닉네임 중복 체크
		int checkNick = mainMapper.checkNick();
		if(checkNick == 1) {
			// 중복 닉네임
			resultMap.put("message", "닉네임이 이미 존재합니다.");
		} else {
			resultMap.put("message", "사용 가능한 닉네임입니다.");
			resultMap.put("newNick", checkNick);
		}
		System.out.println("닉네임 : "+checkNick);
		return resultMap;
	}




}
