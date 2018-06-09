
<template>
   <div>
  <div class="search-field">
    <input type="text" v-model="search" placeholder="Search by name" />
    <select v-model="weaponType">
      <option value="">Any Type</option>
      <option value="Exotic Auto Rifle">Auto Rifle</option>
      <option value="Exotic Fusion Rifle">Fusion Rifles</option>
      <option value="Exotic Grenade Launcher">Grenade Launcher</option>
      <option value="Exotic Hand Cannon">Hand Cannon</option>
      <option value="Exotic Pulse Rifle">Pulse Rifle</option>
      <option value="Exotic Rocket Launcher">Rocket Launcher</option>
      <option value="Exotic Scout Rifle">Scout Rifles</option>
      <option value="Exotic Sniper Rifle">Sniper Rifles</option>
      <option value="Exotic Shotgun">Shotgun</option>
      <option value="Exotic Sidearm">Sidearm</option>
      <option value="Exotic Submachine Gun">Submachine Gun</option>
      <option value="Exotic Sword">Sword</option>
    </select>
    <select v-model="status">
      <option value="All">All</option>
      <option value="Available">Available</option>
      <option value="Unavailable">Unavailable</option>
    </select>
    <!--<label>
       <input type="checkbox" >
      Hide Unavailable
    </label> -->
  </div>
 
      <ul class="exotics">
          <li v-for="e in filteredItems"  v-bind:key="e.name" class="exotic">
          <!-- <li v-for="e in items"  v-bind:key="e.name" class="exotic"> -->
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
/*
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
*/

import Vue from "vue";
export default Vue.extend({
  props: ["items"],
  data() {
    return {
      search: "",
      weaponType: "",
      filteredItems: [],
      status: "All"
    };
  },
  watch: {
    search: function() {
      this.setFilteredItems();
    },
    weaponType: function() {
      this.setFilteredItems();
    },
    status: function() {
      this.setFilteredItems();
    }
  },
  created() {
    this.setFilteredItems();
  },
  //  methods: {
  //   getItems() {
  //     console.log('updating');
  //     axios.get('exotics.json').then(response => {
  //       this.items = response.data;
  //     });
  //   }
  // },
  methods: {
    setFilteredItems(): any {
      if (this.items) {
        var filteredItems = this.items.filter((e: Exotic) => {
          if (!e.name) {
            return false;
          }

          let include = true;

          if (
            this.search.length > 0 &&
            e.name.toLowerCase().indexOf(this.search.toLowerCase()) === -1
          ) {
            include = false;
          }

          if (this.weaponType.length > 0 && e.weaponType !== this.weaponType) {
            include = false;
          }

          let isAvailFlag = this.status === "Available" ? true : false;
          if (this.status !== "All" && isAvailFlag !== e.isAvailable) {
            include = false;
          }

          return include;
          //return false;
          //return true;
        });
        this.filteredItems = filteredItems;
      } else {
        this.filteredItems = [];
      }
    }
  }
});
</script>

<style src="../scss/main.scss"></style>
