<template>
  <div>
    <cell v-for="item in playlist"  :key="item.id" :title="item.name" :inline-desc="item.trackCount+'首'">
        <img slot="icon" style="height:3rem;width:3rem;margin-right:0.5rem;" :src="item.coverImgUrl" alt="">
    </cell>
  </div>
</template>

<script>
import { Cell } from 'vux'

export default {
  data(){
  	return {
      playlist:[]
  	}
  },
  components:{
  	Cell
  },
  mounted(){
    this.initData()
  },
  methods:{
    initData(){
      var that = this
      this.$http.get('/proxy/user/playlist',{params:{uid:250092043}})
      .then(function(res){
        
        that.playlist = res.data.playlist
        console.log(that.playlist)
      })
    }
  }
}
</script>

<style lang="less">

</style>