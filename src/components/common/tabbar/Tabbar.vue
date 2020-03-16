<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'Tabbar',
  components: {
    
  }
}
</script>

<style>
  .tabbar{
    display: flex;
    height: 49px;
    position: fixed;
    left:0;
    right:0;
    bottom: 0;
    background-color: #f0f0f0;
    box-shadow: 0 -2px 5px #ddd;
  }
</style>
