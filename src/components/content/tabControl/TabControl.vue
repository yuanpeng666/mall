<template>
  <div class="tab-control">
    <div class="tab-control-item"
    v-for="(item, index) in titles"
    :key="index" @click='tabClick(index)'
    :class="{active: isActive === index}" >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      defaule(){
        return []
      }
    }
  },
  data(){
    return {
      isActive: 0
    }
  },
  methods: {
    // 当前点击的tab
    tabClick(index){
      this.isActive = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
    height: 50px;
    line-height: 50px;
  }
  .tab-control-item span{
    padding:5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 2px solid var(--color-tint);
  }
</style>