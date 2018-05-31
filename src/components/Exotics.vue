
<template>
   <div>
  <div>
    <input type="text" v-model="search" />
  </div>
 
      <ul>
          <li v-for="e in filteredList" class="exotic">
            <img :src="e.thumb" alt=""> 
            <div class="exotic-info">  
              <h3 class="title">{{e.name}} <span v-if="e.isAvailable" class="available">Available</span><span class="unavailable" v-else>Unavailable</span></h3>
              <h4 class="sub-title">{{e.weaponType}}</h4>
              <p class="summary unlock-proper">{{e.unlockMethod}}</p>
              <p class="summary">{{e.unlockMethodDesc}}</p>
              <div class="unlock-info">
                <div>              
                  <h5>Completion Criteria</h5>
                  <p  class="summary" v-html="e.completionCriteria"></p>
                </div>

<div>              
  <h5>Catalyst Perk</h5>
  <p class="summary" v-html="e.perkDescription"></p>
</div>

              </div>
            </div>

          </li>
      </ul>
    </div>
</template>

<script lang="ts">
import axios from 'axios';

import { Exotic } from '../interfaces/exotic';
import { Vue, Component, Prop, Provide, Inject } from 'vue-property-decorator';

@Component
export default class ExoticDecorator extends Vue {
  @Prop() items!: Exotic[];

//  @Inject() search:string;
  @Provide() search: string = '';

  created() {
    axios.get('exotics.json').then(response => {
      this.items = response.data;
    });
  }
  filteredList() {
    return this.items.filter(e => {
      if (!e.name) {
        return false;
      }
      console.log(e.name.toLowerCase());
      //return e.name.toLowerCase().includes(this.search.toLowerCase());
      //return false;
    });
  }
}
</script>
<style src="../scss/main.scss"></style>