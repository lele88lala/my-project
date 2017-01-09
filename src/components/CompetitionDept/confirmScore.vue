<template>
<div class="common-header">
        <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">确认比分</x-header>
        </div>
	<!-- <div class="top">
	    <div class="head-img"><img class="img-head" src="../../assets/login_btn_upload@2x.png"></div>
	    <div class="right-words">
	        <span>红牛城市传奇争霸赛-公开组</span>
	        <span>2016/09/20-2016/09/24</span>
	        <span>北京赛区</span>
	    </div>
    </div> -->
    <div class="search_tab_wrapper">
        <div class="search_tab">
            <img src="../../assets/icon_search@2x.png"><input type="text" placeholder="搜索球队名称">
            
        </div>
        <span class="search-button">搜索</span>
    </div>
    <div class="p-no-data" style="display:none">
        暂无待确认比分的比赛
    </div>
    <tab class="">
        <tab-item  :selected="demo1 === '已发货'" @click="demo1 = '已发货'" active-color="#ef5350" default-color="#9f9f9f">07-20 星期三</tab-item>
        <tab-item active-color="#ef5350" default-color="#9f9f9f" :selected="demo1 === '未发货'" @click="demo1 = '未发货'">07-20 星期三</tab-item>
        <tab-item active-color="#ef5350" default-color="#9f9f9f" :selected="demo1 === '全部订单'" @click="demo1 = '全部订单'">07-20 星期三</tab-item>
        <tab-item active-color="#ef5350" default-color="#9f9f9f" :selected="demo1 === '已发货'" @click="demo1 = '已发货'">07-20 星期三</tab-item>
        <tab-item active-color="#ef5350" default-color="#9f9f9f" :selected="demo1 === '未发货'" @click="demo1 = '未发货'">07-20 星期三</tab-item>
        <tab-item active-color="#ef5350" default-color="#9f9f9f" :selected="demo1 === '全部订单'" @click="demo1 = '全部订单'">07-20 星期三</tab-item>
    </tab>
    <div class="model-fore">
	    <div class="fore-left">
	        <div class="fore-top">
	            <img src="../../assets/login_btn_upload@2x.png">
	            <span>首都师范大学科德学院队首都师范大学</span>
	        </div>
	        <div class="fore-top">
	            <img src="../../assets/login_btn_upload@2x.png">
	            <span>北京工商大学篮球队</span>
	        </div>
             <div class="fore-top tops-b">
                <img class="time-img" src="../../assets/gauntlet_icon_time@2x.png">
                <span>13:00</span>
            </div>
            <!--  <div class="fore-top tops-b">
                <img class="time-img" src="../../assets/nav_btn_address@2x.png">
                <span>城市队主场馆</span>
            </div> -->
	    </div>
	   <!--  <div class="fore-mid">
	        <span class="fore-time">12:00 - 13:00</span>
	        <span class="fore-match-space">城市队主场馆</span>
	    </div> -->
	   
	    <div class="fore-right">
            <div class="fore-side">
                <span>50</span>
                <span>40</span>
            </div>
	        <span><x-button mini type="primary" @click="makesurescore">确认比分</x-button></span>
	    </div>
    </div>
    <div class="modal-float-tip" id="confirmscore" style="display:none">
    <div class="wrapper">
        <div class="tips">确定本场比赛的比分无误?</div>
        <span  class="left-tips" @click="cancels">取消</span><span class="right-tips" @click="makesure">确定</span>
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
  methods: {
    cancels: function () {
      document.getElementById('confirmscore').style.display = 'none'
    },
    makesure: function () {
      document.getElementById('confirmscore').style.display = 'none'
    },
    makesurescore: function () {
      document.getElementById('confirmscore').style.display = 'block'
    }
  },
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
   .model-fore{
        background-color:#fff;
        height:120px;
    }
    .model-fore  .fore-left{
        display:inline-block;
        width:55%;
        color:#707070;
         vertical-align: middle;

    }
    .model-fore  .fore-right{
        display:block;
        width:27%;
        text-align: center;
        height:100%;
        float:right;
        font-size:12px;
    }
    .model-fore .fore-mid{
        display:inline-block;
        width:25%;
        color:#c2c2c2;
    }
    .model-fore .fore-side{
        text-align: center;
        display:inline-block;
        width:13%;
        padding-top:10px;
        vertical-align: middle;

    }
    .model-fore .fore-left .fore-top img{
        width:1rem;
        padding:5px 5px 5px 5px;
        vertical-align: middle;
        font-size:0.75rem;
    }
    .model-fore .fore-mid span{
        display:block;
    }
    .model-fore .fore-left .fore-top span{
        padding:0.5rem 0;
        vertical-align: middle;
        font-size:0.75rem;
    }
    .model-fore .fore-mid *{
        padding:0.45rem 0;
        font-size:0.75rem;
    }

    .model-fore .fore-right * {
        /*display:inline-block;
        padding:0.3rem 0.8rem;
        background-color:#dc5c60;
        border-radius: 2px;
        color:#fff;
        margin-top:1.5rem;*/
    }
    .model-fore .fore-line{
        width:19.4rem;
        background-color: #ccc;
        height:1px;
        display:inline-block;
        float:right;
        margin-top:0.3rem;
    }
    .fore-right .weui_btn_primary{
    	background:#cc7372 !important;
    	float:right;
        margin-right:10%;
        margin-top:13px
    }
    .fore-side{
        text-align: center;
        font-size:0.74rem;
    }
    .fore-side span{
        display:block;
        padding-top:7px;
        font-size:14px;
    }
    .fore-top{
        padding-top:10px;
        width: 230px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>