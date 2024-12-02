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
        </section>
        <section class="secondSection">
            <div class="wrap">
                <div>
                    <p>경험 (經驗)</p>
                    <p>== 개인이 기억할 수 있는 과거의 모든 것 ==</p>
                    <p>우리는 각자의 그 어떠한 소중하고 가치있는 모든 ‘경험’을 담아냅니다</p>
                </div>
                <h1>HALF MEDIA WORKS</h1>
            </div>
        </section>
        <section>
            
        </section>
        <!-- <div id="app"> -->
        <!-- </div> -->
        <jsp:include page="/WEB-INF/main/footer.jsp" flush="false" />
    </body>
</html>
<script>
    const app = Vue.createApp({
        data() {
            return {
                userId : "",
                pwd : "",
                sessionId : '${sessionId}',
				sessionStatus : '${sessionStatus}'
            };
        },
        methods: {
            // fnLogin() {
            //     if(this.userId == ""){
            //         alert("아이디를 입력해주세요.");
            //         return false;
            //     } else if(this.pwd == "") {
            //         alert("비밀번호를 입력해주세요.");
            //         return false;
            //     }

            //     var paramap = {
            //         userId : this.userId,
            //         pwd : this.pwd
            //     };
            //     $.ajax({
            //         url : "login.dox",
            //         dataType : "json",
            //         type : "POST",
            //         data : paramap,
            //         success : (data) => {
            //             this.login = data.login;
            //             console.log(data);
            //             if(data.code == 400){
            //                 console.log(data.code);
            //                 alert(data.message);
            //             } else {
            //                 // location.href = "/main/joinPage.do";
            //                 console.log(data.code);
            //                 alert(data.message);
            //                 location.reload();
            //             }
            //         },
            //     });
            // },
            // goReset(){
            //     location.href = "/user/resetData.do";
            // },
            // goJoin(){
            //     location.href = "/user/joinPage.do";
            // }
        },
        mounted() {
            
        },
    });
    // app.mount("#app");
</script>