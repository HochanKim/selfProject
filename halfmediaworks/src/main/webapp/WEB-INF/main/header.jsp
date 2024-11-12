<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% request.setCharacterEncoding("UTF-8");%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halfmedia Works</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/project/css/reset.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/project/css/common.css">
</head>
<body>
<!-- 'index.jsp'와 연동  -->
    <!-- 헤더 영역 -->
    <header id="header">
        <div class="wrap">
            <div class="logo-img">
                <a href="index.jsp">
                    <img src="image/logo_colorchange.png" rel="로고">
                </a>
            </div>
            <div class="float-right">
            	<form name="session" class="session">
            		<div class="login">
		            	<%
							if(session.getAttribute("userId") == null && session.getAttribute("staffYN") == null){
								// 세션값이 존재하지 않을때
						%>
								<a href="javascript::">
		            				<span class="log-in">로그인</span>
		            			</a>
								<a href="javascript::">
		            				<span class="join">회원가입</span>
		            			</a>
						<%
							} else {
								// 세션값이 존재하는 경우
								String userId = (String) session.getAttribute("userId"); 	// 세션으로 가져온 'userId'를 문자열 변수 'userId'에 저장 
								String staff = (String) session.getAttribute("staffYN");	// 세션으로 가져온 'staffYN'을 문자열 변수 'staff'에 저장
						%>
								<a href="javascript::">
									<span class="logout">로그아웃</span>
								</a>
								<a href="javascript::" onclick="fnInfo('<%= userId %>')">	<!-- 세션값을 담은 변수 userId를 파라미터로 전달 -->
									<span class="memberinfo">회원정보</span>
								</a>
						<%
							}
						%>
            		</div>
            	</form>
            	<div class="hmw-menu-btn">
                	<span class="line"></span>
                	<span class="line"></span>
                	<span class="line"></span>
            	</div>
            </div>
        </div>
    </header>

    <!-- 서브 메뉴 -->
    <nav class="sub-menu">
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
    <script src="js/jquery-3.7.1.min.js"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
	//서브메뉴
		var menu = document.querySelector(".hmw-menu-btn");
		var hide = document.querySelector(".sub-menu");
		$(menu).on("click", () => {
		    if(menu.classList.contains('open')){
		        menu.classList.remove('open');
		        $(hide).on("click").css("top", "-100vh");
				document.querySelector("#header").style.zIndex=0;
				document.querySelector("#cont").style.zIndex=0;
		    } else {
		        menu.classList.add('open');
		        $(hide).on("click").css("top", "0");
				document.querySelector("#header").style.zIndex=1;
				document.querySelector("#cont").style.zIndex=-1;
		    };
		});
		
	// 로그인
	var logIn = document.querySelector(".log-in");
	$(logIn).on("click", () => {
		window.open("login.jsp", "PopupWin", "width=600, height=600, top=150, left=250");
	});
	
	// 회원가입
	var join = document.querySelector(".join");
	$(join).on("click", () => {
		window.open("join.jsp", "PopupWin", "width=700, height=800, top=100, left=250");
	});
	
	// 로그아웃
	var logOut = document.querySelector(".logout");
	var form = document.session;
	$(logOut).on("click", () => {
		form.action = "logout.jsp"; 	// 'logout.jsp'로 전달하여 세션 종료
        form.submit();					// 제출
		alert("로그아웃하였습니다.");
	});
	
	// 회원정보
	function fnInfo(userId) {	
		location.href="memberinfo.jsp?userId="+userId;	
	}
	</script>
</body>
</html>