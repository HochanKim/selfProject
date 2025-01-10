<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<% request.setCharacterEncoding("UTF-8");%>   
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/css/common.css" />
    <link rel="stylesheet" href="/css/contentView.css" />
    <title>HMW 게시판 & 커뮤니티</title>
</head>
<style>
    /* 테이블블 */
    table {
        width:100%;
        margin-bottom:20px;
    }
    table, tr, th, td {
        border-collapse: collapse;
    }

    /* 게시글 */
    .title {
        text-align: center;
        font-size:24px;
        border-bottom: 3px solid #000;
        padding:10px 5px;
    }

    .getContent {
        border-bottom:1px solid #999;
        color:#666;
        padding:20px 5px;
    }
    .getContent:nth-child(1) {
        width:15%;
    }
    .getContent:nth-child(2) {
        width:10%;
    }
    .getContent:nth-child(3) {
        text-align: right;
    }
    
    .getContent > span {
        color:#000;
        margin-left:15px;
    }

    .majorContent {
        padding:30px 5px;
        border-bottom:1px solid #999;
    }

    .exitView {
        width:80px;
        height:32px;
    }
</style>
<body>
    <header>
        <jsp:include page="${pageContext.request.contextPath}/WEB-INF/main/header.jsp" flush="false" />
    </header>
    <div id="app">
        <table v-for="item in comeView">
            <tr>
                <td colspan="3" class="title">
                    <h4>{{item.title}}</h4>
                </td>
            </tr>
            <tr>
                <td class="getContent">
                    작성자 <span>{{item.nickName}}</span>
                </td>
                <td class="getContent">
                    조회수 <span>{{item.cnt}}</span>
                </td>
                <td class="getContent">
                    작성일 <span>{{item.udateTime}}</span>
                </td>
            </tr>
            <tr>
                <td class="majorContent" colspan="3">{{item.content}}</td>
            </tr>
        </table>
        <button @click="backToBoard" class="exitView">목록보기</button>
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
                comeView : [],
                contentId : '${contentId}',
            };
        },
        methods: {
            contentView(){
                var paramap = {
                    contentId : this.contentId
                };
                $.ajax({
                    url: "contentView.dox",
                    type: 'POST',
                    data: paramap,
                    success: (data) => {
                        this.comeView = data.comeView;
                    },
                    error: (err) => {
                        console.error('정보를 가져오는 중 오류 발생:', err);
                    }
                });
            },
            backToBoard(){
                location.href="/user/board.do";
            }
        },
        mounted() {
            this.contentView();
        },
    });
    app.mount("#app");
</script>