<template>
	<div class="common-header">
        <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">管理比赛</x-header>
    </div>
    <div class="time-tips">9月28日 星期三</div>
    <div class="model">
	    <div class="left make-match">
	        <div class="tops">
	            <img src="../../assets/login_btn_upload@2x.png">
	            <span>城市队城市队城市队城市队城市队城市队</span>
	        </div>
	        <div class="tops">
	            <img src="../../assets/icon_time_fill@2x.png">
	            <span>10:00</span>
	        </div>
	        <div class="tops tops-b">
	            <img class="time-img" src="../../assets/icon_address_fill@2x.png">
	            <span class="time">城市队主场馆八里庄三中</span>
	        </div>
	    </div>
	    <div class="right make-match-left">
	         <span class="make-match-money">￥300</span>
	         <div class="make-match-mi"><img src="../../assets/icon_lock_fill@2x.png"><span>需应战密令</span></div>
	    </div>
    </div>
    <div class="model">
	    <div class="left make-match">
	        <div class="tops">
	            <img src="../../assets/login_btn_upload@2x.png">
	            <span>城市队城市队城市队城市队城市队城市队</span>
	        </div>
	        <div class="tops">
	            <img src="../../assets/icon_time_fill@2x.png">
	            <span>10:00</span>
	        </div>
	        <div class="tops tops-b">
	            <img class="time-img" src="../../assets/icon_address_fill@2x.png">
	            <span class="time">城市队主场馆八里庄三中</span>
	        </div>
	    </div>
	    <div class="right make-match-left">
	         <span class="make-match-money">￥300</span>
	         <div class="make-match-mi"><img src="../../assets/icon_lock_fill@2x.png"><span>需应战密令</span></div>
	    </div>
    </div>
    <div class="time-tips">9月29日 星期四</div>
    <div class="model">
	    <div class="left make-match">
	        <div class="tops">
	            <img src="../../assets/login_btn_upload@2x.png">
	            <span>城市队城市队城市队城市队城市队城市队</span>
	        </div>
	        <div class="tops">
	            <img src="../../assets/icon_time_fill@2x.png">
	            <span>10:00</span>
	        </div>
	        <div class="tops tops-b">
	            <img class="time-img" src="../../assets/icon_address_fill@2x.png">
	            <span class="time">城市队主场馆八里庄三中</span>
	        </div>
	    </div>
	    <div class="right make-match-left">
	         <span class="make-match-money">￥300</span>
	         <div class="make-match-mi" style="display:none"><img src="../../assets/icon_lock_fill@2x.png"><span>需应战密令</span></div>
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
    .model{
    	border-bottom:1px solid #ececec;
    }
	.time-tips{
		text-align: center;
		font-size:13px;
		padding:10px 0;
	}
	.make-match .time-img{
		width:15px !important;
	}
	.make-match-left{
		text-align:center;
	}
	.make-match-mi * {
		vertical-align: middle;
	}
	.make-match-mi img{
		width:15px;
	}
	.make-match-mi span{
		font-size:10px;
	}
	.make-match-left{
		margin-top:25px;
	}
	.make-match-mi{
		margin-top:-10px;
	}
</style>