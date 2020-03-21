<template>
  <swiper class="top-images">
    <swiper-item v-for="(item, index) in bannerImages" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import swiper from 'components/common/swiper/Swiper'
  import swiperItem from 'components/common/swiper/SwiperItem'

  export default {
    name: 'DetailSwiper',
    props: {
      bannerImages: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      swiper,
      swiperItem
    }
  }
</script>

<style scoped>
  .top-images{
    height: 400px;
    text-align: center
  }
  .top-images img{
    width: 100%;
  }
</style>