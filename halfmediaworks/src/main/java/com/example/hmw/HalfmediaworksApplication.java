package com.example.hmw;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.mybatis.spring.annotation.MapperScan;

@SpringBootApplication
@MapperScan(basePackages = "com.example.hmw.admin.mapper")  // 매퍼 인터페이스가 있는 패키지 경로
public class HalfmediaworksApplication {

	public static void main(String[] args) {
		SpringApplication.run(HalfmediaworksApplication.class, args);
	}

}
