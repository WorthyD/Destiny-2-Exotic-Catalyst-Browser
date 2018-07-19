
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
           <select v-model="unlockCategory" placeholder="Unlock Activity">
            <option value="">All Activities</option>
            <option value="PvE">PvE</option>
            <option value="PvP">PvP</option>
            <option value="Strikes">Strikes</option>
            <option value="Raids">Raids</option>
            <option value="Quests">Quests</option>
            <option value="Adventures">Adventures</option>
            <option value="Faction Rallies">Faction Rallies</option>
            <option value="Other">Other</option>
       </select>
 
  </div>
 
      <!-- <ul class="exotics"> -->
        <transition-group class="exotics" name="list" tag="ul" v-bind:css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave">
          <li v-for="e in filteredItems"  v-bind:key="e.name" class="exotic">
          <!-- <li v-for="e in items"  v-bind:key="e.name" class="exotic"> -->
            <img :src="e.thumb" alt=""> 
            <div class="exotic-info">  
              <div class="mb-1">
                <h3 class="title">{{e.name}} <span v-if="e.isAvailable" class="available">Available</span><span class="unavailable" v-else>Unavailable</span></h3>
                <h4 class="sub-title">{{e.weaponType}}</h4>
              </div>
              <div  class="mb-1" v-if="e.unlockMethod">
                <h5>Unlock Method</h5>
                <p class="summary unlock-proper">{{e.unlockMethod}}</p>
                <p class="summary">{{e.unlockMethodDesc}}</p>
              </div>

              <div class="unlock-info">
                <div v-if="e.completionCriteria">              
                  <h5>Completion Criteria</h5>
                  <p  class="summary" v-html="e.completionCriteria"></p>
                </div>

<div v-if="e.perkDescription">                
  <h5>Catalyst Perk</h5>
  <p class="summary" v-html="e.perkDescription"></p>
</div>

              </div>
            </div>

          </li>
        </transition-group>
      <!-- </ul> -->

    </div>
</template>

<script lang="ts">
//https://codepen.io/SitePoint/pen/pPojGY?editors=0010
import axios from 'axios';
import  Velocity from 'velocity-animate';  

import { Exotic } from '../interfaces/exotic';

import Vue from 'vue';
export default Vue.extend({
  props: ['items'],
  data() {
    return {
      search: '',
      weaponType: '',
      filteredItems: [],
      status: 'All',
      unlockCategory: ''
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
    },
    unlockCategory: function() {
      this.setFilteredItems();
    }
  },
  created() {
    this.setFilteredItems();
  },
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

          let isAvailFlag = this.status === 'Available' ? true : false;
          if (this.status !== 'All' && isAvailFlag !== e.isAvailable) {
            include = false;
          }

          if (
            this.unlockCategory !== '' &&
            e.unlockCategory !== this.unlockCategory
          ) {
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
    },
    enter: function(el:any, done:any) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 1, height: '1.6em' }, { complete: done });
      }, delay);
    },
    leave: function(el:any, done:any) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    }
  }
});
</script>

<style src="../scss/main.scss"></style>
