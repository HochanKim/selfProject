<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/css/board.css" />
    <link rel="stylesheet" href="/css/common.css" />
    <script src="../../js/jquery.js"></script>
    <script src="../../js/vue.js"></script>
    <title>HMW 게시판 & 커뮤니티</title>
</head>
<body>
    <header>
        <jsp:include page="${pageContext.request.contextPath}/WEB-INF/main/header.jsp" flush="false" />
    </header>
    <div id="app">
        <h1>HMW COMMUNITY</h1>
        <div>
            <table>
                <tr>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>조회수</th>
                    <th>작성시간</th>
                    <th>수정시간</th>
                </tr>
                <tr v-for="item in contents">
                    <td>{{item.title}}</td>
                    <td>{{item.nickName}}</td>
                    <td>{{item.cnt}}</td>
                    <td>{{item.cdateTime}}</td>
                    <td>{{item.udateTime}}</td>
                </tr>
            </table>
            <!-- 페이징 버튼 -->
            <div id="pagination">
                <div class="pageBtn" @click="fnClickPage(currentPage-1)">이전</div>
                <button v-for="index in totalContents" :class="{active: index == currentPage}" @click="fnClickPage(index)">{{ index }}</button>
                <div class="pageBtn" @click="fnClickPage(currentPage+1)">다음</div>
            </div>
        </div>
    </div>
    <footer>
        <jsp:include page="${pageContext.request.contextPath}/WEB-INF/main/footer.jsp" flush="false" />
    </footer>
</body>
</html>
<script>
    const app = Vue.createApp({
        data() {
            return {
                contents : [],
                totalContents : 0,       // 유저탭의 첫 인덱스
                pageSize : 5,           // 한 페이지의 호출 리스트 개수
                currentPage : 1,        // 페이지 첫 호출시 시작 페이지 번호 
            };
        },
        methods: {
            GetContents(start, size) {
                // DB에 저장된 컨텐츠 불러오기
                var paramap = {
                    start : start,
                    size : size
                };

                $.ajax({
                    url : "getBoard.dox",
                    dataType : "json",
                    type : "POST",
                    data : paramap,
                    success : (data) => {
                        this.contents = data.getContents;
                    },
                });
            },

            // GetUserListNumber() {     // 유저 페이징 메소드
            //     $.ajax({	
            //         url: "getUserList.dox",
            //         dataType: "json",	
            //         type: "POST", 
            //         success: (data) => {
            //             var totalUserNumber = data;
            //             this.totalUserTab = Math.ceil(totalUserNumber / this.pageSize);    // 총 페이지 수 계산
            //         },
            //     });
            // },

            // fnClickPage(index) {     // 페이징 숫자 버튼 클릭 처리
            //     if (index < 1 || index > this.totalPages) return;
            //         this.currentPage = index;
            //         var start = (this.currentPage - 1) * this.pageSize;
            //         var size = this.pageSize;

            //     // members 또는 requests 상태에 따라 적절한 리스트 호출
            //     if (this.members == true && this.requests == false) {
            //         this.GetUserListNumber();
            //         this.GetUser(start, size);
            //     } 
                
            //     if (this.requests == true && this.members == false) {
            //         this.GetContactNumber();
            //         this.GetRequest(start, size);
            //     }
            // },
        },
        mounted() {
            this.GetContents();
            // this.GetUserListNumber();
            // this.GetUser(0, this.pageSize);
        },
    });
    app.mount("#app");
</script>