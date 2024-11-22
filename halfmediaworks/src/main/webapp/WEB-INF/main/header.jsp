<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% request.setCharacterEncoding("UTF-8");%>
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Halfmedia Works</title>
		<link rel="stylesheet" href="${pageContext.request.contextPath}/css/common.css">
		<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
		<script src="${pageContext.request.contextPath}/js/jquery.js"></script>
	</head>
	<body>
	<!-- 'index.jsp'와 연동  -->
		<div id="fixHeader">
			<!-- 헤더 영역 -->
			<header id="header">
				<div class="wrap">
					<div class="logo-img">
						<a href="index.jsp">
							<img src="/image/logo_colorchange.png" rel="로고">
						</a>
					</div>
					<div class="float-right" @change="getHeader">
						<form name="session" class="session">
							<div class="login">
								<template v-if="!sessionId">
									<a href="../user/login.do">
										<span class="log-in">로그인</span>
									</a>
									<a href="../user/joinPage.do">
										<span class="join">회원가입</span>
									</a>
								</template>
								<template v-if="sessionId != '' && sessionStatus == 'N'">
									<a href="javascript::" @click="logOut(userId)">
										<span class="logout">로그아웃</span>
									</a>
									<a href="javascript::" @click="fnInfo(userId)">	 
										<span class="memberinfo">회원정보</span>
									</a>
								</template>
								<template v-if="sessionId != '' && sessionStatus != 'N'"> 
									<a href="javascript::" @click="logOut(userId)">
										<span class="logout">로그아웃</span>
									</a>
									<a href="../admin/adminPage.do" @click="fnInfo(userId)">	
										<span class="memberinfo">관리자</span>
									</a>
								</template>
							</div>
						</form>
						<div id="hmw-menu-btn" :class="{open : isOpened}" @click="fnToggle">
							<span class="line"></span>
							<span class="line"></span>
							<span class="line"></span>
						</div>
					</div>
				</div>
			</header>
		
			<!-- 서브 메뉴 -->
			<nav :class="{subMenu1 : !isOpened}" @change="fnToggle">
				<ul>
					<li><a href="#">about us</a></li>
					<li><a href="#">our works</a></li>
					<li><a href="#cont">contacts</a></li>
					<li><a href="#">notice</a></li>
				</ul>
				<p class="kind">photo, promotion video, music video, drone shot</p>
				<address>
					<div class="fowd">
						<p>Tel</p>
						<p>Email</p>
						<p>Address</p>
					</div>
					<div class="behind">
						<p>070-7700-9308</p>
						<p>halfmediaworks@naver.com</p>       
						<p>경기도 시흥시 서울대학로264번길35, 425호</p>
					</div>
				</address>
			</nav>
		</div>
		<script>
			const header = Vue.createApp({
				data() {
					return {
						isOpened : false,
						subMenu01 : 'subMenu1',
						subMenu02 : 'subMenu2',
						sessionId : '${sessionId}',
						sessionStatus : '${sessionStatus}'
					};
				},
				methods: {
					fnToggle(){
						this.isOpened = !this.isOpened
						if(this.isOpened == false){
							this.subMenu02;
						} 
					},
					getHeader(){
						$.ajax({
						url: "/api/session",
						type: 'POST',
							success: (data) => {
								// 세션 데이터를 Vue 인스턴스에 저장
								this.sessionId = data.sessionId;
								this.sessionStatus = data.sessionStatus;
							},
							error: (err) => {
								console.error('세션 정보를 가져오는 중 오류 발생:', err);
							}
						});
					},
					logOut() {
						$.ajax({	
							url: "/logout.dox",		// 공통 url로 변경
							dataType: "json",
							type: "POST",
							data: {},
							success: (data) => {
								alert(data.message);
								location.href = "../user/login.do";
							},
						});
					},
					fnInfo(sessionId) {
						// 회원정보 페이지로 이동
						console.log('회원정보 페이지로 이동, 사용자 ID:', sessionId);
					}
				},
				mounted() {
					this.getHeader();
				},
			});
			header.mount("#fixHeader");
		</script>
	</body>
</html>