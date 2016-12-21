<template>
	<div class="common-header">
	<x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">加入团队二维码</x-header>
	</div>
	<div class="cop-sancode">
		<img src="../../assets/login_btn_upload@2x.png">
		<span>微站或微信扫码</span>
		<span class="bottom-words">加入北京赛区竞赛部</span>
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
	.cop-sancode *{
		display:block;
		text-align: center;
		font-size:10px;
		color:#939393;
		padding-top:6px;
	}
	.cop-sancode img{
		margin: 0 auto;
		margin-top:10px;
        width:130px;
        padding-top:25px;
	}
	.cop-sancode .bottom-words{
        padding-bottom:20px;
	}
	.cop-sancode{
		background-color:#fff;
	}
</style>