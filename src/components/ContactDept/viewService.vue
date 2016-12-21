<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">查看服务</x-header>
  </div>
    <div class="service-wrapper">
    	<div class="service-info">
			<div class="srevice-info-left">
				<span class="tao-can">套餐A：</span>
				<span class="service-name top-ju">裁判1名、记录员1名，赠送神启技术统计服务</span>
				<span class="service-name">饮用水1箱</span>
			</div>
			<div class="service-info-right">￥200</div>
			<div class="line11"></div>
	    </div>
	    <div class="service-info">
			<div class="srevice-info-left">
				<span class="tao-can">套餐A：</span>
				<span class="service-name top-ju">裁判1名、记录员1名，赠送神启技术统计服务</span>
				<span class="service-name">饮用水1箱</span>
			</div>
			<div class="service-info-right">￥200</div>
			<div class="line11"></div>
	    </div>
	    <div class="service-info">
			<div class="srevice-info-left">
				<span class="tao-can">套餐A：</span>
				<span class="service-name top-ju">裁判1名、记录员1名，赠送神启技术统计服务</span>
				<span class="service-name">饮用水1箱</span>
			</div>
			<div class="service-info-right">￥200</div>
	    </div>
    </div>
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
    .service-info{
    	background-color:#fff;
    	height:90px;
    }
	.srevice-info-left span{
		display:block;

	}
	.srevice-info-left{
		float:left;
		padding:10px 0 10px 10px;
	}
	.service-info-right{
        float:right;
        color:#717171;
        margin-right:3%;
        margin-top:34px;
        font-size:13px;
	}
	.tao-can{
		font-size:13px;
		color:#6e6e6e;
	}
	.service-name{
		font-size:12px;
		color:#717171;
	}
	.top-ju{
		margin-top:5px;
	}
	.service-wrapper{
		margin-top:10px;
	}
	.line11{
		width: 100%;
	    float: right;
	    height: 1px;
	    margin: 0.2rem 0;
	    background-color: #D5D5D5;
	    margin-left: 20px;
	    overflow-x: hidden;
	}
</style>