<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/common.css">
        <link rel="stylesheet" href="../../css/searching.css">
        <script src="${pageContext.request.contextPath}/js/vue.js"></script>
        <script src="${pageContext.request.contextPath}/js/jquery.js"></script>
        <title>HMW 비밀번호 변경</title>
    </head>
    <body>
        <header>
            <jsp:include page="/WEB-INF/main/header.jsp" flush="false" />
        </header>
        <div id="app">
            <h1>비밀번호 변경</h1>
            <section>
                <div class="inputBox">
                    <h4>이메일 인증</h4>
                    <input type="email" placeholder="이메일 주소를 입력하시오" v-model="emailAddr">
                    <button class="sendBtn mailPageBtn" @click="checkInData">확인하기</button>
                    <button class="sendBtn mailPageBtn" @click="checkEmailAddr">전송하기</button>
                    <div class="mail-check-box" v-if="sendEmail == true">
                        <input type="text" placeholder="인증번호 6자리를 입력해주세요" maxlength="6" v-model="inputCode">
                        <button type="button" @click="goResetPwd" class="sendBtn">확인</button>
                    </div>
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
                emailAddr : '',         // 사용자가 입력한 이메일 주소값
                inputCode : '',         // 입력한 코드번호
                receiveCode : '',       // 이메일 전송코드
                emailInData : false,    // DB에 등록된 이메일 주소 여부
                sendEmail : false       // 전송코드 발송 여부
            };
        },
        methods: {
            checkInData() {
                if(this.emailAddr == ''){
                    alert("이메일 주소를 입력해주세요");
                    return;
                }
                var getParam = location.href.split("?");    // 이전 페이지에서 보낸 파라미터(아이디값) 담기
                var paramap = {
                    email : this.emailAddr,
                    userId : getParam[1]
                };

                $.ajax({
                    url: "selectEmailAddr.dox",
                    type: "POST",
                    dataType: "json",
                    data: paramap,
                    success : (data) => {
                        if(data.selectEmailAddr.length == 0){
                            alert("등록하지 않는 이메일 주소입니다.");
                            return;
                        } else {
                            alert("등록된 이메일 주소입니다.");
                            this.emailInData = true;
                        }
                    },
                });
            },
            checkEmailAddr(){
                if(this.emailInData != true){
                    alert("등록한 이메일 주소를 확인해주세요");
                    return;
                }
                $.ajax({
                    url : "mailConfirm.dox",
                    type : "POST",
                    dataType : "json",
                    data : {
                        email : this.emailAddr
                    },
                    success : (data) => {
                        alert("해당 이메일로 인증번호 발송이 완료됐습니다.");
                        this.sendEmail = true;
                        this.receiveCode = data;
                    }
                });
            },
            goResetPwd(){
                var getParam = location.href.split("?");    // 이전 페이지에서 보낸 파라미터(아이디값) 담기
                var userId = getParam[1];
                if(this.receiveCode != this.inputCode){
                    alert("인증번호가 잘못됐습니다");
                    return;
                } else {
                    alert("인증번호 확인이 완료됐습니다");
                    location.href=`../user/newPassword.do?\${userId}`;
                }
            }   
        },
        mounted() {

        },
    });
    app.mount("#app");
</script>