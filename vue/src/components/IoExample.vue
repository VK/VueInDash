<template>
  <div class="ioexample">
    <b-button @click="loadData">Button</b-button>
    <b-table striped hover :items="items" small sticky-header></b-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DashRequest } from "../store/store";
import { BButton, BTable } from "bootstrap-vue";
Vue.component("b-button", BButton);
Vue.component("b-table", BTable);

@Component
export default class UoExample extends Vue {
  get items() {
    return this.$store.state.callbackA;
  }
  public loadData() {
    this.$store.dispatch(
      "get_dash_data",
      new DashRequest("callbackA", [
        {
          color: "red",
          value: "#f00"
        },
        {
          color: "green",
          value: "#0f0"
        },
        {
          color: "blue",
          value: "#00f"
        },
        {
          color: "cyan",
          value: "#0ff"
        },
        {
          color: "magenta",
          value: "#f0f"
        },
        {
          color: "yellow",
          value: "#ff0"
        },
        {
          color: "black",
          value: "#000"
        }
      ])
    );
  }
}
</script>
