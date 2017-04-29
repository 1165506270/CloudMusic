<template>
	<div>
		<audio ref="audio" :src="musicUrl" autoplay="true" @canplay="canplay($event)" @timeupdate="timeupdate($event)"></audio>
      	<box  gap="10px">
      		<range v-model="percent" @change="playChange"></range>
      	</box>

      	<span v-if="palyState" @click="palyMusic"><x-icon type="pause"  class="icon-red"></x-icon></span>
      	<span v-else @click="palyMusic"><x-icon type="play"  class="icon-red"></x-icon></span>
      	
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
				this.percent = this.$refs['audio'].currentTime/(this.maxTime/100);
				var t = this.$refs['audio'].currentTime;
				var maxT = this.maxTime
				this.$el.querySelector('.range-min').innerHTML=Math.floor(t/60)+":"+(t%60/100).toFixed(2).slice(-2)
				this.$el.querySelector('.range-max').innerHTML=Math.floor(maxT/60)+":"+(maxT%60/100).toFixed(2).slice(-2)
			},
			stopPlay(){
				this.$refs['audio'].pause()
			},
			playChange(v){
				console.log(v)
				this.$refs['audio'].currentTime = v/100*this.maxTime
			},
			palyMusic(){
				if(!this.palyState){
					this.$refs['audio'].play()
					this.palyState = true
				}else{
					this.$refs['audio'].pause()
					this.palyState = false
				}
				

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
</style>