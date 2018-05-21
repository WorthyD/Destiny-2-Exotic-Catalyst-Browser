import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import HelloDecoratorComponent from "./components/HelloDecorator.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <hello-component :name="name" :initialEnthusiasm="5" />
        </div>
    `,
    data: {
        name: "World",
        exotics: ''
    },
    components: {
        HelloComponent
    },
    methods: {
        refreshData(resource) {
            this.$http.get('').then(response => {
                this.exotics = response.body;
            }, error => {
                console.error(error);
            });
        }
    }
});
