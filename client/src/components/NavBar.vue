<template>
  <div class="nav-bar">
    <img src="../assets/full-logo-temp.jpg">
    <div class="nav-bar-links">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/courses">
        Courses
      </router-link>
      <router-link to="/create">
        Create
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-bar-links {
    float: right;
    color: darkslategrey
}
.nav-bar {
    background-color: darkslategrey
}
</style>
