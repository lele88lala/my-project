<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">优惠券详情</x-header>
  </div>
	<div class="coupon-detail-wrapper">
		<div class="top-head">
			<img src="../../assets/login_btn_upload@2x.png">
			<span class="words">100元代金券</span>
		</div>
		<div class="coupon-time">有效期：2016.12.02-2017.01.02</div>
		<div class="coupon-mid-words">
		    <div>
		    	<div class="coupon-btn">立即领取</div>
		    </div>
		    <div style="display:none">
				<span class="cou-span">券编号：<span class="cou-span-value">2016 1221 0925</span></span>
		        <span class="cou-span">校验码：<span class="cou-span-value">kj65 4gtd</span></span>
	        </div>
	    </div>
	    <div class="use-rule">使用规则</div>
	    <div class="coupon-content">
	    	<span>1. 该券一个手机号只能领取一次</span>
	    	<span>2. 同个途虎券每个自然周期限用一张</span>
	    	<span>3. 门店详情参见途虎养车APP</span>
	    	<span>4. 兑换流程：各大应用商城搜索并下载途虎养车APP，注册登录APP后，进入页面“我的”，在兑换专区勾选优惠券，提交订单</span>
	    	<span>5. 使用范围：以途虎养车APP为主</span>
	    </div>
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
	.coupon-detail-wrapper{
		background-image:url("../../assets/img_xiangqing@2x.png");
		background-size:100% 100%;
		margin:10px 10px;
		border-radius: 5px
	}
	.top-head img{
        display:inline-block;
        width:50px;
        padding:5px 5px;
	}
	.top-head .words{
		display:block;
		float:right;
		color:#fff;
		font-size:14px;
		margin-right:10px;
		margin-top:15px;
	}
	.coupon-detail-wrapper .coupon-time{
		text-align: right;
		padding-bottom:30px;
		padding-right:10px;
		font-size:12px;
		color:#d7c7c5;
	}
	.coupon-mid-words{
		padding:30px 0px 30px 0px;
	}
	.coupon-mid-words .cou-span{
		display:block;
		color:#d2524d;
		padding-left:15px;
		font-size:13px;
	}
	.cou-span-value{
		font-size:17px;
	}
    .use-rule{
    	text-align: center;
    	color:#afafaf;
    	font-size:13px;
    	padding:10px 0px;
    }
    .coupon-content span{
    	display:block;
    	font-size:12px;
    	padding-left:20px;
    	padding-top:3px;
    	color:#afafaf;
    }
    .coupon-content{
    	padding-bottom:70px;
    }
    .coupon-btn{
    	text-align: center;
    	margin:15px auto;
    	width:100px;
    	padding:7px 15px;
    	background-color:#ef5350;
    	color:#fff;
    	border-radius: 3px;
    }

</style>