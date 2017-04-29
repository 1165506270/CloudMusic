<template>
  <div>
    <!-- <audio controls="controls" :src="musicUrl">  
      <source :src="musicUrl" />  
    </audio>  -->
    <music :musicUrl="musicUrl"></music> 
  </div>
</template>

<script>
import { Cell } from 'vux'
import Music from '@/components/music.vue'
 
export default {
  data(){
  	return {
      musicUrl:''
  	}
  },
  components:{
  	Cell,Music
  },
  mounted(){
    this.initData()
  },
  methods:{
    initData(){
      var that = this
      console.log(that.$store.state.uid)
      this.$http.get('/proxy/music/songDetail',{params:{ids:that.$route.params.id}})
      .then(function(res){
        that.musicUrl = res.data.songs[0].mp3Url;
        // that.$store.state.title =  res.data.playlist.name;
        that.$nextTick(function(){
          console.log(11)
          that.$emit('resetScroller')
        })
      })
    }
  }
}
</script>

<style lang="less">

</style>