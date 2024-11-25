<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/common.css">
    <link rel="stylesheet" href="../../css/login&join.css">
    <script src="${pageContext.request.contextPath}/js/vue.js"></script>
    <script src="${pageContext.request.contextPath}/js/jquery.js"></script>
    <title>HMW 로그인</title>
</head>

<body>
    <header>
        <jsp:include page="${pageContext.request.contextPath}/WEB-INF/main/header.jsp" flush="false" />
    </header>
    <div id="app">
        <section class="joinForm">
            <div>
                <label>아이디<span>*</span></label>
                <input type="text" placeholder="아이디" v-model="userId">
                <button type="button" @click="joinIdCheck" class="checkButton">중복체크</button>	
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
                <button type="button" @click="joinNickCheck" class="checkButton">중복체크</button>	
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
            <div class="button">
                <button type="button" @click="fnInsert()" class="insertButton">가입하기</button>	
            </div>
        </section>
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
            joinIdCheck() {
                if(this.userId == ''){
                    alert("사용할 아이디를 입력해주세요");
                    return;
                }
                var paramap = {
                    userId : this.userId
                };
                $.ajax({
                    url : "idExist.dox",
                    dataType : "json",
                    type : "POST",
                    data : paramap,
                    success : (data) => {
                        this.idCheck = true;
                        alert(data.message);
                    },
                });
            },
            joinNickCheck() {
                if(this.nickName == ''){
                    alert("사용할 닉네임을 입력해주세요");
                    return;
                }
                var paramap = {
                    nickName : this.nickName
                };
                $.ajax({
                    url : "nickExist.dox",
                    dataType : "json",
                    type : "POST",
                    data : paramap,
                    success : (data) => {
                        this.nickCheck = true;
                        alert(data.message);
                    },
                });
            },
            fnInsert() {
                // 아이디
                if(this.userId == ''){
                    alert("사용할 아이디를 입력해주세요");
                    return;
                } else if(this.idCheck == false){
                    alert("아이디 중복을 확인해주세요");
                    return;
                }

                // 비밀번호
                if(this.pwd == ''){
                    alert("사용할 비밀번호를 입력해주세요");
                    return;
                } else if(this.pwd != this.pwdCheck || !this.pwdCheck){
                    alert("비밀번호 확인을 해주세요");
                    return;
                }

                // 닉네임
                if(this.nickName == ''){
                    alert("사용할 닉네임을 입력해주세요");
                    return;
                } else if(this.nickCheck == false){
                    alert("닉네임 중복을 확인해주세요");
                    return;
                }

                // 이름
                if(this.userName == ''){
                    alert("이름을 입력해주세요");
                    return;
                }

                // 전화번호
                if(this.phone == ''){
                    alert("전화번호를 입력해주세요");
                    return;
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
                        alert(data.message);
                    },
                });
            },
            
        },
        mounted() {
            
        },
    });
    app.mount("#app");
</script>