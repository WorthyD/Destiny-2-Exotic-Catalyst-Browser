
<template>
    <div>
      <ul>
        <template v-for="e in items">
        <li>
          {{e.name}}
          </li>
        </template>

      </ul>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

import { Exotic } from "../interfaces/exotic";

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
</script>

