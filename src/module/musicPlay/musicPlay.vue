<template>
  <div style="height: 100%">
    <!-- <audio controls="controls" :src="musicUrl">  
      <source :src="musicUrl" />  
    </audio>  -->
    <x-header :left-options="{showBack: true}" fiexd :title="musicName"></x-header>
    <music :musicUrl="musicUrl" @skipbackward="skipbackward"></music> 
    <div :style="{backgroundImage:'url('+musicPic+')'}"class="bgPic"></div>
  </div>
</template>
<script>
import { Cell,XHeader  } from 'vux'
import Music from '@/components/music.vue'
 
export default {
  data(){
  	return {
      musicUrl:'',
      musicName:'',
      musicPic: ''
  	}
  },
  components:{
  	Cell,Music,XHeader
  },
  mounted(){
    this.initData()
  },
  methods:{
    initData(){
      var that = this;
      this.$http.get('/proxy/music/songDetail',{params:{ids:that.$route.params.id}})
      .then(function(res){
        console.log(res)
        that.musicName = res.data.songs[0].name;
        that.musicPic = res.data.songs[0].album.picUrl;
        // that.$store.state.title =  res.data.playlist.name;
        that.$nextTick(function(){
          that.$emit('resetScroller')
        })
      })
      this.$http.get('proxy/music/url',{params:{id:that.$route.params.id}})
        .then(function(res){
        that.musicUrl = res.data.data[0].url;
        })
    },
    skipbackward(){
      console.log(this.$store.state.playlist)
      var that = this;
      var palylist = this.$store.state.playlist;
      palylist.forEach(function(v,index){
        if(v.id === that.$route.params.id){
          console.log(index);
        }
      })
    }
  }
}
</script>

<style lang="less">
.bgPic{
  height: 100%;
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
  background-size:auto 100%;
  background-position:center;
  -webkit-filter: blur(8px);
}
</style>