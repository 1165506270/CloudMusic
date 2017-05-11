<template>
  <div style="height: 100%" class="musicPlay">
    <!-- <audio controls="controls" :src="musicUrl">  
      <source :src="musicUrl" />  
    </audio>  -->
    <x-header :left-options="{showBack: true}" fiexd style="background:rgba(53,73,94,0.2)">
      <div>
        <p style="line-height:25px;font-size:14px;margin:0">{{musicName}}</p>
        <p style="line-height:15px;font-size:12px;">{{artistName}}</p>  
      </div>
    </x-header>
    <div class="playBody">
      <div class="lyricBox" @click="showLyric=!showLyric">
      <div class="record" v-show="!showLyric" :class={animationPlay:playing,animationStop:!playing}>
        <img :src="musicPic">
      </div>
        <lyric :lyric="lyric" v-show="showLyric"></lyric>
      </div>
      
      <music :musicUrl="musicUrl" @skipbackward="skipbackward" @playingChange="playingChange" @skipforward="skipforward" class="musicCtr"></music> 
    </div>
    
    <div :style="{backgroundImage:'url('+musicPic+')'}" class="bgPic"></div>
  </div>
</template>
<script>
import { Cell,XHeader  } from 'vux'
import Music from '@/components/music.vue'
import Lyric from '@/components/lyric.vue'
 
export default {
  data(){
  	return {
      musicUrl:'',
      musicName:'',
      musicPic: '',
      playing:true,
      artistName:'',
      lyric:'',
      showLyric:false
  	}
  },
  components:{
  	Cell,Music,XHeader,Lyric
  },
  mounted(){
    this.initData()
  },
  methods:{
    initData(){
      var that = this;
      // this.$http.get('/proxy/music/songDetail',{params:{ids:that.$route.params.id}})
      // .then(function(res){
      //   console.log(res.data)
      //   that.musicName = res.data.songs[0].name;
      //   that.musicPic = res.data.songs[0].album.picUrl;
      //   that.artistName = res.data.songs[0].artists[0].name;
      //   that.$nextTick(function(){
      //     that.$emit('resetScroller')
      //   })
      // })
      this.$http.get('/proxy/song/detail',{params:{ids:that.$route.params.id}})
        .then(function(res){
          that.musicName = res.data.songs[0].name;
          that.musicPic = res.data.songs[0].al.picUrl;
          that.artistName = res.data.songs[0].ar[0].name;
          that.$nextTick(function(){
            that.$emit('resetScroller')
          })
      })
      this.$http.get('proxy/music/url',{params:{id:that.$route.params.id}})
        .then(function(res){
        that.musicUrl = res.data.data[0].url;
      })
      this.$http.get('proxy/lyric',{params:{id:that.$route.params.id}})
        .then(function(res){
          console.log(res.data)
          that.lyric = res.data.lrc.lyric
        })
    },
    skipbackward(){
      var that = this;
      var palylist = this.$store.state.playlist;
      palylist.every(function(v,index,ar){
        if(v.id == that.$route.params.id){
          var muiscId = that.$route.params.id;
          if(ar[index-1]){
             var muiscId = ar[index-1].id;
          }else{
            var muiscId = ar[ar.length-1].id
          }
          that.$router.replace('/muiscPlay/'+muiscId);
          that.initData()
          return false;
        }
        return true;
      })
    },
    skipforward(){
      var that = this;
      var palylist = this.$store.state.playlist;
      palylist.every(function(v,index,ar){
        if(v.id == that.$route.params.id){
          var muiscId = that.$route.params.id;
          if(ar[index+1]){
             var muiscId = ar[index+1].id;
          }else{
            var muiscId = ar[0].id
          }
          that.$router.replace('/muiscPlay/'+muiscId);
          that.initData()
          return false;
        }
        return true;
      })
    },
    playingChange(){
      this.playing = !this.playing;
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
  filter: blur(20px);
}
.lyricBox{
  position: relative;
  height: 20rem;
  margin-top: 5rem;
}
.record{
  height:12rem;
  width:12rem;
  border:2rem solid #111111;
  border-radius:12rem;
  overflow:hidden;
  margin: 5rem auto;
 animation:change 8s linear infinite;
}
.record img{
  width:100%;
  height:100%;
}
.animationPlay{
  animation-play-state: running;
}
.animationStop{
  animation-play-state: paused;
}
 @keyframes change {
     0%{
       transform:rotate(0deg);
    }
     50% {
        transform:rotate(180deg);
     }
     100% {
        transform:rotate(360deg);
     }
 }
.musicPlay .vux-header .vux-header-left a,.musicPlay .vux-header .vux-header-left .left-arrow:before{
  color:#fff;
  border-color:#fff;
}
.musicCtr{
  width: 100%;
  position: absolute;
  bottom: 3rem;
}
</style>