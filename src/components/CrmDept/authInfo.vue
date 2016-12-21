<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">认证信息</x-header>
  </div>
    <div class="card-wrapper">
        <img class="card-image" src="../../assets/card.png">
    </div>
	<group class="card-info-wrapper">
	    <cell title="姓名" value="啊哈哈"  class="cell-group" ></cell>
	    <cell title="证件类型" value="身份证"  class="cell-group" ></cell>
	    <cell title="证件号码" value="123456789012345678"  class="cell-group" ></cell>
    </group>
    <div class="card-info-b-btn">
    	<span class="left">不通过</span>
    	<span class="right">通过</span>
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
	.card-wrapper{
		width:100%;
		padding:7px 0;
		text-align: center;
	}
    .card-info-wrapper .weui_cells{
    	margin-top:0px !important;
    }
	.card-image{
		width:300px;
	}
	.card-info-b-btn{
		padding-top:15px;
	}
	.card-info-b-btn span{
		color:#fff;
        display:block;
        font-size:13px;
        border-radius: 2px;
    }
    .card-info-b-btn .left{
    	background-color:#5e7bae;
    	float:left;
    	margin-left:5%;
    	padding:8px 45px;

    }
    .card-info-b-btn .right{
    	background-color:#d05351;
    	float:right;
    	margin-right:5%;
    	padding:8px 50px;

    }
</style>