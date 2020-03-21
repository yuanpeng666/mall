<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" @load="spImgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import swiper from 'components/common/swiper/Swiper'
  import swiperItem from 'components/common/swiper/SwiperItem'

  export default {
    name: 'HomeSwiper',
    components: {
      swiper,
      swiperItem
    },
    props: {
      banners: {
        type: Array,
        defaule(){
          return []
        }
      }
    },
    methods: {
      spImgLoad(){
        this.$emit('spImgLoad')
      }
    }
  }
</script>

<style scoped>

</style>