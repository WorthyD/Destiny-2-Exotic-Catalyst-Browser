<template>
<div class="edit-item">
        <div class="form-control form-title">
        <label for="">Name</label>
        <input type="text" v-model.lazy="item.name">
    </div>
    <div class="form-control">
        <label for="">
<input type="checkbox" v-model="item.isAvailable" value="true">

            Is Available        </label>

    </div>
     <div class="form-control">
        <label for="">Thumb</label>
        <input type="text" v-model.lazy="item.thumb">
    </div>
   <div class="form-control">
        <label for="">Type</label>
        <select v-model="item.weaponType">
            <option value="Exotic Auto Rifle">Auto Rifle</option>
            <option value="Exotic Fusion Rifle">Fusion Rifle</option>
            <option value="Exotic Grenade Launcher">Grenade Launcher</option>
            <option value="Exotic Hand Cannon">Hand Cannon</option>
            <option value="Exotic Pulse Rifle">Pulse Rifle</option>
            <option value="Exotic Rocket Launcher">Rocket Launcher</option>
            <option value="Exotic Scout Rifle">Scout Rifle</option>
            <option value="Exotic Sniper Rifle">Sniper Rifle</option>
            <option value="Exotic Shotgun">Shotgun</option>
            <option value="Exotic Sidearm">Sidearm</option>
            <option value="Exotic Submachine Gun">Submachine Gun</option>
            <option value="Exotic Sword">Sword</option>
        </select>
    </div>
      <div class="form-control">
        <label for="">Unlock Category</label>
        <select v-model="item.unlockCategory">
            <option value="">Unknown</option>
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

   <div class="form-control">
        <label for="">Unlock Method</label>
        <input type="text" v-model.lazy="item.unlockMethod">
    </div>
    <div class="form-control">
        <label for="">Unlock Method Desc</label>
        <input type="text" v-model.lazy="item.unlockMethodDesc">
    </div>
    <div class="form-control">
        <label for="">Completion Criteria</label>
        <textarea v-model.lazy="item.completionCriteria"></textarea>
    </div>
     <div class="form-control">
        <label for="">Catalyst Perk</label>
        <textarea v-model.lazy="item.perkDescription"></textarea>
    </div>
</div> 
</template>
<script lang="ts">
import { Exotic } from '../interfaces/exotic';
import Vue from 'vue';
export default Vue.extend({
  props: ['item']
});
</script>
