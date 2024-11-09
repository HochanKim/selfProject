const Sample2Component = {
    template: `
        <div id="app2">
            <div>test</div>
        </div>
    `,
    data() {
        return {
            app2Var: "app2 Var"
        };
    },
    methods: {
        app2Func() {
            console.log("app2 Function");
        }
    }
};

Vue.createApp({}).component('sample2-component', Sample2Component).mount('#app2');