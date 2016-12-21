<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">核对球员</x-header>
  </div>
	<div class="top">
	    <div class="head-img"><img class="img-head" src="../../assets/login_btn_upload@2x.png"></div>
	    <div class="right-words">
	        <span>红牛城市传奇争霸赛-公开组</span>
	        <span>2016/09/20-2016/09/24</span>
	        <span>北京赛区</span>
	    </div>
	    <div class=>

	    </div>
	</div>
	<div class="crm-team-count">
	    		球员名单
	</div>
	<div class="check-people-info">
		<img class="id-card" src="../../assets/card.png">
		<div class="id-card-info">
			<span class="id-card-name">张某某</span>
			<span class="player-num card-info-small-words">球衣号：30</span>
			<span class="card-type card-info-small-words">证件类型：省份证</span>
			<span class="card-num card-info-small-words">证件号：1234456789012345678</span>
		</div>
		<div class="check-people-btn">
			<x-button mini type="primary" v-link="{ path: '/authInfo'}">检查</x-button>
		</div>
		<div class="line1"></div>
	</div>
	<div class="check-people-info">
		<img class="id-card" src="../../assets/card.png">
		<div class="id-card-info">
			<span class="id-card-name">张某某</span>
			<span class="player-num card-info-small-words">球衣号：30</span>
			<span class="card-type card-info-small-words">证件类型：省份证</span>
			<span class="card-num card-info-small-words">证件号：1234456789012345678</span>
		</div>
		<div class="check-people-btn">
			<x-button mini type="primary" @click="makesurescore" disabled style="display:none">检查</x-button>
			<span class="dis-words">未通过审核</span>
		</div>
		<div class="line1"></div>
	</div>
	<div class="check-people-info">
		<img class="id-card" src="../../assets/card.png">
		<div class="id-card-info">
			<span class="id-card-name">张某某</span>
			<span class="player-num card-info-small-words">球衣号：30</span>
			<span class="card-type card-info-small-words">证件类型：省份证</span>
			<span class="card-num card-info-small-words">证件号：1234456789012345678</span>
		</div>
		<div class="check-people-btn">
			<x-button mini type="primary" @click="makesurescore" disabled style="display:none">检查</x-button>
			<span class="dis-words">通过审核</span>
		</div>
		<div class="line1"></div>
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
    .check-people-info{
    	background-color:#fff;
    	position:relative;
    	width:100%;
    	height:74px;
    	padding:10px 0; 
    }
	.id-card,.id-card-info{
		display:block;
		float:left;
	}
	.id-card{
		width:100px;
		height:70px;
		padding:5px 7px;
	}
	.id-card-info span{
		display:block;
	}
    .id-card-name{
    	font-size:13px;
    }
    .check-people-btn{
    	position:absolute;
    	right:5%;
    	top:30px;
    }
    .card-info-small-words{
    	font-size:11px;
    	color:#929292;
    }
    .player-num{
    	margin-top:5px;
    }
    .check-people-btn .weui_btn{
    	background-color:#cc7372;
    }
    .check-people-btn .dis-words{
    	font-size: 13px;
    	color:#929292;
    }
</style>