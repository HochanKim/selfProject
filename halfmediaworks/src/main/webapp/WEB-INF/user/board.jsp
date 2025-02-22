<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<% request.setCharacterEncoding("UTF-8");%>    
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
        <!-- 분류 코드리스트 -->
        <div class="codeSelect">
            <select v-model="kindNum" @change="boardCodeLists">
                <option value="">:: 전체 ::</option>
                <option v-for="code in boardCodes" :value="code.kindId">:: {{code.kindName}} ::</option>
            </select>
        </div>

        <!-- 게시글 테이블 -->
        <div>
            <table>
                <tr>
                    <th>분류</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성시간</th>
                    <th>수정시간</th>
                    <th>조회수</th>
                </tr>
                <tr v-for="item in contents">
                    <td>[{{item.kindName}}]</td>
                    <td>
                        <a href="javascript::" @click="comeToView(item.contentId)" class="comeToView">
                            {{item.title}}
                        </a>
                    </td>
                    <td>{{item.nickName}}</td>
                    <td>{{item.cdateTime}}</td>
                    <td>{{item.udateTime}}</td>
                    <td>{{item.cnt}}</td>
                </tr>
            </table>
            <button @click="writeContent" class="movePost">글쓰기</button>
            <!-- 페이징 버튼 -->
            <div id="pagination">
                <div class="pageBtn" @click="fnClickPage(currentPage-1)">이전</div>
                <button v-for="index in totalContents" :class="{active: index == currentPage}" @click="fnClickPage(index)">{{ index }}</button>
                <div class="pageBtn" @click="fnClickPage(currentPage+1)">다음</div>
            </div>
        </div>
    </div>
    <footer style="margin-top: 60px;">
        <jsp:include page="${pageContext.request.contextPath}/WEB-INF/main/footer.jsp" flush="false" />
    </footer>
</body>
</html>
<script>
    const app = Vue.createApp({
        data() {
            return {
                contents : [],              // 게시글 데이터
                boardCodes : [],            // 게시글 종류 코드 (가져온 데이터를 List 형태로 저장)
                kindNum : "",               // 게시글 종류 코드 (select 태그)
                totalContents : 0,          // 게시판의 첫 인덱스
                pageSize : 5,               // 한 페이지의 호출 리스트 개수
                currentPage : 1,            // 페이지 첫 호출시 시작 페이지 번호
            };
        },
        methods: {
            GetContents(start, size) {
                // DB에 저장된 컨텐츠 불러오기
                var paramap = {
                    start : start,
                    size : size,
                };

                $.ajax({
                    url : "getBoard.dox",
                    dataType : "json",
                    type : "POST",
                    data : paramap,
                    success : (data) => {
                        this.contents = data.getContents;
                    },
                    error: (err) => {
                        console.error('게시글 데이터를 가져오는 중 오류 발생:', err);
                    }
                });
            },

            GetBoardList() {     // 게시판 페이징 메소드
                $.ajax({	
                    url : "getBoardPageList.dox",
                    dataType : "json",
                    type : "POST",
                    data : [],
                    success: (data) => {
                        var totalBoardNumber = data;
                        this.totalContents = Math.ceil(totalBoardNumber / this.pageSize);    // 총 페이지 수 계산
                    },
                    error: (err) => {
                        console.error('게시글 데이터를 가져오는 중 오류 발생:', err);
                    }
                });
            },

            fnClickPage(index) {     // 페이징 숫자 버튼 클릭 처리
                if (index < 1 || index > this.totalPages) return;
                    this.currentPage = index;
                    var start = (this.currentPage - 1) * this.pageSize;
                    var size = this.pageSize;
                
                // 페이징 번호 클릭 시, 해당 데이터 불러오기
                this.GetContents(start, size);
                
            },

            writeContent(){     // 글쓰기 페이지로 이동
                var userId = sessionStorage.getItem('userId');    // 키값 : 'userId'
                // 세션 저장 유무로 postPage.do 이동하기
                if(!userId){
                    if(confirm('로그인 후 이용이 가능합니다. 로그인 하시겠습니까?')){
                        location.href='../../user/login.do';
                    } else {
                        return;
                    }  
                } else {
                    location.href="/user/postPage.do";
                }
            },

            comeToView(number){     // 조회수 증가
                var paramap = {
                    contentId : number
                };
                $.ajax({
                    url : "plusCount.dox",
                    dataType : "json",
                    type : "POST",
                    data : paramap,
                    success : (data) => {
                        var contentId = number;
                        location.href=`/user/contentView.do?num=\${contentId}`;
                    },
                    error: (err) => {
                        console.error('게시글 데이터를 가져오는 중 오류 발생:', err);
                    } 
                });
            },

            boardCodeLists(){       // 카테고리 함수
                var paramap = {
                    kindId : this.kindNum
                };
                $.ajax({
                    // 코드 리스트 불러오기
                    url : "getBoardCategory.dox",
                    dataType : "json",
                    type : "GET",
                    data : [],
                    success : (data) => {
                        this.boardCodes = data.categoryLists;
                    },
                    error: (err) => {
                        console.error('게시글 데이터를 가져오는 중 오류 발생:', err);
                    }
                });

            },

        },
        mounted() {
            this.GetContents(0, this.pageSize);
            this.GetBoardList();
            this.boardCodeLists();
        },
    });
    app.mount("#app");
</script>