<template>
  <div>
    <cell v-for="item in playlist"  :key="item.id" :title="item.name" :inline-desc="item.trackCount+'首'" :link="'/main/songList/'+item.id">
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
    this.initData();
    this.$store.state.title="我的音乐";
  },
  methods:{
    initData(){
      var that = this
      console.log(that.$store.state.uid)
      this.$http.get('/proxy/user/playlist',{params:{uid:that.$store.state.uid}})
      .then(function(res){
        
        that.playlist = res.data.playlist
        console.log(that.playlist)
        that.$nextTick(function(){
          that.$emit('resetScroller')
        })
      })
    }
  }
}
</script>

<style lang="less">

</style>