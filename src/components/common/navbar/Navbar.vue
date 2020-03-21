<template>
  <div class="navbar">
    <div class="navbar-l"><slot name="left"></slot></div>
    <div class="navbar-c"><slot name="center"></slot></div>
    <div class="navbar-r"><slot name="right"></slot></div>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  components: {

  }
}
</script>

<style scoped>
  .navbar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .navbar-l{
    width: 60px;
  }
  .navbar-c{
    flex: 1;
  }
  .navbar-r{
    width: 60px;
  }
</style>