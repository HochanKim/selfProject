<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="../../css/admin/adminMain.css" />
    <script src="../../js/jquery.js"></script>
    <script src="../../js/vue.js"></script>
    <title>첫번째 페이지</title>
</head>

<body>
    <div id="app">
        <h1>HMW 관리자 페이지</h1>
        <table>
			<tr>
			    <th>사용자 아이디</th>
			    <th>사용자 성명</th>
			    <th>닉네임</th>
			    <th>전화번호</th>
			</tr>
			<tr v-for="item in list">
				<!--
					중괄호 {{}} 표시에 관한 오류 발생
					오류) {item.xxx}
						=> 해결 {{item.xxx}}  
				-->
			    <td>{{item.userId}}</td>
			    <td>{{item.userName}}</td>
			    <td>{{item.nickName}}</td>
			    <td>{{item.pNumber}}</td>
			</tr>
        </table>
    </div>
</body>

</html>

<script>
    const app = Vue.createApp({
        data() {
            return {
                list : []
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
                        console.log("유저 리스트 : ", data.userList);
                        this.list = data.userList;
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