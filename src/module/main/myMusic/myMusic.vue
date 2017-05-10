<template>
  <div>
    <!--<cell v-for="item in playlist"  :key="item.id" :title="item.name" :inline-desc="item.trackCount+'首'" :link="'/main/songList/'+item.id">
        <img slot="icon" style="height:3rem;width:3rem;margin-right:0.5rem;" :src="item.coverImgUrl" alt="">
    </cell>-->
    <panel header="我创建的歌单" :list="playlist1" type="1"></panel>
  </div>
</template>

<script>
import { Cell,Panel } from 'vux'

export default {
  data(){
  	return {
      playlist:[],
      playlist1:[]
  	}
  },
  components:{
  	Cell,Panel
  },
  mounted(){
    this.initData();
    this.$store.state.title="我的音乐";
  },
  methods:{
    initData(){
      var that = this
      this.$http.get('/proxy/user/playlist',{params:{uid:that.$store.state.uid}})
      .then(function(res){
        that.playlist = res.data.playlist;
        res.data.playlist.forEach(function(item) {
          var obj = {};
          obj.url = '/main/songList/'+item.id;
          obj.src = item.coverImgUrl;
          obj.title = item.name;
          obj.desc = item.trackCount+'首';
          that.playlist1.push(obj);
        });
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