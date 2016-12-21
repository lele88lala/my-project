<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">查看场地</x-header>
  </div>
	<div class="space-info-wrapper">
	    <div class="mg" v-link="{ path: '/checkPlayer'}">
		    <span class="dp-words space-info-teanname">八里庄三中篮球馆</span>
		    <span class="crm-tips">(07-09 至 07-16)</span>
		    <div class="wrap-img">
		            <img class="back-img space-info-right-icon" src="../../assets/btn_arrow_down@3x.png"></div>
	    </div>
	    <div class="space-use-info">
	    	<div class="space-left">
	    		<span>周场地时间段</span>
	    		<span>10</span>
	    	</div>
	    	<div class="space-mid">
	    		<span>周场地时间段</span>
	    		<span>6</span>
	    	</div>
	    	<div class="space-right">
	    		<span>场地使用率</span>
	    		<span>60%</span>
	    	</div>
	    </div> 
	    <div class="space-info-bot-words">官方场地管理请PC登录www.ikaihuo.com,扫描登录</div>
	</div>
	<div class="eject-content">
		<span>周使用情况</span>
		<div class="line2"></div>
		<span>总使用情况</span>
	</div>
	<div class="tragel"></div>
</template>
<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import xbutton from 'vux/src/components'
import XHeader from 'vux/src/components/x-header'

export default {
  components: {
    Group,
    Cell,
    xbutton,
    XHeader
  },
  data () {
    return {
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      n: 4,
      m: '待委派比赛'
    }
  }
}
</script>
<style>
	.space-info-teanname{
		padding-left:10px;
	}
	.space-info-right-icon{
		height:17px;
		padding-top:2px;
	}
	.space-use-info div{
		display:inline-block;
		text-align: center
	}
	.space-use-info span{
		display:block;
		text-align: center;
		font-size:12px;
		color:#707070;
	}
	.space-use-info{
		clear:both;
		background-color:#fff;
		border-top:1px solid #d5d5d5;
	}
	.space-left,.space-mid{
		width:33%;
		padding:8px 0 8px 0;
	}
	.space-right{
		width:30%;
    }
    .space-info-bot-words{
    	text-align: center;
    	font-size:12px;
    	color:#afafaf;
    	padding-top:10px;
    }
    .space-info-wrapper{
    	position:relative;
    }
    .eject-content{
    	position:absolute;
    	border-radius: 8px;
        width:110px;
        height:80px;
        background-color:rgba(0,0,0,0.5);
        top:80px;
        right:10px;
    }
    .tragel{
    	position:absolute;
    	top:70px;
        right:20px;
	    width: 0;
	    height: 0;
	    border-left: 9px solid transparent;
	    border-right: 9px solid transparent;
	    border-bottom: 10px solid rgba(0,0,0,0.5);
    }
    .eject-content span{
    	display:block;
    	text-align: center;
    	color:#fff;
    	font-size:14px;
    	height:37px;
    	line-height:37px;
    }
    .line2{
	    width: 100%;
	    float: right;
	    height: 1px;
	    margin: 0.2rem 0;
	    background-color: #919191;
	    margin-left: 20px;
	    overflow-x: hidden;
    }
</style>