<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/css/login&join.css" />
    <link rel="stylesheet" href="/css/common.css" />
    <script src="../../js/jquery.js"></script>
    <script src="../../js/vue.js"></script>
    <title>첫번째 페이지</title>
</head>

<body>
    <div id="app">
        <form>
            <h1>로그인</h1>
            <div class="input">
                <label>아이디</label>
                <input type="text">
            </div>
            <div class="input">
                <label>비밀번호</label>
                <input type="password">
            </div>
            <div class="submitButton">
                <button>로그인</button>
            </div>
            <div class="submitButton">
                <button>회원가입</button>
            </div>
        </form>
        
    </div>
    <jsp:include page="footer.jsp" flush="false" />
</body>

</html>

<script>
    const app = Vue.createApp({
        data() {
            return {
                login : []
            };
        },
        methods: {
            GetUser() {
                var paramap = {};
                $.ajax({
                    url : "login.dox",
                    dataType : "json",
                    type : "POST",
                    data : [],
                    success : (data) => {
                        this.login = data.login;
                    },
                });
            },
        },
        mounted() {
            this.GetUser();
        },
    });
    app.mount("#app");
</script>