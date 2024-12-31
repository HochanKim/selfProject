<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/common.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/login&join.css">
        <script src="${pageContext.request.contextPath}/js/vue.js"></script>
        <script src="${pageContext.request.contextPath}/js/jquery.js"></script>
        <title>HMW 로그인</title>
    </head>

    <body>
        <header>
            <jsp:include page="/WEB-INF/main/header.jsp" flush="false" />
        </header>
        <div id="app">
            <form>
                <h1>로그인</h1>
                <div class="input">
                    <label>아이디</label>
                    <input type="text" placeholder="아이디" v-model="userId" @keyup.enter="fnLogin">
                </div>
                <div class="input">
                    <label>비밀번호</label>
                    <input type="password" placeholder="비밀번호" v-model="pwd" @keyup.enter="fnLogin">
                </div>
                <div class="submitButton">
                    <button type="button" @click="fnLogin">로그인</button>
                </div>
                <div class="submitButton">
                    <button type="button" @click="goReset">아이디/비밀번호 찾기</button>
                </div>
                <div class="submitButton">
                    <button type="button" @click="goJoin">회원가입</button>
                </div>
            </form>
        </div>
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
            fnLogin() {
                if(this.userId == ""){
                    alert("아이디를 입력해주세요.");
                    return false;
                } else if(this.pwd == "") {
                    alert("비밀번호를 입력해주세요.");
                    return false;
                }

                var paramap = {
                    userId : this.userId,
                    pwd : this.pwd
                };
                $.ajax({
                    url : "login.dox",
                    dataType : "json",
                    type : "POST",
                    data : paramap,
                    success : (data) => {
                        this.login = data.login;
                        console.log(data);
                        if(data.code == 400){
                            console.log(data.code);
                            alert(data.message);
                        } else {
                            location.href = "../../hmwMainPage.do";
                            console.log(data.code);
                            alert(data.message);
                        }
                    },
                });
            },
            goReset(){
                location.href = "/user/resetData.do";
            },
            goJoin(){
                location.href = "/user/joinPage.do";
            }
        },
        mounted() {
            
        },
    });
    app.mount("#app");
</script>