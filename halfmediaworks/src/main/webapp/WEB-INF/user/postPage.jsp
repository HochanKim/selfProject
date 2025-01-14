<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% request.setCharacterEncoding("UTF-8");%>    
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HMW 게시글 작성</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/common.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/board.css">
    <!-- Quill CDN -->
	<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
	<script src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
</head>
<body>
    <header>
        <jsp:include page="/WEB-INF/main/header.jsp" flush="false" />
    </header>
    <div id="app">
        <div class="wrap">
            <h1>게시글 작성하기</h1>
            <!-- 카테고리 -->
            <div class="clickCategory inputSection">
                <p>카테고리</p>
                <label class="radioBtn" v-for="item in categoryCodes">
                    <input class="radio" type="radio" name="selectCategory" v-model="selectCategory" :value="item.kindId">{{item.kindName}}
                </label>
            </div>
            <div class="inputSection">
                <label>
                    <p>작성글 제목</p> 
                    <input type="text" name="name" class="input-text" v-model="inputName">
                </label>
            </div>
            <div class="inputSection">
                <label>
                    <p>내용</p> 
                    <div id="editor" style="height: 500px;"></div>
                </label>
            </div>
            <button @click="writeContent" class="movePost">등록하기</button>
        </div>
    </div>
    <script src="${pageContext.request.contextPath}/js/vue.js"></script>
    <script src="${pageContext.request.contextPath}/js/jquery.js"></script>
</body>
</html>
<script>
    const app = Vue.createApp({
        data() {
            return {
                inputName : "",                 // 게시글 제목
                contents : "",                  // 게시글 내용
                selectCategory : null,          // 선택한 카테고리
                categoryCodes : [],             // 게시글 카테고리
                sessionId : "${sessionId}",              // 작성한 회원 아이디
                sessionStatus : "${sessionStatus}",      // 작성한 회원 권한
                sessionNick : "${sessionNick}"           // 작성한 회원 닉네임
            };
        },
        methods: {
            categoryCode() {    // 카테고리 함수
                $.ajax({
                    url : "getBoardCategory.dox",
                    type : "GET",
                    dataType : "json",
                    data : [],
                    success : (code) => {
                        this.categoryCodes = code.categoryLists;
                    },
                });
            },

            writeContent(){     // 게시글 등록
                // 카테고리 클릭
                if(this.selectCategory == null) {
                    alert("카테고리를 선택해주세요");
                    return;
                }
                // 제목 입력
                if(!this.inputName) {
                    alert("게시글 제목을 입력해주세요");
                    return;
                }
                // 내용 입력
                if(!this.content) {
                    alert("게시글 내용을 입력해주세요");
                    return;
                }

                var paramap = {
                    title : this.inputName, 
                    nickName : this.sessionNick,
                    kind : this.selectCategory, 
                    content : this.content, 
                    userId : this.sessionId, 
                    status : this.sessionStatus
                };

                $.ajax({
                    url : "postPage.dox",
                    type : "POST",
                    dataType : "json",
                    data : paramap,
                    success : (code) => {
                        alert("정상적으로 게시글을 등록하였습니다.");
                        location.href="/user/board.do";
                    },
                });
            }

        },
        mounted() {
            this.categoryCode();      // 카테고리 함수
            // Quill 에디터 초기화
            var quill = new Quill('#editor', {
                theme : 'snow',
                modules : {
                    toolbar : [
                        [{ 'header' : [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline'],
                        [{'list' : 'ordered'}, {'list' : 'bullet'}],
                        ['link', 'image'],
                        ['clean']
                    ]
                }
            });

            // 에디터 내용이 변경될 때, Vue 데이터를 업데이트
            quill.on('text-change', function(){
                this.contents = quill.root.innerHTML;
            })
        }
    });
    app.mount("#app");
</script>