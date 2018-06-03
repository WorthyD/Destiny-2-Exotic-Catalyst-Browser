
<template>
   <div>
  <div>
    <input type="text" v-model="search"  />
  </div>
 
      <ul>
          <li v-for="e in filteredList"  v-bind:key="e.name" class="exotic">
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
//https://codepen.io/SitePoint/pen/pPojGY?editors=0010
import axios from "axios";

import { Exotic } from "../interfaces/exotic";
import {
  Vue,
  Component,
  Prop,
  Provide,
  Inject,
  Emit,
  Model
} from "vue-property-decorator";

@Component
export default class ExoticDecorator extends Vue {
  @Provide() items!: Exotic[];

  //  @Inject() search:string;
  @Provide() search: string = "";

  created() {
    console.log("updating");
    axios.get("exotics.json").then(response => {
      this.items = response.data;
    });
  }
  get filteredList() {
    console.log("filtering");
    if (this.items) {
      var filteredItems = this.items.filter(e => {
        if (!e.name) {
          return false;
        }
        console.log(e.name.toLowerCase());
        //return e.name.toLowerCase().includes(this.search.toLowerCase());
        //return false;
        return true;
      });
      console.log(filteredItems);
      return filteredItems;
    } else {
      return [];
    }
  }
}
</script>
<style src="../scss/main.scss"></style>
