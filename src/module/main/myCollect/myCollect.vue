<template>
    <div>
        <tab :line-width=2 active-color='#fc378c' v-model="index" >
            <tab-item :selected="demo2 === item" class="vux-center" v-for="(item, index) in list" @click="demo2 = item" :key="index">{{item}}</tab-item>
        </tab>
        <swiper v-model="index" height="100px" :show-dots="false">
            <swiper-item v-for="(item, index) in list" :key="index">
                <div class="tab-swiper vux-center">{{item}} 暂无接口</div>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
const list = () => ['专辑', '歌手', 'mv', '专栏']
export default {
    data() {
        return {
            list: list(),
             demo2: '专辑',
             index: 0,
        }
    },
    props: {
    },
    computed: {
    },
    components: {
        Tab,
        TabItem,
        Sticky,
        Divider,
        XButton,
        Swiper,
        SwiperItem
    },
    methods: {
        initData(){
            this.$http.get('/proxy/user/subcount',{params:{uid:this.$store.state.uid}})
                .then((res)=>{
                    console.log(res.data)
                })
        }
    },
    mounted() {
        this.$store.state.title="收藏"
        this.initData()
    }
}
</script>
<style>

</style>
