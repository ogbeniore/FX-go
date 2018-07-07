<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Nav.vue';
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import "assets/variables";
body {
    color: $black;
    display: grid;
    justify-content: center;
    margin: 0;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $main-color;
}
</style>
