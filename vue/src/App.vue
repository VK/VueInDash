<template>
  <div id="vue-app" class="noselect">
    <div class="centerBox" v-if="isLoading">
      <div class="centerBoxHeadline">Loading</div>
    </div>
    <div class="centerBox" v-if="hasError">
      <div class="centerBoxHeadline error">
        <p>Critical Error</p>
        <p class="centerBoxText">{{errorNote}}</p>
      </div>
    </div>

    <IoExample />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IoExample from "./components/IoExample.vue";

@Component({
  components: {
    IoExample
  }
})
export default class App extends Vue {
  get isLoading() {
    return this.$store.state.loading && !this.$store.state.error;
  }
  get hasError() {
    return this.$store.state.error;
  }
  get errorNote() {
    return this.$store.state.errorNote;
  }
}
</script>

<style scoped>
#vue-app {
  color: #222;
  margin: 20px;
}

.centerBox {
  opacity: 0.7;
  filter: alpha(opacity=20);
  background-color: #fff;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  position: fixed;
}

.centerBoxHeadline.error {
  color: rgb(211, 15, 15);
  border-color: rgb(211, 15, 15);
}

.centerBoxHeadline {
  font-weight: 500;
  margin: auto;
  min-width: 300px;
  border: 3px solid #ff6600;
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 30px;
}
.centerBoxText {
  font-weight: 400;
  font-size: 20px;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
</style>
