<template>
  <div>
    <!-- <header><h1>我的音乐</h1></header> -->
    <x-header :left-options="{showBack: false}" fiexd  title="我的音乐"></x-header>
    <scroller ref="scroller" height="-93" :lock-x="true" :scrollbarY="true" ><router-view @resetScroller="resetScroller"></router-view></scroller>
    <tabbar>
      <tabbar-item>
        <img slot="icon" >
        <span slot="label">发现音乐</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon">
        <span slot="label">我的音乐</span>
      </tabbar-item>
      <tabbar-item selected>
        <img slot="icon" >
        <span slot="label">朋友</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon">
        <span slot="label">账号</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem, Scroller} from 'vux'

export default {
  data(){
  	return {
  	}
  },
  components:{
  	XHeader,Tabbar, TabbarItem,Scroller
  },
  methods:{
    resetScroller(){
      this.$refs['scroller'].reset()
    }
  }
}
</script>

<style lang="less">

</style>