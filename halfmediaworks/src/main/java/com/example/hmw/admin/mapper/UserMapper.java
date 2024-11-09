package com.example.hmw.admin.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.example.hmw.admin.model.UserModel;


@Mapper
public interface UserMapper {
    List<UserModel> getUser(HashMap<String, Object> map);	
}
