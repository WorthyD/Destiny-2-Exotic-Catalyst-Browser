import Vue from "vue";
import ExoticsComponent from "./components/Exotics.vue";
// import './scss/main.scss';

let v = new Vue({
    el: '#app',
    template: `
    <div>
        <exotics-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: { name: 'World' },
    components: {
        ExoticsComponent
    },
});