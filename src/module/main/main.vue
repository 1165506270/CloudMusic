<template>
  <div>
    <header><h1>我的音乐</h1></header>
    <router-view></router-view>
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
import { Tabbar, TabbarItem } from 'vux'

export default {
  data(){
  	return {
  	}
  },
  components:{
  	Tabbar, TabbarItem
  },
  methods:{

  }
}
</script>

<style lang="less">

</style>