// import './scss/main.scss';
import axios from 'axios';
import Vue from 'vue';
import ExoticEditorItem from './components/exotic-editor-item.vue';
import ExoticEditorListComponent from './components/exotic-editor-list.vue';

let v = new Vue({
  el: '#editor',
  template: `
  <div>    
  <h1 class="site-title">Destiny 2 Exotic Catalyst Editor</h1>
    <div>
        <exotics-editor-list-component v-if="!loading" :items="items" :initialEnthusiasm="5" />
    </div>
</div>
  
    `,
    data: {
    items: [],
    loading: true,
  },
  components: {
    'exotics-editor-list-component': ExoticEditorListComponent,
    'exotics-editor-item-component': ExoticEditorItem,
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
