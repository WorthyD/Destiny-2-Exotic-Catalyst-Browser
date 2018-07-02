<template>
<div :if="items" class="edit-exotics">
<div v-for="e in items" v-bind:key="e.name" class="item">
        <exotics-editor-item-component  :item="e" />
</div>

<!-- <button v-on:click="copyJSON()"></button>
<input type="hidden" id="exotic-info"> -->
<textarea>{{items}}</textarea>
</div>

</template>
<script lang="ts">
import { Exotic } from '../interfaces/exotic';
import Vue from 'vue';

import ExoticEditorItem from './exotic-editor-item.vue';
export default Vue.extend({
  props: ['items'],
  components: {
    'exotics-editor-item-component': ExoticEditorItem
  },
  methods: {
    copyJSON(): any {
      console.log('copy');
      const jsonElm = document.getElementById('exotic-info');
      //   jsonElm.select();
      document.execCommand('copy');

    }
  }
});
</script>

<style src="../scss/main.scss"></style>