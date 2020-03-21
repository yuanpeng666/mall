<template>
  <div class="wrapper" ref="bs">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'BScroll',
  data(){
    return {
      BScroll: null
    }
  },
  props: {
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 0
    }
  },
  mounted(){
    this.BScroll = new BScroll(this.$refs.bs, {
      click: true,
      pullUpLoad: this.pullUpLoad,
      probeType: this.probeType
    })
  }
}
</script>

<style scoped>

</style>