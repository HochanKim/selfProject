<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/common.css">
        <link rel="stylesheet" href="../../css/searching.css">
        <script src="https://kit.fontawesome.com/0c69fdf2c0.js" crossorigin="anonymous"></script>
        <script src="${pageContext.request.contextPath}/js/vue.js"></script>
        <script src="${pageContext.request.contextPath}/js/jquery.js"></script>
        <title>HMW 로그인</title>
    </head>
    <body>
        <header>
            <jsp:include page="/WEB-INF/main/header.jsp" flush="false" />
        </header>
        <div id="app">
            <div class="searchingBox">
                <a href="../user/searchId.do">
                    <div>
                        <i class="fa-regular fa-id-card"></i>
                        <p>아이디 찾기</p>
                    </div>
                </a>
            </div>
            <div class="searchingBox">
                <a href="../user/resetPwd.do">
                    <div>
                        <i class="fa-solid fa-key"></i>
                        <p>비밀번호 재설정</p>
                    </div>
                </a>
            </div>
        </div>
        <jsp:include page="/WEB-INF/main/footer.jsp" flush="false" />
    </body>
</html>