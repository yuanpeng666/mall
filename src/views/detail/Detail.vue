<template>
  <div>
    <detail-nav></detail-nav>
    <detail-swiper :bannerImages="topImages"></detail-swiper>
  </div>
</template>

<script>
  import detailNav from './child/DetailNav'
  import detailSwiper from './child/DetailSwiper'


  import {getDetaildata} from 'network/detail.js'

  export default {
    name: 'Detail',
    components:{
      detailNav,
      detailSwiper
    },
    data(){
      return {
        id: 0,
        topImages: []
      }
    },
    created(){
      // 接收商品ID，并保存
      this.id = this.$route.params.id
      //请求详情数据
      getDetaildata(this.id).then((res) => {
        this.topImages = []
        console.log(res)
        // 轮播图数据处理，保存
        this.topImages = res.data.result.itemInfo.topImages
        
      }).catch(() => {
        alert('数据加载失败请刷新')
      })
    }
  }
</script>

<style scoped>
  
</style>
