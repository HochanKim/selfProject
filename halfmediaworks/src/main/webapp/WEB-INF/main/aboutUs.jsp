<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% request.setCharacterEncoding("UTF-8");%>    
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/common.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/index.css">
    <title>Half Media Works</title>
</head>
<body>
    <header style="background-color: #eee;">
        <jsp:include page="/WEB-INF/main/header.jsp" flush="false" />
    </header>
    <section class="aboutSection">
        <div class="wrap">
            <div class="leftText">
                <h1>HALF MEDIA WORKS</h1>
                <p>당신의 소중한 순간을 영원히 기억에 남길 수 있도록, </p>
                <p>우리는 스토리텔링을 예술로 승화시킵니다.</p>
                <p><span>Half Media Works</span>는 감각적이고 창의적인 영상 제작과 사진 촬영을 통해</p>
                <p>클라이언트의 비전을 생생하게 구현합니다.</p>
                <p>우리는 단순한 촬영을 넘어, 당신의 브랜드와 이야기를</p>
                <p>깊이 있게 담아내는 작업을 하고 있습니다.</p>
                <p>특별한 순간을 최고의 퀄리티로 기록해 잊지 못할 경험을 선사하겠습니다.</p>
            </div>
            <div class="rightImg">
                <img src="../../image/cameraShot.webp" alt="촬영샷">
            </div>
        </div>
    </section>
    <footer>
        <jsp:include page="/WEB-INF/main/footer.jsp" flush="false" />
    </footer>
</body>
</html>