<template>
	<div>
		<audio ref="audio" :src="musicUrl" autoplay="true" @canplay="canplay($event)" @timeupdate="timeupdate($event)"></audio>
      	<box  gap="10px">
      		<range :value="percent" @on-change="playChange" class="palyRange"></range>
      	</box>
      	<div class="controls">
      		<x-icon size="40" type="ios-skipbackward-outline" @click="skipbackward"  class="xicon-fff" ></x-icon>
      		<span class="quan"  v-if="palyState" @click="palyMusic"><x-icon size="30" type="ios-pause-outline"  class="xicon-fff"></x-icon></span>
      		<span class="quan" v-else @click="palyMusic"><x-icon size="30" style="marginLeft:5px;" type="ios-play-outline"  class="xicon-fff"></x-icon></span>
      		<x-icon type="ios-skipforward-outline" @click="skipforward" size="40"  class="xicon-fff"></x-icon>
      	</div>
		
      	<!-- <x-button text="播放"  @click.native="stopPlay" type="primary">11</x-button> -->
	</div>
</template>
<script>
import { XProgress, Box,XButton,Range } from 'vux' 
	export default {
		data(){
			return {
				percent:0,
				palyState:true
			}
		},
		props:{
			musicUrl:String,
			
		},
		computed:{
			maxTime(){
				return this.$refs['audio'].duration
			}
			// percent(){
			// 	return this
			// }
		},
		components:{
			XProgress, Box,XButton,Range
		},
		methods:{
			canplay(e){
				console.log(e)
			},
			timeupdate(e){
				if(this.$refs['audio']){
					this.percent = this.$refs['audio'].currentTime/(this.maxTime/100);
					var t = this.$refs['audio'].currentTime;
					var maxT = this.maxTime
					this.$el.querySelector('.range-min').innerHTML=Math.floor(t/60)+":"+(t%60/100).toFixed(2).slice(-2)
					this.$el.querySelector('.range-max').innerHTML=Math.floor(maxT/60)+":"+(maxT%60/100).toFixed(2).slice(-2)
				}
			},
			stopPlay(){
				this.$refs['audio'].pause();
				this.$emit("playingChange");
			},
			playChange(v){
				if(this.$refs['audio'].currentTime - v/100*this.maxTime > 2 || this.$refs['audio'].currentTime - v/100*this.maxTime < -2){
					this.$refs['audio'].currentTime = v/100*this.maxTime;
				}
			},
			palyMusic(){
				if(!this.palyState){
					this.$refs['audio'].play()
					this.palyState = true
				}else{
					this.$refs['audio'].pause()
					this.palyState = false
				}
				this.$emit("playingChange");
			},
			skipforward(){
				this.$emit('skipforward');
			},
			skipbackward(){
				this.$emit('skipbackward');
			}
		},
		mounted(){

		}
	}
</script>
<style>
	.range-handle{
		height: 16px !important;
		width: 16px !important;
		top:-8px !important;
	}
	.range-handle::before{
		content: '';
		position:absolute;
		width: 4px;
		height: 4px;
		background: red;
		border-radius: 4px;
		top:6px;
		left: 6px;
	}
	.controls{
		/*display: inline-block;*/
		/*margin:0 auto;*/
		text-align: center;
		font-size: 20px;
	}
	.xicon-fff{
		fill: #F3F3FF;
		vertical-align: middle;
		margin-top: -6px;
	}
	.quan{
		display: inline-block;
		width: 40px;
		height: 40px;
		border: 2px solid #F3F3FF;
		border-radius: 40px;
		line-height: 40px;
	}
	.palyRange .range-min,.palyRange .range-max{
		color:#fff;
	}
</style>