<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% request.setCharacterEncoding("UTF-8");%>    
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="${pageContext.request.contextPath}/project/css/index.css"> -->
    <title>HMW 게시글 작성</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/common.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/board.css">
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
                    <textarea rows="50" name="q_text" class="q_text" v-model="sendReq"></textarea>
                </label>
            </div>
        </div>
        <button @click="writeContent" class="movePost">작성하기</button>
    </div>
    <script src="${pageContext.request.contextPath}/js/vue.js"></script>
    <script src="${pageContext.request.contextPath}/js/jquery.js"></script>
</body>
</html>
<script>
    const app = Vue.createApp({
        data() {
            return {
                inputName : '',             // 성함(법인명)  
                inputPhone : '',            // 연락처
                inputEmail : '',            // 이메일
                sendReq : '',               // 요청내용
                selectCategory : null,       // 선택한 카테고리리
                categoryCodes : [],         // 게시글 카테고리
            };
        },
        methods: {
            fnContact() {
                var form = document.contact;
                var regPhone = /^(01[016789]|02|0[3-9]{1}[0-9]{1})[-]?\d{3,4}[-]?\d{4}$/; 	// 전화번호 정규표현식 (하이픈 선택적용)
                var regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 			// 이메일 정규표현식
                // 필수입력 유도 (text)
                // 이름
                if(this.inputName == ""){
                    alert("이름을 입력해주세요");
                    form.name.focus();
                    return;
                }
                
                // 전화번호
                if(this.inputPhone == ""){
                    alert("전화번호를 입력해주세요");
                    form.phone.focus();
                    return;
                } else if(!regPhone.test(this.inputPhone)) {
                    alert("잘못된 전화번호를 입력했습니다. \n해외 거주자는 이메일 주소 혹은 상세내용란에 메신저, SNS 아이디를 남겨주세요");
                    form.phone.focus();
                    return;
                }
                
                // 이메일
                if(this.inputEmail == ""){
                    alert("이메일을 입력해주세요");
                    form.email.focus();
                    return;
                } else if(!regEmail.test(this.inputEmail)) { 	
                    alert('형식에 맞지 않는 이메일입니다. 다시 입력해 주세요');     
                    return;
                }

                // 필수입력 유도 (체크)
                var classf = this.classification;
                var intension = this.intension;
                if(!classf || !intension) {
                    alert("제작방식 및 목적을 선택해주세요");
                    return;
                }

                var paramap = {
                    name : this.inputName, 
                    phone : this.inputPhone,
                    email : this.inputEmail,
                    qText : this.sendReq,
                    classification : this.classification,
                    intension : this.intension
                };

                $.ajax({
                    url: "contact.dox",
                    type: "POST",
                    dataType: "json",
                    data: paramap,
                    success : (data) => {
                        alert("제안서를 정상적으로 제출했습니다.");
                        location.reload("contact.do");
                    },
                });
            },
            // 카테고리 함수
            categoryCode() {
                $.ajax({
                    url : "getBoardCategory.dox",
                    type : "POST",
                    dataType : "json",
                    data : [],
                    success : (code) => {
                        this.categoryCodes = code.categoryLists;
                    },
                });
            },

        },
        mounted() {
            this.categoryCode();      // 카테고리 함수
        },
    });
    app.mount("#app");
</script>