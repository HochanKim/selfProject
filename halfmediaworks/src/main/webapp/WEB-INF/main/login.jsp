<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/css/adminMain.css" />
    <script src="../../js/jquery.js"></script>
    <script src="../../js/vue.js"></script>
    <title>첫번째 페이지</title>
</head>

<body>
    <div id="app">
        <form>
            <h1>로그인</h1>
            <div>
                
            </div>
            <input type="text">
        </form>
    </div>
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
                    url : "getUser.dox",
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