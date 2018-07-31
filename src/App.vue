<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "../style/scss/common.scss";
export default {
  name: 'App'
}
</script>

<style lang="scss" scope>
//$color-red:red;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: $color-red;
}

</style>
