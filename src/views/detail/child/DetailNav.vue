<template>
  <navbar>
    <div class="nav-back" slot="left" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div class="nav-center" slot="center">
      <p class="nav-center-item" 
      v-for="(item, index) in navTextList" 
      :key="index"
      @click="itemClick(index)"
      :class="{active: isActive == index}"
      >{{item}}</p>
    </div>
  </navbar>
</template>

<script>
  import navbar from 'components/common/navbar/Navbar'

  export default {
    name: 'DetailNav',
    components: {
      navbar
    },
    data(){
      return {
        navTextList: ['商品', '参数', '评论', '推荐'],
        isActive: 0
      }
    },
    created(){
      this.id = this.$route.params.id
      console.log(this.id)
    },
    methods: {
      backClick(){
        this.$router.back()
      },
      itemClick(index){
        this.isActive = index
      }
    }
  }
</script>

<style scoped>
  .nav-center{
    display: flex;
  }
  .nav-center-item{
    flex: 1;
    font-size: 14px;
  }
  .nav-back img{
    margin-top: 12px;
  }
  .active{
    color: var(--color-tint);
  }
</style>