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
        <jsp:include page="${pageContext.request.contextPath}/WEB-INF/main/header.jsp" flush="false" />
    </header>
    <div id="app">
        <form name="user" class="new-join" method="post">	
            <div>
                <label>아이디<span>*</span></label>
                <input type="text" placeholder="아이디" v-model="userId">
                <button type="button" @click="idCheck()">중복체크</button>	
            </div>
            <div>
                <label>비밀번호<span>*</span></label>
                <input type="password" placeholder="아이디" v-model="pwd">
            </div>
            <div>
                <label>비밀번호 확인<span>*</span></label>
                <input type="password" v-model="pwdCheck">
            </div>
            <div>
                <label>닉네임<span>*</span></label>
                <input type="text" placeholder="닉네임" v-model="nickName">
                <button type="button" @click="nickCheck()">중복체크</button>	
            </div>
            <div>
                <label>이름<span>*</span></label>
                <input type="text" v-model="userName">
            </div>
            <div>
                <label>전화번호</label>
                <input type="text" v-model="phone">
            </div>
            <div>
                <label>가입목적</label>
                <textarea cols="60" rows="15" v-model="reason"></textarea>
            </div>
            <button type="button" @click="fnInsert()" class="insert">가입하기</button>	
        </form>
    </div>
    <jsp:include page="${pageContext.request.contextPath}/WEB-INF/main/footer.jsp" flush="false" />
</body>

</html>

<script>
    const app = Vue.createApp({
        data() {
            return {
                userId : "",
                pwd : "",
                pwdCheck : "",
                nickName : "",
                userName : "",
                phone : "",
                reason : "",
                idCheck : false,
                nickCheck : false
            };
        },
        methods: {
            idCheck() {
                var paramap = {
                    userId : this.userId
                };
                $.ajax({
                    url : "login.dox",
                    dataType : "json",
                    type : "POST",
                    data : paramap,
                    success : (data) => {
                        this.idCheck = true;
                        alert("사용할 수 있는 아이디입니다.");
                    },
                });
            },
            nickCheck() {
                var paramap = {

                };
                $.ajax({
                    url : "newJoin.dox",
                    dataType : "json",
                    type : "POST",
                    data : paramap,
                    success : (data) => {
                        this.nickCheck = true;
                        alert("사용할 수 있는 닉네임입니다.");
                    },
                });
            },
            fnInsert() {
                if(this.idCheck == false){
                    alert("아이디 중복을 확인해주세요");
                }
                if(this.nickCheck == false){
                    alert("닉네임 중복을 확인해주세요");
                }
                if(this.pwd != this.pwdCheck || !this.pwdCheck){
                    alert("비밀번호 확인을 해주세요");
                }
                var paramap = {
                    userId : this.userId,
                    pwd : this.pwd,
                    nickName : this.nickName,
                    userName : this.userName,
                    pNumber : this.phone,
                    reason : this.reason
                };
                $.ajax({
                    url : "newJoin.dox",
                    dataType : "json",
                    type : "POST",
                    data : paramap,
                    success : (data) => {
                        
                    },
                });
            },
            
        },
        mounted() {
            
        },
    });
    app.mount("#app");
</script>