<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- 如果是当前地址？设置颜色 : 不设置颜色 -->
    <div :style="isActive? {color:textColor} : {}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>

export default {
  name: 'TabbarItem',
  props: {
    path: String,
    // 默认颜色 红色
    textColor: {
      type: String,
      default: '#f00'
    }
  },
  data(){
    return {
      // isActive: false
    }
  },
  computed: {
    isActive(){
      // 检测，是否是当前地址
      return this.$route.path.indexOf(this.path) != -1;
    }
  },
  components: {
    
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
.tabbar-item{
  flex: 1;
  text-align: center;
}
.tabbar-item img{
  width: 20px;
  display: block;
  margin:0 auto;
  margin-top: 6px;
  margin-bottom: 2px;
}
.tabbar-item p{
  font-size: 14px;
}
/* .rad{
  color:#f00;
} */
</style>
