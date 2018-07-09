<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>
<script>
import Navbar from '@/components/Nav.vue';
export default {
  components: {
    Navbar
  },
  mounted() {
    this.$Progress.finish();
  },
  created () {
  //  [App.vue specific] When App.vue is first loaded start the progress bar
  this.$Progress.start()
  //  hook the progress bar to start before we move router-view
  this.$router.beforeEach((to, from, next) => {
    //  does the page we want to go to have a meta.progress object
    if (to.meta.progress !== undefined) {
      let meta = to.meta.progress
      // parse meta tags
      this.$Progress.parseMeta(meta)
    }
    //  start the progress bar
    this.$Progress.start()
    //  continue to next page
    next()
  })
  //  hook the progress bar to finish after we've finished moving router-view
  this.$router.afterEach((to, from) => {
    //  finish the progress bar
    this.$Progress.finish()
  })
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
    font-family: "Dosis", sans-serif;
    @import url("https://fonts.googleapis.com/css?family=Dosis");
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $main-color;
}
@media screen and (min-width: 768px) {
    body {
        max-width: 100vw;
        max-height: 100vh;
        overflow: hidden;
    }
}
</style>
