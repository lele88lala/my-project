<template>
<div style="background-color:#ef5350;height:100vh">
	<div class=" register">
  <x-header style="background-color:#ef5350;" :left-options="{showBack: true}" :left-options="{backText: false}"></x-header>
  </div>
  <img class="register-top-img" src="../../assets/app_zhuce_text@2x.png">
  <img class="register-mid-img" src="../../assets/img_uf@2x.png">
  <div class="register-input-wrapper">
  	  <img src="../../assets/icon_phone@2x.png">
  	  <input type="text" placeholder="请输入手机号">
  </div>
  <div class="yan-yan-wrapper">
	  	<div class="register-input-yan-wrapper">
	        <img src="../../assets/icon_anquan@2x.png">
	        <input type="text" placeholder="请输入验证码">
	    </div>
	    <div class="get-code-button">获取验证码</div>
  </div>
  <div class="revieve-button">立即领取</div>
  </div>
</template>
<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import XButton from 'vux/src/components/x-button'
import XHeader from 'vux/src/components/x-header'

export default {
  components: {
    Group,
    Cell,
    XButton,
    XHeader
  }
}
</script>
<style>
body{
}
	.register .vux-header .vux-header-left .vux-header-back:before{
	}
	.register-top-img{
		display:block;
		width:230px;
		margin:0 auto;
	}
	.register-mid-img{
		display:block;
		width:280px;
		margin:0 auto;
	}
	input {
	    -webkit-appearance: none;
	    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	    border: none;
	    font-size: 13px;
	    vertical-align: middle
    }
    ::-webkit-input-placeholder{
        color:#b6b6b6;
    }
    .register-input-yan-wrapper,.register-input-wrapper{
    	background-color:#fff;
    	border-radius: 2px;
    }
     .register-input-yan-wrapper img,.register-input-wrapper img{
     	width:20px;
     	vertical-align: middle
     }
     .register-input-wrapper{
     	width:250px;
     	margin:0 auto;
     	padding:5px 5px;
     }
     .register-input-wrapper input{
     	width:200px;
     }
     .register-input-yan-wrapper{
     	padding:5px 5px;
     	width:150px;
     	float:left;
        margin:15px 0;
     }
     .register-input-yan-wrapper input{
     	width:100px;
     }
     .get-code-button{
     	display:inline-block;
     	float:right;
     }
     .yan-yan-wrapper{
     	margin:0 auto;
     }
     .revieve-button{
     	clear:both;
     }
     .yan-yan-wrapper{
     	width:260px;
     }
     .get-code-button{
     	padding:8px 10px;
     	background-color:#e9b73c;
     	border-radius:2px;
     	margin-top:17px;
     	color:#fff;
     	font-size:13px;
     }
     .revieve-button{
     	clear:both;
     	margin:80px auto;
     	text-align: center;
     	width:260px;
     	background-color: #e9b73c;
     	border-radius: 2px;
     	padding:6px 0;
     	color:#fff;
     	font-size:13px;
     }
</style>