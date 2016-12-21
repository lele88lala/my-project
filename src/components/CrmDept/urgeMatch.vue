<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">督促比赛</x-header>
  </div>
	 <div>
	    <div class="slider-wrapper">
	        <span class="slider"><span  class="left-b-words urge-match-left" @click="leftonc">应战区</span><span class="left-words" id="leftbwords">应战区</span><span  class="right-b-words" @click="rightonc">管理我的球队</span><span id="rightbwords" class="right-words">管理我的球队</span></span>
	    </div>
    </div>
	<div class="team-manage" id="team-manage">
	    <div class="crm-team-count">
	        管理球队：6支
	    </div>
		<div class="mg">
		    <img class="crm-team-img" src="../../assets/login_btn_upload@2x.png">
		    <span class="dp-words">城市传奇队</span>
		    <span class="crm-tips urge-match-w-words">本周比赛1场</span>
		    <div class="wrap-img urge-match-right-img">
		            <img class="back-img urge-match-phone-img" src="../../assets/service_btn_phone@2x.png"></div>
		    <div class="line11 urge-match-line"></div>

		</div>
		<div class="mg">
		    <img class="crm-team-img" src="../../assets/login_btn_upload@2x.png">
		    <span class="dp-words">城市传奇队</span>
		    <span class="crm-tips urge-match-w-words">本周比赛1场</span>
		    <div class="wrap-img urge-match-right-img">
		            <img class="back-img urge-match-phone-img" src="../../assets/service_btn_phone@2x.png"></div>
		    <div class="line11 urge-match-line"></div>

		</div>
		<div class="mg">
		    <img class="crm-team-img" src="../../assets/login_btn_upload@2x.png">
		    <span class="dp-words">城市传奇队</span>
		    <span class="crm-tips urge-match-w-words">本周比赛1场</span>
		    <div class="wrap-img urge-match-right-img">
		            <img class="back-img urge-match-phone-img" src="../../assets/service_btn_phone@2x.png"></div>
		    <div class="line11 urge-match-line"></div>

		</div>
		<div class="mg">
		    <img class="crm-team-img" src="../../assets/login_btn_upload@2x.png">
		    <span class="dp-words">城市传奇队</span>
		    <span class="crm-tips urge-match-w-words">本周比赛1场</span>
		    <div class="wrap-img urge-match-right-img">
		            <img class="back-img urge-match-phone-img" src="../../assets/service_btn_phone@2x.png"></div>
		    <div class="line11 urge-match-line"></div>

		</div>
		<div class="mg">
		    <img class="crm-team-img" src="../../assets/login_btn_upload@2x.png">
		    <span class="dp-words">城市传奇队</span>
		    <span class="crm-tips urge-match-w-words">本周比赛1场</span>
		    <div class="wrap-img urge-match-right-img">
		            <img class="back-img urge-match-phone-img" src="../../assets/service_btn_phone@2x.png"></div>
		    <div class="line11 urge-match-line"></div>

		</div>
		<div class="mg">
		    <img class="crm-team-img" src="../../assets/login_btn_upload@2x.png">
		    <span class="dp-words">城市传奇队</span>
		    <span class="crm-tips urge-match-w-words">本周比赛1场</span>
		    <div class="wrap-img urge-match-right-img">
		            <img class="back-img urge-match-phone-img" src="../../assets/service_btn_phone@2x.png"></div>
		</div>
	</div>
	<div class="ying-zhan" id="ying-zhan"  style="display:none">
		<div class="mid-words">
				<span class="top-words">未应战比赛13场</span>
				<span class="bot-words">9月28日 星期三</span>
		</div>
		<div class="no-ying-zhan-info">
			<span class="time">11:00</span>
			<div class="no-ying-zhan-left">
				<img class="team-image" src="../../assets/login_btn_upload@2x.png" >
				<span class="team-name">城市传奇队</span>
				<div class="no-ying-zhan-left-info">
				    <div style="display:inline-block;background:#f7f7f7;padding-right:7px" >
				    	<img class="location-image" src="../../assets/icon_address_blue@2x.png">
					<span>八里庄三中篮球馆</span>
				    </div>
					
					<img class="is-guan-image" src="../../assets/icon_official@2x.png">
				</div>
			</div>
			<div class="price">￥300</div>
			<img class="jiao-biao" src="../../assets/service_icon_mark@2x.png">
		</div>
		<div class="no-ying-zhan-info">
			<span class="time">11:00</span>
			<div class="no-ying-zhan-left">
				<img class="team-image" src="../../assets/login_btn_upload@2x.png" >
				<span class="team-name">城市传奇队</span>
				<div class="no-ying-zhan-left-info">
				    <div style="display:inline-block;background:#f7f7f7;padding-right:7px" >
				    	<img class="location-image" src="../../assets/icon_address_blue@2x.png">
					<span>八里庄三中篮球馆</span>
				    </div>
					
					<img class="is-guan-image" src="../../assets/icon_official@2x.png">
				</div>
			</div>
			<div class="price">￥300</div>
			<img class="jiao-biao" src="../../assets/service_icon_mark@2x.png">
		</div>
		<div class="no-ying-zhan-info">
			<span class="time">11:00</span>
			<div class="no-ying-zhan-left">
				<img class="team-image" src="../../assets/login_btn_upload@2x.png" >
				<span class="team-name">城市传奇队</span>
				<div class="no-ying-zhan-left-info">
				    <div style="display:inline-block;background:#f7f7f7;padding-right:7px" >
				    	<img class="location-image" src="../../assets/icon_address_blue@2x.png">
					<span>八里庄三中篮球馆</span>
				    </div>
					
					<img class="is-guan-image" src="../../assets/icon_official@2x.png">
				</div>
			</div>
			<div class="price">￥300</div>
			<img class="jiao-biao" src="../../assets/service_icon_mark@2x.png">
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
  },
  methods: {
    leftonc: function () {
      document.getElementById('leftbwords').style.display = 'block'
      document.getElementById('rightbwords').style.display = 'none'
      document.getElementById('ying-zhan').style.display = 'block'
      document.getElementById('team-manage').style.display = 'none'
    },
    rightonc: function () {
      document.getElementById('leftbwords').style.display = 'none'
      document.getElementById('rightbwords').style.display = 'block'
      document.getElementById('team-manage').style.display = 'block'
      document.getElementById('ying-zhan').style.display = 'none'
    },
    confirms: function () {
      document.getElementById('makeconfirm').style.display = 'block'
    },
    makesure: function () {
      document.getElementById('makeconfirm').style.display = 'none'
    }
  }
}

</script>
<style>
	.urge-match-left{
		left:16% !important;
	}
	.urge-match-w-words{
		margin-right:70px !important;
	}
	.urge-match-phone-img{
		width:28px !important;
		height:28px !important;
	}
	.urge-match-right-img{
		top:20% !important;
	}
	.no-ying-zhan-info .time{
		display:block;
		color:#929292;
		font-size:11px !important;
		padding-top:10px;
		padding-left:10px;
	}
	.no-ying-zhan-info{
		background-color:#fff;
	}
	.team-image{
		width:25px;
	}
	.location-image{
		width:15px;
	}
	.is-guan-image{
		width:20px;
	}
	.no-ying-zhan-left .team-name{
		display:block;
		font-size:12px;
		color:#6b6b6b;
	}
	.no-ying-zhan-left-info .team-image{
		display:inline-block;
	}
	.no-ying-zhan-left{
		display:inline-block;
	}
	.no-ying-zhan-info .price{
		display:block;
		height:100%;
		vertical-align: middle;
		line-height: 100%;
        float:right;
        margin-right:40%;
        margin-top:15px;
        font-size:18px;
	}
	.no-ying-zhan-info{
		position:relative;
		border-bottom:1px solid #ececec;
	}
	.no-ying-zhan-left{
		text-align: center;
		padding-left:15px;
		padding-bottom:5px;
	}
	.no-ying-zhan-left-info span{
		font-size:9px;
	}
	.no-ying-zhan-left-info * {
		vertical-align: middle
	}
	.jiao-biao{
		width:30px;
		position:absolute;
		top:0px;
		right:5%;
	}
	.no-ying-zhan-info .line1{
		margin:0 0;
	}
</style>