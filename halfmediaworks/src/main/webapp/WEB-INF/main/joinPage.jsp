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
        <form>
            
        </form>
    </div>
    <jsp:include page="${pageContext.request.contextPath}/WEB-INF/main/footer.jsp" flush="false" />
</body>

</html>

<script>
    const app = Vue.createApp({
        data() {
            return {
                
            };
        },
        methods: {
            fnLogin() {
                var paramap = {

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