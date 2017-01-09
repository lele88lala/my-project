<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">委派任务</x-header>
  </div>
<tab class="">
	<tab-item  :selected="demo1 === '已发货'" @click="demo1 = '已发货'" active-color="#ef5350" default-color="#9f9f9f">07-20 星期三</tab-item>
	<tab-item active-color="#ef5350" default-color="#9f9f9f" :selected="demo1 === '未发货'" @click="demo1 = '未发货'">07-20 星期三</tab-item>
	<tab-item active-color="#ef5350" default-color="#9f9f9f" :selected="demo1 === '全部订单'" @click="demo1 = '全部订单'">07-20 星期三</tab-item>
	<tab-item active-color="#ef5350" default-color="#9f9f9f" :selected="demo1 === '已发货'" @click="demo1 = '已发货'">07-20 星期三</tab-item>
	<tab-item active-color="#ef5350" default-color="#9f9f9f" :selected="demo1 === '未发货'" @click="demo1 = '未发货'">07-20 星期三</tab-item>
	<tab-item active-color="#ef5350" default-color="#9f9f9f" :selected="demo1 === '全部订单'" @click="demo1 = '全部订单'">07-20 星期三</tab-item>
</tab>
	<div class="p-no-data" style="display:none">
		暂无可委派比赛
	</div>
	<div>
		<!-- <div class="mid-words">
				<span class="top-words">待委派比赛10场</span>
				<span class="bot-words">2016-07-09 星期六</span>
		</div> -->
		<div class="model artisan-model">
		    <div class="left">
		        <div class="tops">
		            <img src="../../assets/login_btn_upload@2x.png">
		            <span>首都师范大学科德学院科德学院队</span>
		        </div>
		        <div class="tops">
		            <img src="../../assets/login_btn_upload@2x.png">
		            <span>北京工商大学篮球队</span>
		        </div>
		        <div class="tops tops-b">
		            <img class="time-img" src="../../assets/gauntlet_icon_time@2x.png">
		            <span class="time">12:00 - 13:00</span>
		        </div>
                 <div class="tops tops-b">
                    <img class="time-img" src="../../assets/nav_btn_address@2x.png">
                    <span class="time">城市队主场馆</span>
                 </div>
		    </div>

		    <!-- <div class="mid">
		         <span class="time">12:00 - 13:00</span>
		         <span class="match-space">城市队主场馆</span>
		    </div> -->
		    <div class="right">
		         <span><x-button class="btn" mini type="primary" v-link="{ path: '/delegateArtisan'}">委派技统</x-button></span>
		    </div>
	        <span class="line"></span>
	    </div>
	    <div class="model artisan-model">
		    <div class="left">
		        <div class="tops">
		            <img src="../../assets/login_btn_upload@2x.png">
		            <span>首都师范大学科德学院科德学院队</span>
		        </div>
		        <div class="tops">
		            <img src="../../assets/login_btn_upload@2x.png">
		            <span>首都师范大学电信学院科电信院队</span>
		        </div>
		        <div class="tops tops-b">
                    <img class="time-img" src="../../assets/gauntlet_icon_time@2x.png">
                    <span class="time">12:00 - 13:00</span>
                </div>
                 <div class="tops tops-b">
                    <img class="time-img" src="../../assets/nav_btn_address@2x.png">
                    <span class="time">城市队主场馆</span>
                </div>
		    </div>
		    
		   <!--  <div class="mid">
		         <span class="time">12:00 - 13:00</span>
		         <span class="match-space">城市队主场馆</span>
		    </div> -->
		    <div class="right">
		         <span><x-button class="btn " mini type="primary" v-link="{ path: '/delegateArtisan'}">&nbsp;&nbsp;&nbsp;&nbsp;改派&nbsp;&nbsp;&nbsp;&nbsp; </x-button></span>
		    </div>
	        <span class="line"></span>
	    </div>
    </div>
</template>
<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import XButton from 'vux/src/components/x-button'
import XHeader from 'vux/src/components/x-header'
import {Tab, TabItem} from 'vux/src/components/tab'

export default {
  components: {
    Group,
    Cell,
    XButton,
    XHeader,
    Tab,
    TabItem
  }
}
</script>
<style>
    .top-tabs .weui_cells{
         margin-top:0px !important;
    }
    .mid-words span{
    	display:block;
    } 
    .mid-words .top-words{
    	color:#a2a2a2;
        font-size:13px;
        padding:6px 0 0 14px;
    }
    .mid-words .bot-words{
    	font-size:13px;
        text-align: center;
        padding:6px 0 10px 0;
        color:#707070;
    }
    .artisan-model .right .weui_btn.weui_btn_mini{
    	margin-top: 40px !important;
    }
    .model .tops{
    width: 230px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    }
</style>