import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloFromVux'
import Longin from '@/module/login/login'
import Main from '@/module/main/main'
import MyMusic from '@/module/main/myMusic/myMusic'
import SongList from '@/module/main/songList/songList'
import MusicPlay from '@/module/musicPlay/musicPlay'
import MyCollect from '@/module/main/myCollect/myCollect'
import MyBroadcasting from '@/module/main/myBroadcasting/myBroadcasting'
import record from '@/module/main/record/record'
Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '',
      redirect: '/login'
    },
    {
    	path: '/login',
    	component: Longin
    },
    {
    	path: '/main',
    	component: Main,
    	children: [
    		{
    			path:'myMusic',
    			component:MyMusic
    		},{
    			path:'songList/:id',
    			component:SongList
    		},{
    			path:'myCollect',
    			component:MyCollect
    		},{
    			path:'myBroadcasting',
    			component:MyBroadcasting
    		},{
    			path:'record',
    			component:record
    		}
    	]
    },
    {
    	path: '/muiscPlay/:id',
    	component: MusicPlay
    },
  ]
})
