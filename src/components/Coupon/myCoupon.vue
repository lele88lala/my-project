<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">我的卡券</x-header>
  </div>
<div class="my-coupon-wrapper">
	<img class="coupon-img" src="../../assets/login_btn_upload@2x.png">
	<div class="coupon-words"><span class="coupon-words-top">途虎养车</span><span class="coupon-words-bot">100元代金券</span></div>
	<div class="coupon-view-wrapper"><img class="coupon-view-img" src="../../assets/iconfont_youhuiquan@2x.png"><span class="coupon-view-words">查看详情</span></div>
</div>
<div class="my-coupon-wrapper">
	<img class="coupon-img" src="../../assets/login_btn_upload@2x.png">
	<div class="coupon-words"><span class="coupon-words-top">途虎养车</span><span class="coupon-words-bot">100元代金券</span></div>
	<div class="coupon-view-wrapper"><img class="coupon-view-img" src="../../assets/iconfont_youhuiquan@2x.png"><span class="coupon-view-words">查看详情</span></div>
</div>
<div class="my-coupon-wrapper">
	<img class="coupon-img" src="../../assets/login_btn_upload@2x.png">
	<div class="coupon-words"><span class="coupon-words-top">途虎养车</span><span class="coupon-words-bot">100元代金券</span></div>
	<div class="coupon-view-wrapper"><img class="coupon-view-img" src="../../assets/iconfont-youhuiquan@2x.png"><span class="coupon-view-words">&nbsp;&nbsp;已过期&nbsp;&nbsp;</span></div>
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
	.my-coupon-wrapper img,.my-coupon-wrapper div{
		display:inline-block;
	}
	.coupon-words span{
		display:block;
		text-align: left;
	}
	.coupon-words{
		vertical-align: middle
	}
	.coupon-img{
		width:50px;
		padding:5px 5px;
		vertical-align: middle
	}
	.coupon-view-wrapper{
		text-align: center;
		vertical-align: middle;
		float:right;
		padding:8px 12px 10px 10px;
		border-left:1px dotted #92a2c1;
	}
	.coupon-view-wrapper span{
		display:block;
	}
	.coupon-view-wrapper img{
		display:inline-block;

	}
	.coupon-view-img{
vertical-align: middle;
		width:25px;
	}
	.my-coupon-wrapper{
		margin: 10px auto;
		background-color:#fff;
		width:90%;
	}
	.coupon-words-top{
		font-size:15px;
		color:#3e3e3e;
	}
	.coupon-words-bot{
		font-size:14px;
		color:#a0a0a0;
	}
	.coupon-view-words{
		font-size:9px;
		padding-top:3px;
		color:#7b91b7;
	}
</style>