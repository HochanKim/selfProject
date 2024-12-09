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
        <section class="video-sec">
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
                <div class="sliderWrap">
                    <button class="prev">prev</button>
                    <div class="slider">
                        <div class="slideImage">1</div>
                        <div class="slideImage">2</div>
                        <div class="slideImage">3</div>
                        <div class="slideImage">4</div>
                        <div class="slideImage">5</div>
                    </div>
                    <button class="next">next</button>
                </div>
            </div>
            <a href="#" class="scrollAnimation" id="clickDown">
                <span></span>
                <span></span>
                <span></span>
                Scroll Down
            </a>
        </section>
        <section>
            
        </section>
        <jsp:include page="/WEB-INF/main/footer.jsp" flush="false" />
    </body>
</html>
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
            if(page == 4) return; 
                page++;
        } else if(e.originalEvent.deltaY < 0) {
            if(page == 1) return;
                page--;
        }

        var posTop = (page - 1) * $(window).height();
        mHtml.animate({scrollTop : posTop});
    })

    // 슬라이드 효과
    let slideIndex = 0;

    function prev(){
    if(slideIndex > 0){
        $("button").removeAttr("disabled") // 모든 버튼 사용할 수 있게!
        // toggleClass : 클래스가 있으면 제거, 없으면 생성!
        $($(".item")[slideIndex]).toggleClass("active")
        $($(".step")[slideIndex]).toggleClass("active-step")
        $(".item").hide();
        slideIndex -= 1;
        $($(".item")[slideIndex]).toggleClass("active")
        $($(".step")[slideIndex]).toggleClass("active-step")
        $(".active").fadeIn(800); // 새로운 액티브 요소만 스르륵 나타난다
    }
    if(slideIndex == 0){
        $(".prev")[0].setAttribute("disabled",'true')
    }
}
function next(){
    if(slideIndex < 3){
        $("button").removeAttr("disabled")
        $($(".item")[slideIndex]).toggleClass("active")
        $($(".step")[slideIndex]).toggleClass("active-step")
        $(".item").hide();
        slideIndex += 1;
        $($(".item")[slideIndex]).toggleClass("active")
        $($(".step")[slideIndex]).toggleClass("active-step")
        $(".active").fadeIn(800); 
    }
    if(slideIndex == 3){
        $(".next")[0].setAttribute("disabled",'true')
    }
}
function init(){
    $(".item").hide()
    $(".active").show()
    $(".prev").click(prev)
    $(".next").click(next)
}
$(document).ready(function(){

    init();
})
</script>