<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<% request.setCharacterEncoding("UTF-8");%>   
글 상세보기 페이지

<!-- <script>
    const header = Vue.createApp({
        data() {
            return {
                comeView : [],
            };
        },
        methods: {
            
            getHeader(){
                $.ajax({
                url: "/api/session",
                type: 'POST',
                    success: (data) => {
                        // 세션 데이터를 Vue 인스턴스에 저장
                        this.sessionId = data.sessionId;
                        this.sessionStatus = data.sessionStatus;

                        // 접속한 아이디를 세션에 저장 (2024.12.17)
                        sessionStorage.setItem('userId', data.sessionId);
                    },
                    error: (err) => {
                        console.error('세션 정보를 가져오는 중 오류 발생:', err);
                    }
                });
            },
            
        },
        mounted() {
            this.getHeader();
        },
    });
    header.mount("#fixHeader");
</script> -->