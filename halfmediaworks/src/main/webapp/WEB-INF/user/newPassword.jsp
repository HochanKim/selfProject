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
                    <div>
                        <label>새로운 비밀번호</label>
                        <input type="password" placeholder="새 비밀번호를 입력하세요" v-model="pwd">
                    </div>
                    <div>
                        <label>비밀번호 확인</label>
                        <input type="password" v-model="pwdCheck">
                        <!-- 비밀번호 컨펌 문구 -->
                        <p v-if="pwd.length > 0 && pwdCheck != pwd" style="font-size: 12px; color: crimson;">비밀번호가 다릅니다</p>
                        <p v-if="pwd.length > 0 && pwdCheck == pwd" style="font-size: 12px; color: green;">맞는 비밀번호입니다</p>
                    </div>
                    <button class="sendBtn mailPageBtn" @click="updatePwd">변경하기</button>
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
                pwd : "",           // 사용자가 입력한 새 비밀번호 값
                pwdCheck : "",      // 새 비밀번호 확인용   
            };
        },
        methods: {
            updatePwd() {
                var getParam = location.href.split("?");    // 이전 페이지에서 보낸 파라미터(아이디값) 담기
                if(this.pwd == '') {
                    alert("새 비밀번호를 입력해주세요");
                    return;
                } else if(this.pwdCheck == '' || this.pwdCheck != this.pwd) { 
                    alert("비밀번호가 맞지 않습니다."); 
                    return; 
                }
                var paramap = {
                    pwd : this.pwdCheck,
                    userId : getParam[1]
                };

                $.ajax({
                    url: "updatePassword.dox",
                    type: "POST",
                    dataType: "json",
                    data: paramap,
                    success : (data) => {
                        alert(data.message);
                        location.href=`../user/login.do`;
                    },
                });
            }
        },
        mounted() {

        },
    });
    app.mount("#app");
</script>