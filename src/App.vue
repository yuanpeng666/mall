<template>
  <div id="app">
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from 'components/content/mainTabbar/MainTabbar'

  export default {
    name: 'App',
    components: {
      MainTabbar,
    }
  }
</script>

<style>
  /* 引入初始化css */
  @import "assets/css/base.css";

</style>
