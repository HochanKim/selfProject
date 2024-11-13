package com.example.hmw.main.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.example.hmw.main.model.*;


@Mapper
public interface MainMapper {
	// 메인 페이지
	// 로그인 허용/실패
	MainModel acceptUserLogin(HashMap<String, Object> map);
}
