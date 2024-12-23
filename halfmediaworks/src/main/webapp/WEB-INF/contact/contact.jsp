<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% request.setCharacterEncoding("UTF-8");%>    
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="${pageContext.request.contextPath}/project/css/index.css"> -->
    <title>HMW 의뢰서</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/common.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/contact.css">
</head>
<body>
    <header>
        <jsp:include page="/WEB-INF/main/header.jsp" flush="false" />
    </header>
<!-- 'index.jsp'와 연동  -->
    <section class="contact-sec">
        <div id="app">
            <div class="wrap">
                <form name="contact" class="contact">
                    <div>
                        <h2>Contacts</h2>
                        <label>
                            <p>성함(법인명)<span>*</span></p> 
                            <input type="text" name="name" class="input-text" v-model="inputName">
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>연락처<span>*</span></p> 
                            <input type="text" name="phone" placeholder="010xxxxxxxx or 031-xxx-xxxx" class="input-text" v-model="inputPhone">
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>대표메일<span>*</span></p> 
                            <input type="text" name="email" placeholder="abc@example.com" class="input-text" v-model="inputEmail"> 
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>상세내용</p> 
                            <textarea cols="80" rows="15" name="q_text" class="q_text" v-model="sendReq"></textarea>
                        </label>
                    </div>
                    <!-- 하드코딩 -->
                    <!-- <div>
                        <p>제작방식<span>*</span></p>  
                        <label class="radioBtn"><input class="radio" type="radio" v-model="classification" value="picture">사진촬영</label>
                        <label class="radioBtn"><input class="radio" type="radio" v-model="classification" value="allRound">영상제작(종합)</label>
                        <label class="radioBtn"><input class="radio" type="radio" v-model="classification" value="shot">영상촬영</label>
                        <label class="radioBtn"><input class="radio" type="radio" v-model="classification" value="planning">영상기획</label>
                        <label class="radioBtn"><input class="radio" type="radio" v-model="classification" value="edit">영상편집</label>
                        <label class="radioBtn"><input class="radio" type="radio" v-model="classification" value="droneShot">드론촬영</label>
                    </div>
                    <div>
                        <p>제작목적<span>*</span></p>
                        <label class="radioBtn"><input class="radio" type="radio" v-model="purpose" value="pr">제품/회사 홍보</label>
                        <label class="radioBtn"><input class="radio" type="radio" v-model="purpose" value="mv">뮤직비디오</label>
                        <label class="radioBtn"><input class="radio" type="radio" v-model="purpose" value="recode">행사기록</label>
                        <label class="radioBtn"><input class="radio" type="radio" v-model="purpose" value="conts">영화/예능 콘텐츠</label>
                        <label class="radioBtn"><input class="radio" type="radio" v-model="purpose" value="viral">유튜브/SNS 바이럴</label>
                        <label class="radioBtn"><input class="radio" type="radio" v-model="purpose" value="sky">항공샷</label>
                        <label class="radioBtn"><input class="radio" type="radio" v-model="purpose" value="etc">기타</label>
                    </div> -->

                    <!-- DB 활용 -->
                    <div>
                        <p>
                            제작방식<span>*</span>
                        </p>
                        <label class="radioBtn" v-for="item in classifiCodes">
                            <input class="radio" type="radio" v-model="classification" :value="item.method">{{item.methodKorean}}
                        </label>
                    </div>
                    <div>
                        <p>
                            제작목적<span>*</span>
                        </p>
                        <label class="radioBtn" v-for="item in intensionCodes">
                            <input class="radio" type="radio" v-model="purpose" :value="item.intension">{{item.intensionKorean}}
                        </label>
                    </div>
                    <div>
                        <button type="button" @click="fnContact()" class="submit">제출하기</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <jsp:include page="/WEB-INF/main/footer.jsp" flush="false" />
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
                classification : '',        // 제작방식
                purpose : '',               // 제작목적,
                classifiCodes : [],         // 촬영방식 코드리스트
                intensionCodes : []         // 촬영의도 코드리스트
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
                var purp = this.purpose;
                if(!classf || !purp) {
                    alert("제작방식 및 목적을 선택해주세요");
                    return;
                }

                var paramap = {
                    name : this.inputName, 
                    phone : this.inputPhone,
                    email : this.inputEmail,
                    qText : this.sendReq,
                    classification : this.classification,
                    purpose : this.purpose
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
            // 촬영방식 코드리스트 함수
            classCodes(){
                $.ajax({
                    url : "classfication.dox",
                    type : "POST",
                    dataType : "json",
                    data : [],
                    success : (code) => {
                        this.classifiCodes = code.classfication;
                        console.log("방식 : "+this.classifiCodes);
                    },
                });
            },
            // 촬영의도 코드리스트 함수
            intesnsion(){
                $.ajax({
                    url : "intension.dox",
                    type : "POST",
                    dataType : "json",
                    data : [],
                    success : (code) => {
                        this.intensionCodes = code.intension;
                        console.log("의도 : "+this.intensionCodes);
                    },
                });
            },
        },
        mounted() {
            this.classCodes();      // 촬영방식 코드리스트 함수
            this.intesnsion();      // 촬영의도 코드리스트 함수
        },
    });
    app.mount("#app");
</script>