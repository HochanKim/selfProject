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
        <div v-if="members">
            <table>
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
            <!-- 페이징 버튼 (유저탭) -->
            <div id="pagination">
                <div class="pageBtn" @click="fnClickPage(currentPage-1)">이전</div>
                <button v-for="index in totalUserTab" :class="{active: index == currentPage}" @click="fnClickPage(index)">{{ index }}</button>
                <div class="pageBtn" @click="fnClickPage(currentPage+1)">다음</div>
            </div>
        </div>
        <div v-if="requests">
            <table>
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
            <!-- 페이징 버튼 (요청탭) -->
            <div id="pagination">
                <div class="pageBtn" @click="fnClickPage(currentPage-1)">이전</div>
                <button v-for="index in totalReqTab" :class="{active: index == currentPage}" @click="fnClickPage(index)">{{ index }}</button>
                <div class="pageBtn" @click="fnClickPage(currentPage+1)">다음</div>
            </div>
        </div>
    </div>
    
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
                totalUserTab : 0,       // 유저탭의 첫 인덱스
                totalReqTab : 0,        // 요청탭의 첫 인덱스 
                pageSize : 5,           // 한 페이지의 호출 리스트 개수
                currentPage : 1,        // 페이지 첫 호출시 시작 페이지 번호 
            };
        },
        methods: {
            GetUser(start, size) {
                // DB에 저장된 유저 정보 불러오기
                var paramap = {
                    start : start,
                    size : size
                };

                $.ajax({
                    url : "getUser.dox",
                    dataType : "json",
                    type : "POST",
                    data : paramap,
                    success : (data) => {
                        this.memberList = data.userList;
                    },
                });
            },
            GetRequest(start, size){
                // DB에 저장된 의뢰 정보 불러오기
                var paramap = {
                    start : start,
                    size : size
                };
                $.ajax({
                    url : "getRequest.dox",
                    dataType : "json",
                    type : "POST",
                    data : paramap,
                    success : (data) => {
                        this.requestList = data.requestList;
                    },
                });
            },

            membersClick() {
                this.members = true;
                this.requests = false;
                this.GetUserListNumber();           // 회원 관리의 전체 페이지 수 다시 계산
                this.GetUser(0, this.pageSize);     // 회원 관리 테이블 새로 로드
            },

            requestsClick() {
                this.requests = true;
                this.members = false;
                this.GetRequest(0, this.pageSize);      // 의뢰 관리 테이블 새로 로드
                this.GetContactNumber();                // 의뢰 관리의 전체 페이지 수 다시 계산
            },

            GetUserListNumber() {     // 유저 페이징 메소드
                $.ajax({	
                    url: "getUserList.dox",
                    dataType: "json",	
                    type: "POST", 
                    success: (data) => {
                        var totalUserNumber = data;
                        this.totalUserTab = Math.ceil(totalUserNumber / this.pageSize);    // 총 페이지 수 계산
                    },
                });
            },

            GetContactNumber() {     // 요청 페이징 메소드
                $.ajax({	
                    url: "getContactList.dox",
                    dataType: "json",	
                    type: "POST", 
                    success: (data) => {
                        var totalRequests = data;
                        this.totalReqTab = Math.ceil(totalRequests / this.pageSize);    // 총 페이지 수 계산
                    },
                });
            },

            fnClickPage(index) {     // 페이징 숫자 버튼 클릭 처리
                if (index < 1 || index > this.totalPages) return;
                    this.currentPage = index;
                    var start = (this.currentPage - 1) * this.pageSize;
                    var size = this.pageSize;

                // members 또는 requests 상태에 따라 적절한 리스트 호출
                if (this.members == true && this.requests == false) {
                    this.GetUserListNumber();
                    this.GetUser(start, size);
                } 
                
                if (this.requests == true && this.members == false) {
                    this.GetContactNumber();
                    this.GetRequest(start, size);
                }
            },
        },
        mounted() {
            this.GetUserListNumber();
            this.GetContactNumber();
            this.GetUser(0, this.pageSize);
            this.GetRequest(0, this.pageSize);
        },
    });
    app.mount("#app");
</script>