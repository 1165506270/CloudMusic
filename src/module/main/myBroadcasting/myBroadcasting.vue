<template>
  <div>
    <!--<cell v-for="item in playlist"  :key="item.id" :title="item.name" :inline-desc="item.trackCount+'首'" :link="'/main/songList/'+item.id">
        <img slot="icon" style="height:3rem;width:3rem;margin-right:0.5rem;" :src="item.coverImgUrl" alt="">
    </cell>-->
    <panel header="我订阅的电台" :list="playlist1" type="1"></panel>
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
    this.$store.state.title="我的电台";
  },
  methods:{
    initData(){
      var that = this
      this.$http.get('/proxy/user/record',{params:{uid:that.$store.state.uid,type:1}})
      .then(function(res){
        console.log(res.data);
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