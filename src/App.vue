<template>
  <div id="app">
    <Wrap/>
  </div>
</template>

<script>
import Wrap from "./Wrap/index.vue";

export default {
  name: "App",
  components: {
    Wrap
  },
};
</script>

<style>
  #app{
    margin: 0;
    padding: 0;
  }
  ul li{
      list-style: none;
    }
</style>
