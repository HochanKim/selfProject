<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/css/adminMain.css" />
    <link rel="stylesheet" href="/css/common.css" />
    <script src="../../js/jquery.js"></script>
    <script src="../../js/vue.js"></script>
    <title>관리자 페이지</title>
</head>

<body>
    <header>
        <jsp:include page="${pageContext.request.contextPath}/WEB-INF/main/header.jsp" flush="false" />
    </header>
    <div id="app">
        <h1>HMW 관리자 페이지</h1>
        <div class="tab">
            <button @click="membersClick" :class="{ active: members }">회원관리</button>
            <button @click="requestsClick" :class="{ active: requests }">의뢰확인</button>
          </div>
        <table v-if="members">
			<tr>
			    <th>사용자 아이디</th>
			    <th>사용자 성명</th>
			    <th>닉네임</th>
			    <th>전화번호</th>
			</tr>
			<tr v-for="item in memberList">
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
        <table v-if="requests">
			<tr>
			    <th>의뢰자 성명</th>
			    <th>의뢰자 전화번호</th>
			    <th>의뢰자 이메일</th>
			    <th>의뢰 내용</th>
			    <th>촬영 종류</th>
			    <th>촬영 목적</th>
			    <th>제출 일시</th>
			</tr>
			<tr v-for="item in requestList">
			    <td>{{item.name}}</td>
			    <td>{{item.phone}}</td>
			    <td>{{item.email}}</td>
			    <td>{{item.qText}}</td>
			    <td>{{item.classification}}</td>
			    <td>{{item.purpose}}</td>
			    <td>{{item.dateTime}}</td>
			</tr>
        </table>
        <!-- 페이징 버튼 -->
        <!-- <div id="pagination">
            <div class="pageBtn" @click="fnClickPage(currentPage-1)">이전</div>
            <button v-for="index in totalPages" :class="{active: index == currentPage}" @click="fnClickPage(index)">{{ index }}</button>
            <div class="pageBtn" @click="fnClickPage(currentPage+1)">다음</div>
        </div> -->
    </div>
    <jsp:include page="${pageContext.request.contextPath}/WEB-INF/main/footer.jsp" flush="false" />
</body>

</html>

<script>
    const app = Vue.createApp({
        data() {
            return {
                members : true,
                requests : false,
                memberList : [],
                requestList : [],
                totalPages : 0,     // 페이지 첫 인덱스
                pageSize : 5,      // 한 페이지의 호출 리스트 개수
                currentPage : 1,     // 페이지 첫 호출시 시작 페이지 번호 
            };
        },
        methods: {
            GetUser() {
                // DB에 저장된 유저 정보 불러오기
                var paramap = {};
                $.ajax({
                    url : "getUser.dox",
                    dataType : "json",
                    type : "POST",
                    data : [],
                    success : (data) => {
                        console.log("유저 리스트 : ", data.userList);
                        this.memberList = data.userList;
                    },
                });
            },
            GetRequest(){
                // DB에 저장된 의뢰 정보 불러오기
                var paramap = {};
                $.ajax({
                    url : "getRequest.dox",
                    dataType : "json",
                    type : "POST",
                    data : [],
                    success : (data) => {
                        console.log("요청 리스트 : ", data.requestList);
                        this.requestList = data.requestList;
                    },
                });
            },
            membersClick() {
                this.members = true;
                this.requests = false;
            },
            requestsClick() {
                this.requests = true;
                this.members = false;
            }
        },
        mounted() {
            this.GetUser();
            this.GetRequest();
        },
    });
    app.mount("#app");
</script>