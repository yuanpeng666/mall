<template>
<!-- 
  tabbar 配置文件：
  path：传入路由转跳地址[String]
  textColor: 传入文字颜色[String]，默认'#f00'
 -->
  <div>
    <router-view></router-view>
    <tabbar>
      <tabbar-item path='/home'>
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <p slot="item-text">主页</p>
      </tabbar-item>
      <tabbar-item path='/category'>
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <p slot="item-text">分类</p>
      </tabbar-item>
      <tabbar-item path='/cart'>
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="">
        <p slot="item-text">购物车</p>
      </tabbar-item>
      <tabbar-item path='/profile'>
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <p slot="item-text">我的</p>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from './Tabbar'
import TabbarItem from './TabbarItem'

export default {
  name: 'MainTabbar',
  components: {
    tabbar,
    TabbarItem
  }
}
</script>

<style>

</style>