<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/common.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/index.css">
    <script src="${pageContext.request.contextPath}/js/vue.js"></script>
    <script src="${pageContext.request.contextPath}/js/jquery.js"></script>
    <title>Half Media Works</title>
</head>
<body>
    <header>
        <jsp:include page="/WEB-INF/main/header.jsp" flush="false" />
    </header>
    <section class="videoBannerSection">
        <video src="./image/Rogito-Freedumb_3.mp4" autoplay muted loop></video>
        <a href="#" class="scrollAnimation" id="clickDown">
            <span></span>
            <span></span>
            <span></span>
            Scroll Down
        </a>
    </section>
    <section class="secondSection">
        <div class="wrap">
            <div>
                <p>경험 (經驗)</p>
                <p>== 개인이 기억할 수 있는 과거의 모든 것 ==</p>
                <p>우리는 각자의 그 어떠한 소중하고 가치있는 모든 ‘경험’을 담아냅니다</p>
                <h1>HALF MEDIA WORKS</h1>
            </div>
        </div>
        <a href="#" class="scrollAnimation" id="clickDown">
            <span></span>
            <span></span>
            <span></span>
            Scroll Down
        </a>
    </section>
    <section class="thirdSection">
        <div class="wrap">
            <h1>우리 삶의 모든 <span>경험(經驗)</span> 들을 정성스럽게 담아드립니다</h1>
            <div id="slide">
                <div class="slider-container">
                    <span class="leftBtn">
                        <button>이전</button>
                    </span>
                    <div class="slider">
                        <span class="first-img">
                            <div class="text-wrap">
                                1
                            </div>
                        </span>
                        <span>
                            <div class="text-wrap">
                                2
                            </div>
                        </span>
                        <span>
                            <div class="text-wrap">
                                3
                            </div>
                        </span>
                        <span>
                            <div class="text-wrap">
                                4
                            </div>
                        </span>
                        <span class="last-img">
                            <div class="text-wrap">
                                5
                            </div>
                        </span>
                    </div>
                    <span class="rightBtn">
                        <button>다음</button>
                    </span>
                </div>
            </div>
        </div>
    </section>
    <section class="contactSection">
        
    </section>
    <jsp:include page="/WEB-INF/main/footer.jsp" flush="false" />
</body>
<script>
    // 페이지 스크롤 효과
    var mHtml = $("html");
    var page = 1;
    
    mHtml.animate(
        {scrollTop : 0}, 10
    );

    $(window).on("wheel", function(e) {
        if(mHtml.is(":animated")) {
            return;
        }

        if(e.originalEvent.deltaY > 0) {
            if(page == 5) return; 
                page++;
        } else if(e.originalEvent.deltaY < 0) {
            if(page == 1) return;
                page--;
        }

        var posTop = (page - 1) * $(window).height();
        mHtml.animate({scrollTop : posTop});
    })

    // 슬라이드 효과

</script>
</html>
