import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    uid: '250092043',
    title:'',
    musicCurrentTime:'',
  },
  mutations: {
    resetScroller (state) {
      // 变更状态
      console.log(this)
    }
  }
})