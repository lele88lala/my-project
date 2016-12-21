<template>
<div style="background-color:#ef5350;height:100vh">
	<div class=" register">
        <x-header style="background-color:#ef5350;" :left-options="{showBack: true}" :left-options="{backText: false}"></x-header>
    </div>
    <img class="success-img" src="../../assets/star_text@2x.png">
    <div class="succes-my-coupon">
    	<div class="my-coupon-wrapper">
		    <img class="coupon-img" src="../../assets/login_btn_upload@2x.png">
		    <div class="coupon-words"><span class="coupon-words-top">途虎养车</span><span class="coupon-words-bot">100元代金券</span></div>
		    <div class="coupon-view-wrapper"><img class="coupon-view-img" src="../../assets/iconfont_youhuiquan@2x.png"><span class="coupon-view-words">查看详情</span></div>
        </div>
    </div>
    <div class="uf-er-code">
    	<img src="../../assets/login_btn_upload@2x.png">
    	<span>下载城市传奇APP</span>
    	<span>查看专属福利券</span>
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
	.success-img{
		display:block;
		margin:10px auto;
		width:220px;
	}
	.succes-my-coupon{
		margin-top:50px;
	}
    .uf-er-code span{
		display:block;
		color:#fff;
		font-size:13px;
		padding-top:10px;
	}
	.uf-er-code img {
		width:120px;
		margin-top:40px;
	}
	.uf-er-code{
		text-align: center;
	}
</style>