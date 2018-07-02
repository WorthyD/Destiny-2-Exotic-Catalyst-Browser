// import './scss/main.scss';
import axios from 'axios';
import Vue from 'vue';
import ExoticsComponent from './components/Exotics.vue';

let v = new Vue({
  el: '#app',
  template: `
  <div>    
  <h1 class="site-title">Destiny 2 Exotic Catalyst Browser</h1>
    <div>
        <exotics-component v-if="!loading" :items="items" :initialEnthusiasm="5" />
    </div>
</div>

    `,
  data: {
    name: 'World',
    items: [],
    loading: true,
  },
  components: {
    ExoticsComponent,
  },
  mounted() {
    this.getItems();
  },
  methods: {
    getItems() {
      axios.get('exotics.json').then(response => {
        this.loading = false;
        this.items = response.data;
      });
    },
  },
});
