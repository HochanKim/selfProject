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
            <h1>아이디 찾기</h1>
            <section>
                <div class="tab">
                    <button @click="getNick" :class="{ active: nickInput }">닉네임</button>
                    <button @click="getEmail" :class="{ active: emailInput }">이메일</button>
                </div>
                <div v-if="nickInput" class="inputBox">
                    <input type="text" placeholder="등록한 닉네임을 입력하시오" v-model="sendNick">
                    <div class="sendBtn" @click="searchNick">전송하기</div>
                </div>
                <div v-if="emailInput" class="inputBox">
                    <input type="email" placeholder="등록한 이메일을 입력하시오" v-model="sendEmail">
                    <div class="sendBtn" @click="searchEmail">전송하기</div>
                </div>
                <div v-for="item in getInfo">
                    <p>{{item.userName}}님의 아이디는 '{{item.userId}}'입니다.</p>
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
                nickInput : true,
                emailInput : false,
                getInfo : [],
                sendNick : '',
                sendEmail : ''
            };
        },
        methods: {
            searchNick() {
                // 닉네임으로 아이디 찾기
                var paramap = { nickName : this.sendNick };
                $.ajax({
                    url : "sendNick.dox",
                    dataType : "json",
                    type : "POST",
                    data : paramap,
                    success : (data) => {
                        // 가져온 데이터가 없을 경우
                        if(data.getId == ''){
                            alert("존재하지 않은 닉네임입니다.");
                            return;
                        };
                        // 가져온 데이터가 있을 경우
                        this.getInfo = data.getId;
                    },
                });
            },
            searchEmail() {
                // 이메일주소로 아이디 찾기
                var paramap = { email : this.sendEmail };
                $.ajax({
                    url : "sendEmail.dox",
                    dataType : "json",
                    type : "POST",
                    data : paramap,
                    success : (data) => {
                        // 가져온 데이터가 없을 경우
                        if(data.getId == ''){
                            alert("등록된 이메일이 아닙니다.");
                            return;
                        };
                        // 가져온 데이터가 있을 경우
                        this.getInfo = data.getId;
                    },
                });
            },
            getNick() {
                this.nickInput = true;
                this.emailInput = false;
                this.getInfo = [];  // 탭 변경 시 이전 검색 결과 초기화
            },
            getEmail() {
                this.emailInput = true;
                this.nickInput = false;
                this.getInfo = [];  // 탭 변경 시 이전 검색 결과 초기화
            }
        },
        mounted() {

        },
    });
    app.mount("#app");
</script>