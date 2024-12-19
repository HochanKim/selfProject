package com.example.hmw.admin.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hmw.admin.mapper.AdminMapper;
import com.example.hmw.admin.model.AdminModel;
import com.example.hmw.admin.model.CodesModel;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	AdminMapper adminMapper;
	
	
	@Override
	// 관리자 페이지
	// 유저 목록
	public HashMap<String, Object> getUserList(HashMap<String, Object> map) {
//		2024.12.06 'view'에서 보낸 파라미터는 'map'에 담겨있음
		HashMap<String, Object> userMap = new HashMap<>();
		try {
//			List<AdminModel> membersList = adminMapper.getUserList(userMap);		// 파라미터들(start, size)을 담은 'map'이 아닌 'userMap'을 넣어서 생긴 오류
			List<AdminModel> membersList = adminMapper.getUserList(map);
			userMap.put("userList", membersList);
		} catch (Exception e) {
			System.out.println("유저 목록 불러오는 중 에러 발생");
			System.out.println("에러 이유 : "+e);
		}
		return userMap;
	}

	// 의뢰 목록
	@Override
	public HashMap<String, Object> getRequests(HashMap<String, Object> map) {
		HashMap<String, Object> reqMap = new HashMap<>();
		try {
			List<AdminModel> requestList = adminMapper.getRequests(map);
			reqMap.put("requestList", requestList);
		} catch (Exception e) {
			System.out.println("의뢰 목록 불러오는 중 에러 발생");
			System.out.println("에러 이유 : "+e);
		}
		return reqMap;
	}
	
	// 유저 리스트 숫자
	@Override
	public int getTotalUser() {
		try {
	        int getUserCount = adminMapper.getTotalUser();
	        return getUserCount;
	    } catch (Exception e) {
	        // 로깅 또는 예외 처리
	        throw new RuntimeException("유저 리스트 숫자를 가져오는 중 오류 발생", e);
	    }
	}

	// 목록 리스트 숫자
	@Override
	public int getTotalContact() {
	    try {
	        int getCount = adminMapper.getTotalContact();
	        return getCount;
	    } catch (Exception e) {
	        // 로깅 또는 예외 처리
	        throw new RuntimeException("목록 리스트 숫자를 가져오는 중 오류 발생", e);
	    }
	}

	// 의뢰서 등록
	@Override
	public HashMap<String, Object> receiveReq(HashMap<String, Object> map) {
		HashMap<String, Object> requestMap = new HashMap<String, Object>();
		try {
			adminMapper.receiveReq(map);
			requestMap.put("receiveReq", requestMap);
		} catch (Exception e) {
			requestMap.put("message", "의뢰서 등록 중 문제가 발생했습니다.");
			throw new RuntimeException("의뢰서 등록 중 문제 발생", e);
		}
		return requestMap;
	}

	// 촬영방법
	@Override
	public HashMap<String, Object> selectClassficationCodes(HashMap<String, Object> map) {
		HashMap<String, Object> classfCodes = new HashMap<String, Object>();
		try {
			List<CodesModel> codes = adminMapper.selectClassficationCodes(map);
			classfCodes.put("classfication", codes);
		} catch (Exception e) {
			classfCodes.put("message", "코드 불러오는 중 문제가 발생했습니다.");
			throw new RuntimeException("문제 발생(방법) : ", e);
		}
		return classfCodes;
	}

	// 의뢰의도
	@Override
	public HashMap<String, Object> selectIntensionCodes(HashMap<String, Object> map) {
		HashMap<String, Object> intensionCodes = new HashMap<String, Object>();
		try {
			List<CodesModel> codes = adminMapper.selectIntensionCodes(map);
			intensionCodes.put("intension", codes);
		} catch (Exception e) {
			intensionCodes.put("message", "코드 불러오는 중 문제가 발생했습니다.");
			throw new RuntimeException("문제 발생(의도) : ", e);
		}
		return intensionCodes;
	}	
}
