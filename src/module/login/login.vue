<template>
  <div>
    <header><h1>手机登陆</h1></header>
    <group label-width="4.5em" label-margin-right="1em" label-align="left">
		<x-input title="手机号码" v-model="phone" required></x-input>
		<x-input title="密码" type="password" v-model="password" required></x-input>

		<x-button type="primary" action-type="button" @click.native="login" style="border-radius:99px;margin-top:55px;">登陆</x-button>
    </group>
  </div>
</template>

<script>
import { XHeader,XInput,Group,XButton,Divider } from 'vux'

export default {
  data(){
  	return {
  		phone:'',
  		password: ''
  	}
  },
  components:{
  	XHeader,XInput,Group,XButton,Divider
  },
  methods:{
  	login(){
  		var that = this
  		this.$http.get('/proxy/login/cellphone',{params:{
        	phone:this.phone,
        	password:this.password
    	}}).then(function(res){
    		if(res.data.code === 200){
    			console.log(that.$store.state)
          that.$store.state.uid = res.data.account.id
    			that.$router.push('/main/myMusic')
    		}
    	})
  	}
  }
}
</script>

<style lang="less">
	header{
		position: relative;
    	padding: 3px 0;
    	box-sizing: border-box;
    	background-color: #35495e;
    	h1{
    		margin: 0 88px;
    		line-height: 40px;
    		text-align: center;
    		height: 40px;
    		font-size: 18px;
    		font-weight: 400;
    		width: auto;
    		overflow: hidden;
    		text-overflow: ellipsis;
    		white-space: nowrap;
    		color: #fff;
    	}
	}
</style>