<template>
  <div class="goods-item">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt="">
      <p>{{goodsItem.title}}</p>
      <div>
        <span class="price">￥{{goodsItem.price}}</span>
        <span class="cfav">{{goodsItem.cfav}}</span>
      </div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .goods-item{
    text-align: center;
    padding:3px;
    width: 50%;
    padding-bottom: 10px;
  }
  .goods-item img{
    width: 100%;
    border-radius: 4px;
  }
  .goods-item p{
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    padding-top: 6px;
  }
  .price, .cfav{
    font-size: 12px;
  }
  .price{
    color: var(--color-tint);
  }
  .cfav{
    position: relative;
    padding-left: 20px;
  }
  .cfav::before{
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background-image: url(~assets/img/common/collect.svg);
    background-size: 100% auto;
    position: absolute;
    left:4px;
    top:-1px;
  }
</style>