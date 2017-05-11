<template>
  <div>
    <cell v-for="item in playlist"  :key="item.id" :title="item.name" :inline-desc="item.ar[0].name+'-'+item.al.name" :link="'/muiscPlay/'+item.id">
      <x-icon solt="child" type="ios-more-outline" style="margin-top:5px;" @click="showMenu(item)"></x-icon>
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
      console.log(that.$store.state.uid)
      this.$http.get('/proxy/playlist/detail',{params:{id:that.$route.params.id}})
      .then(function(res){
        
        that.playlist = res.data.playlist.tracks;
        that.$store.state.title =  res.data.playlist.name;
        that.$store.state.playlist = res.data.playlist.tracks;
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