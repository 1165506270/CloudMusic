import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloFromVux'
import Longin from '@/module/login/login'
import Main from '@/module/main/main'
import MyMusic from '@/module/main/myMusic/myMusic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
    		}
    	]
    }
  ]
})
