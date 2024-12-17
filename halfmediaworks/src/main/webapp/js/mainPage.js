
$(function(){
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
    });

    // 자동+무한 슬라이드 
    $(".sliderField").slick({
        arrows : false,         // 화살표 사용 여부 (false)
        slidesToShow: 4,        // 보여질 슬라이드 갯수
        slidesToScroll: 1,      // 넘겨질 슬라이드 갯수
    
        speed: 1000,            // 슬라이드 속도
        infinite: true,         // 무한슬라이드
        autoplay: true,         //자동넘김
        autoplaySpeed: 1500,    //자동넘김 속도
    
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    
        responsive: [
          //반응형 적용여부
          {
            breakpoint: 1023, //해상도 브레이크 포인트 설정
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              autoplay: false,
              dots: false,
              arrows: false,
            },
          },
          {
            breakpoint: 767, //해상도 브레이크 포인트 설정
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              autoplay: false,
              dots: false,
              arrows: false,
            },
          },
        ],
      });  
});


function comeToConts(){
  // 세션에 저장된('sessionStorage.setItem('userId', data.sessionId);') 아이디 가져오기
  var userId = sessionStorage.getItem('userId');    // 키값 : 'userId'

  // 세션 저장 유무로 contact.do 이동하기
  if(!userId){
    if(confirm('로그인 후 이용이 가능합니다. 로그인 하시겠습니까?')){
      location.href='../../user/login.do';
    } else {
      return;
    }  
  } else {
    location.href='../../contact/contact.do';
  }
}