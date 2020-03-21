<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style scoped>
  .back-top{
    position: fixed;
    bottom:52px;
    right:10px;
    width: 50px;
    z-index: 999;
  }
  .back-top img{
    width: 100%;
  }
</style>