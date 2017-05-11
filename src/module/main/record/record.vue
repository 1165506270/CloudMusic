<template>
    <div>
        <cell v-for="item in playlist" :key="item.song.id" :title="item.song.name" :inline-desc="item.song.ar[0].name+'-'+item.song.al.name" :link="'/muiscPlay/'+item.song.id">
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
    this.$store.state.title = "最近播放"
  },
  methods:{
    initData(){
      var that = this
      console.log(that.$store.state.uid)
       this.$http.get('/proxy/user/record',{params:{uid:that.$store.state.uid,type:1}})
        .then(function(res){
            that.playlist = res.data.weekData;
            that.$store.state.playlist = res.data.weekData;
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