<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/common.css">
        <link rel="stylesheet" href="../../css/searching.css">
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
                <a href="javascript::">
                    <i class="fa-regular fa-id-card"></i>
                    <span>아이디 찾기</span>
                </a>
            </div>
            <div class="searchingBox">
                <a href="javascript::">
                    <i class="fa-solid fa-key"></i>
                    <span>비밀번호 찾기</span>
                </a>
            </div>
        </div>
        <jsp:include page="/WEB-INF/main/footer.jsp" flush="false" />
    </body>
</html>