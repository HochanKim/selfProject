<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/common.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/index.css">
    <title>Half Media Works</title>
</head>
<body>
    <header>
        <jsp:include page="/WEB-INF/main/header.jsp" flush="false" />
    </header>
    <section class="videoBannerSection">
        <video src="./image/Rogito-Freedumb_3.mp4" autoplay muted loop></video>
        <a href="#secondSection" class="scrollAnimation" id="clickDown">
            <span></span>
            <span></span>
            <span></span>
            Scroll Down
        </a>
    </section>
    <section class="secondSection" id="secondSection">
        <div class="wrap">
            <div>
                <p>경험 (經驗)</p>
                <p>== 개인이 기억할 수 있는 과거의 모든 것 ==</p>
                <p>우리는 각자의 그 어떠한 소중하고 가치있는 모든 ‘경험’을 담아냅니다</p>
                <h1>HALF MEDIA WORKS</h1>
            </div>
        </div>
        <a href="#slide" class="scrollAnimation" id="clickDown">
            <span></span>
            <span></span>
            <span></span>
            Scroll Down
        </a>
    </section>
    <section class="thirdSection" id="slide">
        <div class="wrap">
            <h1>우리 삶의 모든 <span>경험(經驗)</span> 들을 정성스럽게 담아드립니다</h1>
            <div class="slide-content">
                <div class="sliderField">
                  <!--슬라이드 효과-->
                  <div>
                    <a href="https://m.blog.naver.com/PostView.naver?blogId=halfmediaworks&logNo=223246196047&navType=by" target="_blank">
                      <img src="../../image/workPics/slide01.jpg" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="https://m.blog.naver.com/PostView.naver?blogId=halfmediaworks&logNo=223257280580&navType=by" target="_blank">
                      <img src="../../image/workPics/slide02.jpg" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="https://m.blog.naver.com/PostView.naver?blogId=halfmediaworks&logNo=223250423558&navType=by" target="_blank">
                      <img src="../../image/workPics/slide03.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="https://m.blog.naver.com/PostView.naver?blogId=halfmediaworks&logNo=223227996089&navType=by" target="_blank">
                      <img src="../../image/workPics/slide04.jpg" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="https://m.blog.naver.com/PostView.naver?blogId=halfmediaworks&logNo=223201898356&navType=by" target="_blank">
                      <img src="../../image/workPics/slide05.jpg" alt="" />
                    </a>
                  </div>
                </div>
            </div>
        </div>
    </section>
    <section class="contactSection">
        
    </section>
    <jsp:include page="/WEB-INF/main/footer.jsp" flush="false" />
<script src="${pageContext.request.contextPath}/js/jquery.js"></script>
<script src="${pageContext.request.contextPath}/js/slick.min.js"></script>
<script src="${pageContext.request.contextPath}/js/mainPage.js"></script>
</body>
</html>
