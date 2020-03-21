<template>
  <div id="home">
    <!-- 导航栏 -->
    <navbar class="home-navbar">
      <p slot="center">购物街</p>
    </navbar>
    <tab-control class="home-tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" v-show="tabShow" ref="tabcon1"></tab-control>
    <b-scroll class="home-bs" 
              :pullUpLoad="true"
              :probeType="3"
              ref="homeBS">
      <!-- 轮播图 -->
      <home-swiper :banners='banners' @spImgLoad="spImgLoad"></home-swiper>
      <!-- 推荐 -->
      <home-recommend :recommend='recommend'></home-recommend>
      <!-- 本周流行 -->
      <home-week-pop ></home-week-pop>
      <!-- tab控制 -->
      <tab-control class="home-tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabcon2"></tab-control>
      <!-- 商品分类 -->
      <goods-list :goods="goods[goodType].list"></goods-list>
    </b-scroll>
    <back-top v-show="backTopIsShow" @click.native="backTop"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from './child/HomeSwiper'
  import HomeRecommend from './child/HomeRecommend'
  import HomeWeekPop from './child/HomeWeekPop'

  import navbar from 'components/common/navbar/Navbar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BScroll from 'components/content/bscroll/BScroll'
  import BackTop from 'components/content/backtop/BackTop'


  import {getHomeMultidata, getHomeGoodsdata} from 'network/home'

  export default {
    name: 'Home',
    components: {
      navbar, 
      HomeSwiper,
      HomeRecommend,
      HomeWeekPop,
      TabControl,
      GoodsList,
      BScroll,
      BackTop
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
        goodType: 'pop',
        backTopIsShow: false,
        homeScrollY: 0,
        tabTop: 0,
        tabShow: false
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
    mounted(){
      // 上拉加载商品列表
      this.$refs.homeBS.BScroll.on('pullingUp', () => {
        this.getHomeGoods(this.goodType)
        this.$refs.homeBS.BScroll.finishPullUp()
      })
      this.$refs.homeBS.BScroll.on('scroll', (position) => {
        //返回顶部按钮显示、隐藏
        this.backTopIsShow = -(position.y) > 1000
        //tabShow显示、隐藏
        this.tabShow = -(position.y) > this.tabTop
      })
      //监听商品列表图片加载完成
      this.$bus.$on('goodsImgLoad', () => {
        this.$refs.homeBS.BScroll.refresh()
      })
    },
    activated(){
      this.$refs.homeBS.BScroll.scrollTo(0, this.homeScrollY ,0)
      this.$refs.homeBS.BScroll.refresh()
    },
    deactivated(){
      // 记录scroll的Y值
      this.homeScrollY = this.$refs.homeBS.BScroll.y
    },
    methods: {
      /**
       * 事件处理逻辑
       * 
       */
      // 流行、新款、精选点击
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
        this.$refs.tabcon1.isActive = index
        this.$refs.tabcon2.isActive = index
      },
      // 点击返回顶部
      backTop(){
        this.$refs.homeBS.BScroll.scrollTo(0, 0, 500)
      },
      // 轮播图加载完成
      spImgLoad(){
        this.tabTop = this.$refs.tabcon2.$el.offsetTop;
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
        }).catch((err) => {
          console.log(err)
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
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
  .home-navbar{
    color:#fff;
    background-color: var(--color-tint);
    box-shadow: 0 1px 3px var(--color-tint);
  }
  .home-tab-control{
    position: sticky;
    top:44px;
  }
  .home-bs{
    position: absolute;
    top:44px;
    bottom:49px;
    left:0;
    right:0;
    overflow: hidden;
  }
</style>
