<template>
  <div>
    <!-- <header><h1>我的音乐</h1></header> -->
    <x-header :left-options="{showBack: title!=='我的音乐'}" fiexd  :title="title"></x-header>
    <scroller ref="scroller" :height="'100%-96'" style="margin-top:46px;"><router-view @resetScroller="resetScroller"></router-view></scroller>
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
import { XHeader, Tabbar, TabbarItem} from 'vux'


export default {
  data(){
  	return {
  	}
  },
  computed:{
    title(){
      return this.$store.state.title
    }
  },
  components:{
  	XHeader,Tabbar, TabbarItem
  },
  mounted(){
    this.$store.state.scroller = this.$refs['scroller'];
  },
  methods:{
    resetScroller(){
        console.log(111)
        this.$refs.scroller.resize()
    }
  }
}
</script>

<style lang="less">

</style>