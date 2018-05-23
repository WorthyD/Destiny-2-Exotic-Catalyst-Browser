
<template>
    <div>
      <ul>
        <template v-for="e in items">
          <li>
            <img :src="e.thumb" alt=""> 
              <h3>{{e.name}} <span v-if="e.isAvailable">Available</span><span v-else>Unavailable</span></h3>
              <h4>{{e.weaponType}}</h4>
              <p>{{e.unlockMethod}}</p>
              <p>{{e.completionCriteria}}</p>
              <p>{{e.perkDescription}}</p>
          </li>
        </template>
      </ul>
    </div>
</template>

<script lang="ts">
import axios from "axios";

import { Exotic } from "../interfaces/exotic";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ExoticDecorator extends Vue {
  @Prop() items!: Exotic[];

  created() {
    axios.get("exotics.json").then(response => {
      this.items = response.data;
    });
  }
}
/*
export default Vue.extend({
  props: ["name", "initialEnthusiasm"],
  data() {
    return {
      items: []
    };
  },
  created() {
    axios.get("exotics.json").then(response => {
      this.items = response.data;
    });
  },
  methods: {},
  computed: {}
});
//source https://www.reddit.com/r/DestinyTheGame/comments/8j9814/catalyst_guide_need_help/
*/
</script>


<style lang="scss" scoped>
div{
  padding:20px;
}
@import '../scss/main.scss';

</style>