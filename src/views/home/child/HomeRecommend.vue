<template>
  <div>
    <ul class="recommend">
      <li v-for="(item, index) in recommend" :key="index">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title">
          <p>{{item.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  components: {

  },
  props: {
    recommend: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    border-bottom: 8px solid #e0e0e0;
    padding-top: 8px;
  }
  .recommend li{
    padding: 5px;
    flex: 1;
  }
  .recommend li img{
    width: 100%;
  }
  .recommend li p{
    font-size: 14px;
    padding: 8px 0 16px;
  }
</style>