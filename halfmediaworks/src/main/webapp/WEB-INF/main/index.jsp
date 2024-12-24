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
    <header style="position: fixed;">
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
                <p>우리는 각자가 가진 소중하고 잊지 못할 모든 ‘경험’을 담아냅니다</p>
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
            <h1>우리 삶의 모든 <span>경험(經驗)</span> 들을 <b>카메라</b>에 정성스럽게 담아드립니다</h1>
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
        <a href="#contact" class="scrollAnimation" id="clickDown">
          <span></span>
          <span></span>
          <span></span>
          Scroll Down
        </a>
    </section>
    <section class="contactSection" id="contact">
      <div class="goToConts">
        <div class="contsText">
          <p>Do You Want to</p>
          <p>Various Contents Experience</p>
          <p>with Us?</p>
          <button type="button" onClick="comeToConts()" class="comeToConts">Click Me</button>
        </div>
      </div>
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2666.447326157758!2d126.72755263598015!3d37.367167541176656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b773b52291187%3A0xd7ed8efe74ff02e0!2z7ZWY7ZSEIOuvuOuUlOyWtCDsm43siqQ!5e0!3m2!1sko!2skr!4v1734159983014!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
    <jsp:include page="/WEB-INF/main/footer.jsp" flush="false" />
<script src="${pageContext.request.contextPath}/js/jquery.js"></script>
<script src="${pageContext.request.contextPath}/js/slick.min.js"></script>
<script src="${pageContext.request.contextPath}/js/mainPage.js"></script>
</body>
</html>
