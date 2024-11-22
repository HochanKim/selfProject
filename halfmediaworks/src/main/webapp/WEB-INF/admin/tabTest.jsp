<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/css/adminMain.css" />
    <link rel="stylesheet" href="/css/common.css" />
    <script src="../../js/jquery.js"></script>
    <script src="https://unpkg.com/vue@3"></script>
    <title>관리자 페이지</title>
    <style>
        .tab-content {
            display: block;
            width:1200px;
            height:300px;
        }
        .tab-content li {
            width:100px;
            height:100px;
        }
        .tab1 {
            background-color: yellow;
        }
        .tab2 {
            background-color: yellowgreen;
        }
    </style>
</head>

<body>
    <header>
        <jsp:include page="${pageContext.request.contextPath}/WEB-INF/main/header.jsp" flush="false" />
    </header>
    <div id="app">
        <div class="wrap">
            <h1>다양한 커리어 관련 이벤트를 만나보세요!</h1>
            <div class="tab">
              <button @click="employClick" :class="{ active: employ }">취업/이직</button>
              <button @click="careerClick" :class="{ active: career }">커리어고민</button>
            </div>
            <ul class="tab-content tab1" v-if="employ">
              <li v-for="(item, index) in employList" :key="index">
                 {{ item.title }} - {{ item.sub }}
              </li>
            </ul>
            <ul class="tab-content tab2" v-if="career">
              <li v-for="(item, index) in employList" :key="index">
                {{ item.title }} - {{ item.sub }}
              </li>
            </ul>
        </div>
    </div>
    <jsp:include page="${pageContext.request.contextPath}/WEB-INF/main/footer.jsp" flush="false" />
</body>
</html>

<script>
    const app = Vue.createApp({
      data() {
        return {
          employ: true,
          career: false,
          employList: [
            { title: "자바스크립트", sub: "javascript" },
            { title: "리액트", sub: "react.js" },
            { title: "뷰", sub: "vue.js" },
            { title: "타입스크립트", sub: "typescript" }
          ]
        };
      },
      methods: {
        employClick() {
          this.employ = true;
          this.career = false;
        },
        careerClick() {
          this.career = true;
          this.employ = false;
        }
      },
      mounted() {
        console.log("Vue instance has been mounted");
      }
    }); 
    app.mount("#app");
</script>