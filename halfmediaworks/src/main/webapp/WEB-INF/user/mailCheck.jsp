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
                emailAddr : '',     // 사용자가 입력한 이메일 주소값
                inputCode : '',     // 입력한 코드
                receiveCode : '',   // 전송한 코드
                emailInData : false,
                sendEmail : false
            };
        },
        methods: {
            checkInData() {
                if(this.emailAddr == ''){
                    alert("이메일 주소를 입력해주세요");
                    return;
                }
                var paramap = {
                    email : this.emailAddr
                };

                $.ajax({
                    url: "selectEmailAddr.dox",
                    type: "POST",
                    dataType: "json",
                    data: paramap,
                    success : (data) => {
                        console.log(data.selectEmailAddr);
                        if(data.selectEmailAddr.length == 0){
                            alert("존재하지 않는 이메일 주소입니다. 다시 입력바랍니다");
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
                        console.log("인증코드 : "+data);
                        this.receiveCode = data;
                    }
                });
            },
            goResetPwd(){
                if(this.receiveCode != this.inputCode){
                    alert("인증번호가 잘못됐습니다");
                    return;
                } else {
                    alert("인증번호 확인이 완료됐습니다");
                    // location.href="../user/mailCheck.do";
                }
            }   
        },
        mounted() {

        },
    });
    app.mount("#app");
</script>