<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">管理晋级</x-header>
  </div>
	<div class="top">
        <div class="head-img"><img class="img-head" src="../../assets/login_btn_upload@2x.png"></div>
        <div class="right-words">
            <span>红牛城市传奇争霸赛-公开组</span>
            <span>2016/09/20-2016/09/24</span>
            <span>北京赛区</span>
        </div>
    </div>
    <div>
    	 <div class=pls>
            待确认晋级球队
         </div>
    </div>
    <div class="model-fore-dif">
        <div class="fore-left-one-dif">
	        <img src="../../assets/login_btn_upload@2x.png">
	    </div>
	    <div class="fore-left-dif">
	        <div class="fore-top-dif">
	            <span>城市传奇队</span>
	        </div>
	        <div class=" font-little">
	            <span>已实名球员40</span> &nbsp;&nbsp;<span>已确认球员12</span>
	        </div>
	    </div>
	    <div class="fore-right-dif">
	        <span><switch title="" :value=true></switch></span>
	    </div>
    </div>
    <div class="model-fore-dif">
        <div class="fore-left-one-dif">
	        <img src="../../assets/login_btn_upload@2x.png">
	    </div>
	    <div class="fore-left-dif">
	        <div class="fore-top-dif">
	            <span>城市传奇队</span>
	        </div>
	        <div class=" font-little">
	            <span>已实名球员40</span> &nbsp;&nbsp;<span>已确认球员12</span>
	        </div>
	    </div>
	    <div class="fore-right-dif">
	        <span><switch title="" :value=false ></switch></span>
	    </div>
    </div>
    <div class="model-fore-dif">
        <div class="fore-left-one-dif">
	        <img src="../../assets/login_btn_upload@2x.png">
	    </div>
	    <div class="fore-left-dif">
	        <div class="fore-top-dif">
	            <span>城市传奇队</span>
	        </div>
	        <div class=" font-little">
	            <span>已实名球员40</span> &nbsp;&nbsp;<span>已确认球员12</span>
	        </div>
	    </div>
	    <div class="fore-right-dif">
	        <span><switch title="" :value=true style="display:none"></switch><span class="b-words">未完成球员确认</span></span>
	    </div>
    </div>
    <div class="modal-float-tip" id="confirmscore" style="display:none">
    <div class="wrapper">
        <div class="tips">确定选定球队晋级?</div>
        <span  class="left-tips" @click="cancels">取消</span><span class="right-tips" @click="makesure">确定</span>
    </div>
    </div>
    <div class="bottom-red-btn"><span class="yes-btn"  @click="makesurepromotion">确认晋级</span><span class="no-btn" style="display:none">确认晋级</span></div>
</template>
<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import XButton from 'vux/src/components/x-button'
import Switch from 'vux/src/components/switch'
import XHeader from 'vux/src/components/x-header'

export default {
  methods: {
    cancels: function () {
      document.getElementById('confirmscore').style.display = 'none'
    },
    makesure: function () {
      document.getElementById('confirmscore').style.display = 'none'
    },
    makesurepromotion: function () {
      document.getElementById('confirmscore').style.display = 'block'
    }
  },
  components: {
    Group,
    Cell,
    XButton,
    Switch,
    XHeader
  }
}
</script>
<style>
	div .pls {
      height:10px;
      font-size:13px;
      padding-top:10px;
      padding-bottom:20px;
      padding-left:12px;
      color:#707070;
      border-bottom: 1px solid #ececec;
      border-top: 1px solid #ececec;

    }
    .model-fore-dif{
        background-color:#fff;
        border-bottom: 1px solid #ececec;
    }
    .fore-left-one-dif{
    	display:inline-block;
    	width:15%;
    }
     .model-fore-dif  .fore-right-dif{
        display:block;
        width:35%;
        text-align: center;
        float:right;
        font-size:12px;
    }
    .fore-left-one-dif img{
    	width:30px;
    	display:block;
    	margin-left:20%;
    	border-radis:50%;
    }
    .model-fore-dif  .fore-left-dif{
        display:inline-block;
        width:48%;
        color:#707070;

    }
   
    .model-fore-dif .fore-mid-dif span{
        display:block;
    }
    .model-fore-dif .fore-left-dif .fore-top-dif span{
       
        font-size:12px;
    }
    .model-fore-dif .fore-line-dif{
        width:19.4rem;
        background-color: #ccc;
        height:1px;
        display:inline-block;
        float:right;
        margin-top:0.3rem;
    }
    .fore-right-dif .weui_switch{
        margin-right:8% !important; 
        float:right;
    }
    .font-little{
    	font-size:11px;
    	color:#c2c2c2;
    }
    .b-words{
        text-align: center;
        display:block;
        margin:13px auto;
        float:right;
        margin-right:6%;
        color:#c2c2c2;
        font-size:11px;
    }
    .bottom-red-btn{
        width:100%;
        position:fixed;
        bottom:0;
    }
    .bottom-red-btn .yes-btn{
        background-color:#d05351;
        display:block;
        text-align:center;
        color:#f3f5f5;
        padding:12px 0;
        font-size:13px;
    }
    .bottom-red-btn .no-btn{
        background-color:#d05351;
        display:block;
        text-align:center;
        color:#d68380;
        padding:12px 0;
        font-size:13px;
    }
</style>