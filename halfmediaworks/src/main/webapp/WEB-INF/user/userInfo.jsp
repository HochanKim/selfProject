<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/css/common.css" />
    <link rel="stylesheet" href="/css/infomation.css" />
    <title>HMW 회원정보</title>
</head>
<body>
    <header>
        <jsp:include page="${pageContext.request.contextPath}/WEB-INF/main/header.jsp" flush="false" />
    </header>
    <div id="app">
        <h1>회원정보 페이지</h1>
        <table v-for="item in userInfo">
            <tr>
                <td class="tableTitle">회원성함</td><td class="userData">{{item.userName}}</td>
            </tr>
            <tr>
                <td class="tableTitle">아이디</td><td class="userData">{{item.userId}}</td>
            </tr>
            <tr>
                <td class="tableTitle">닉네임</td><td class="userData">{{item.nickName}}</td>
            </tr>
            <tr>
                <td class="tableTitle">연락처</td><td class="userData">{{item.pNumber}}</td>
            </tr>
            <tr>
                <td class="tableTitle">이메일 주소</td><td class="userData">{{item.email}}</td>
            </tr>
            <tr>
                <td class="tableTitle">가입일</td><td class="userData">{{item.joinDate}}</td>
            </tr>
        </table>
        <button @click="deleteUser" class="exitBtn">회원탈퇴</button>
    </div>
    <footer>
        <jsp:include page="/WEB-INF/main/footer.jsp" flush="false" />
    </footer>
    <script src="../../js/jquery.js"></script>
    <script src="../../js/vue.js"></script>
</body>
</html>
<script>
    const app = Vue.createApp({
        data() {
            return {
                userId : '${userId}',
                userInfo : []
            };
        },
        methods: {
            getUserInfo(){
                
                var paramap = {
                    userId : this.userId,
                };
                $.ajax({
                    url : "getUserInfo.dox",
                    dataType : "json",
                    type : "POST",
                    data : paramap,
                    success : (data) => {
                        this.userInfo = data.userInfo;
                        console.log("인자값 : "+this.userId);
                        console.log("아이디 외 정보 : "+ data.userInfo);
                    }
                });
            },
            deleteUser(){

            }
        },
        mounted() {
            this.getUserInfo();
        },
    });
    app.mount("#app");
</script>