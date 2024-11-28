<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
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
            <h1>비밀번호 재설정</h1>
            <section>
                <div class="inputBox">
                    <h4>아이디</h4>
                    <input type="text" placeholder="아이디를 입력하시오" v-model="sendToId">
                    <div class="sendBtn" @click="checkId">전송하기</div>
                </div>
            </section>
        </div>
        <jsp:include page="/WEB-INF/main/footer.jsp" flush="false" />
    </body>
</html>
<script>
    const app = Vue.createApp({
        data() {
            return {
                sendToId : '',
                reqFromId : ''
            };
        },
        methods: {
            checkId() {
                if(this.sendToId == ''){
                    alert("아이디를 입력해주세요");
                    return;
                }
                var paramap = {
                    userId : this.sendToId
                };
                $.ajax({
                    url : "idExist.dox",
                    dataType : "json",
                    type : "POST",
                    data : paramap,
                    success : (data) => {
                        this.reqFromId = data.newId;
                        console.log(data.newId);
                        if(data.newId == 0){
                            if(!confirm("존재하지 않은 아이디입니다. 새로 가입하시겠습니까?")){
                                // 취소 클릭
                                return;
                            } else {
                                // 확인 클릭
                                location.href="../user/joinPage.do";
                            } 
                        }
                        if(this.reqFromId == undefined){
                            location.href="../user/mailCheck.do";
                        }
                    },
                });
            },  
        },
        mounted() {

        },
    });
    app.mount("#app");
</script>