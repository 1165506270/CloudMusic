<template>
    <div class="lyric">
        <scroller ref="lyricScroller">
            <p v-for="item in lyric_ctrl" :id="'sum_'+item.sum" :class="{currentLyric:item.sum == currentLyric}">{{item.text||" "}}</p>
        </scroller>
    </div>
</template>
<script>
export default {
    data(){
        return {
            currentLyric:0
        }
    },
    props:{
        lyric:{
            type:String,
            default:''
        }
    },
    computed:{
       lyric_ctrl(){
			var lyricObj=this.lyric;
			var temp=lyricObj.split("[");
			var html=[];
			for(var i=0;i<temp.length;i++)
			{
				var arr=temp[i].split("]");
				var text=(arr[1]);
				var time=arr[0].split(",");
				var temp2=time[0].split(".");
				var ms=temp2[1];//毫秒
				var temp3=temp2[0].split(":");			
				var s=temp3[1];//秒
				var m=temp3[0];//分
				var s_sum=parseInt(m*60)+parseInt(s);
				if(text)
				{
					html.push({text:text,sum:s_sum});
				}	
			}
            return html
		},
        lyricSum(){
            var lyricObj=this.lyric;
			var temp=lyricObj.split("[");
			var sum=[];
			for(var i=0;i<temp.length;i++)
			{
				var arr=temp[i].split("]");
				var text=(arr[1]);
				var time=arr[0].split(",");
				var temp2=time[0].split(".");
				var ms=temp2[1];//毫秒
				var temp3=temp2[0].split(":");			
				var s=temp3[1];//秒
				var m=temp3[0];//分
				var s_sum=parseInt(m*60)+parseInt(s);
				if(text)
				{
					sum.push(s_sum);
				}	
			}
            return sum
        }
    },
    components:{

    },
    methods:{
    },
    mounted(){
        function closest(arr, num){
                var left = 0;
                var right = arr.length - 1;

                while(left <= right){
                    var middle = Math.floor((right + left) / 2);
                    if(right - left <= 1){
                    break;
                    }
                    var val = arr[middle];
                    if(val === num){
                    return arr[middle];
                    }
                    else if(val > num){
                    right = middle;
                    }
                    else{
                    left = middle;
                    }
                }

                var leftValue = arr[left];
                var rightValue = arr[right];
                return rightValue > leftValue ? leftValue : rightValue;
        }
        var time = setInterval(()=>{
            var musicCurrentTime = closest(this.lyricSum,this.$store.state.musicCurrentTime);
            var obj = this.$el.querySelector('#sum_'+musicCurrentTime);
            
            if(this.$route.path.indexOf("/muiscPla") === -1){
                clearInterval(time);
            }
            if(obj){
                this.currentLyric = musicCurrentTime;
                this.$refs.lyricScroller.scrollTo(0,obj.offsetTop-100)
            }
        },500)
    }
}
</script>
<style>
.lyric p{
    text-align: center;
    margin-bottom: 0.5rem;
}
.currentLyric{
    color: #66ccff;
}
</style>
