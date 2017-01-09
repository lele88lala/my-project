<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">管理球队</x-header>
  </div>
    <group class="crm-top-tips">
		<cell title="预录新球队" class="cell-group crm-line" value="" is-link v-link="{ path: '/newTeamInfo'}" ></cell>
	</group>
	<div class="crm-team-count">
		参赛球队：6支
	</div>
	<div class="mg" v-link="{ path: '/checkPlayer'}">
	    <img class="crm-team-img" src="../../assets/login_btn_upload@2x.png">
	    <span class="dp-words">城市传奇队</span>
	    <span class="crm-tips">待核对球员10人</span>
	    <div class="wrap-img">
	            <img class="back-img" src="../../assets/my_btn_back_right_little@2x.png"></div>
	</div>
    <div class="line"></div>
    <div class="mg" v-link="{ path: '/checkPlayer'}">
	    <img class="crm-team-img" src="../../assets/login_btn_upload@2x.png">
	    <span class="dp-words">城市传奇队</span>
	    <span class="crm-tips">待核对球员10人</span>
	    <div class="wrap-img">
	            <img class="back-img" src="../../assets/my_btn_back_right_little@2x.png"></div>
	</div>
    <div class="line"></div>
    <div class="mg" v-link="{ path: '/checkPlayer'}">
	    <img class="crm-team-img" src="../../assets/login_btn_upload@2x.png">
	    <span class="dp-words">城市传奇队</span>
	    <span class="crm-tips">待核对球员10人</span>
	    <div class="wrap-img">
	            <img class="back-img" src="../../assets/my_btn_back_right_little@2x.png"></div>
	</div>
    <div class="line"></div>
    <div class="mg" v-link="{ path: '/checkPlayer'}">
	    <img class="crm-team-img" src="../../assets/login_btn_upload@2x.png">
	    <span class="dp-words">城市传奇队</span>
	    <span class="crm-tips">待核对球员10人</span>
	    <div class="wrap-img">
	            <img class="back-img" src="../../assets/my_btn_back_right_little@2x.png"></div>
	</div>
    <div class="line"></div>
    <div class="mg" v-link="{ path: '/checkPlayer'}">
	    <img class="crm-team-img" src="../../assets/login_btn_upload@2x.png">
	    <span class="dp-words">城市传奇队</span>
	    <span class="crm-tips">待核对球员10人</span>
	    <div class="wrap-img">
	            <img class="back-img" src="../../assets/my_btn_back_right_little@2x.png"></div>
	</div>
    <div class="line"></div>
    <div class="mg" v-link="{ path: '/checkPlayer'}">
	    <img class="crm-team-img" src="../../assets/login_btn_upload@2x.png">
	    <span class="dp-words">城市传奇队</span>
	    <span class="crm-tips"></span>
	    <div class="wrap-img">
	            <img class="back-img" src="../../assets/my_btn_back_right_little@2x.png"></div>
	</div>
	<div class="crm-team-count">
	    		外围球队：3支
	</div>
	<div class="mg" v-link="{ path: '/checkPlayer'}">
	    <img class="crm-team-img" src="../../assets/login_btn_upload@2x.png">
	    <span class="dp-words">城市传奇队</span>
	    <span class="crm-tips">待核对球员10人</span>
	    <div class="wrap-img">
	            <img class="back-img" src="../../assets/my_btn_back_right_little@2x.png"></div>
	</div>
    <div class="line"></div>
    <div class="mg">
	    <img class="crm-team-img" src="../../assets/login_btn_upload@2x.png">
	    <span class="dp-words">城市传奇队</span>
	    <span class="crm-tips">未建队激活</span>
	    <div class="wrap-img">
	            <img class="back-img" src="../../assets/my_btn_back_right_little@2x.png" style="display:none"></div>
	</div>
    <div class="line"></div>
    <div class="mg" v-link="{ path: '/checkPlayer'}">
	    <img class="crm-team-img" src="../../assets/login_btn_upload@2x.png">
	    <span class="dp-words">城市传奇队</span>
	    <span class="crm-tips"></span>
	    <div class="wrap-img">
	            <img class="back-img" src="../../assets/my_btn_back_right_little@2x.png"></div>
	</div>
    <div class="line"></div>
    <div class="mg" v-link="{ path: '/checkPlayer'}">
	    <img class="crm-team-img" src="../../assets/login_btn_upload@2x.png">
	    <span class="dp-words">城市传奇队</span>
	    <span class="crm-tips"></span>
	    <div class="wrap-img">
	            <img class="back-img" src="../../assets/my_btn_back_right_little@2x.png"></div>
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
    .back-img {
        height: 13px;
        padding-right:10px;
    }
    .crm-team-img{
    	display:block;
    	float:left;
    	width:25px;
    	padding:11px;
    }
    .dp-words {
    	display:block;
        height: 30px;
        line-height: 45px;
        /*height: 2.6rem;*/
        font-size: 13px;
        color: #707070;
        float: left;
    }

    .wrap-img {
        position: absolute;
        height: 10px;
        top: 26%;
        right: 0;
        margin-top: ;
        /*padding: 0.5rem 0;*/
        /*margin: 0.65rem;*/
        /*float: right;*/
    }

    .mg {
        position: relative;
        float: left;
        background-color: #fff;
        width: 100%;
    }
    .line {
        width: 96%;
        height: 1px;
        background-color: #ececec;
        float: right;

    }
    .crm-tips{
        height: 40px;
        line-height: 49px;
        font-size:12px;
        color:#BDBDBD;
        float: right;
        margin-right: 28px;
    }
    .crm-top-tips .weui_cells{
    	margin-top:0px !important;
    }
    .crm-team-count{
    	clear:both;
    	padding:5px 0 5px 14px;
    	color:#929292;
    	font-size:12px;
    }
</style>