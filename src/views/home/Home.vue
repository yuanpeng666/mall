<template>
  <div id="home">
    <!-- 导航栏 -->
    <navbar class="home-navbar">
      <p slot="center">购物街</p>
    </navbar>
    <!-- 轮播图 -->
    <home-swiper :banners='banners'></home-swiper>
    <!-- 推荐 -->
    <home-recommend :recommend='recommend'></home-recommend>
    <!-- 本周流行 -->
    <home-week-pop ></home-week-pop>
    <!-- tab控制 -->
    <tab-control class="home-tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
    <!-- 商品分类 -->
    <goods-list :goods="goods[goodType].list"></goods-list>
    
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommend from './childComps/HomeRecommend'
  import HomeWeekPop from './childComps/HomeWeekPop'

  import navbar from 'components/common/navbar/Navbar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'


  import {getHomeMultidata, getHomeGoodsdata} from 'network/home'

  export default {
    name: 'Home',
    components: {
      navbar, 
      HomeSwiper,
      HomeRecommend,
      HomeWeekPop,
      TabControl,
      GoodsList
    },
    data(){
      return {
        banners: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        goodType: 'pop'
      }
    },
    created(){
      // 请求多个数据
      this.getHomeMulti()
      //请求商品列表数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      /**
       * 事件处理逻辑
       * 
       */
      tabClick(index){
        switch(index){
          case 0:
            this.goodType = 'pop'
          break;
          case 1:
            this.goodType = 'new'
          break;
          case 2:
            this.goodType = 'sell'
          break;
        }
      },

      /**
       * 数据请求逻辑
       * 
       */
      // 多个数据
      getHomeMulti(){
        getHomeMultidata().then((res) => {
          // console.log(res)
          this.banners = res.data.data.banner.list
          this.recommend = res.data.data.recommend.list
        })
      },
      // 商品列表数据
      getHomeGoods(type){
        // 获取home中最新页数(只是获取到没有更改本身值)
        const page = this.goods[type].page + 1;
        // 发送请求
        getHomeGoodsdata(type,page).then((res) => {
          this.goods[type].list.push(...res.data.data.list)
          // 更新home中最新页数(更改本身值)
          this.goods[type].page += 1;
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding:44px 0 49px;
  }
  .home-navbar{
    position: fixed;
    z-index: 9;
    top:0;
    left:0;
    right:0;
    color:#fff;
    background-color: var(--color-tint);
  }
  .home-tab-control{
    position: sticky;
    top:44px;
  }
</style>
