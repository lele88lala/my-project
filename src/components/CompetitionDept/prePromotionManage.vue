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
    <group>
    <cell title="选定预晋级球队 (32支)" value="" class="cell-group" v-link="{ path: '/home'}"></cell>  
    <div class="model-fore-dif-t">
        <div class="fore-left-one-dif-t">
	        <img src="../../assets/login_btn_upload@2x.png">
	    </div>
	    <div class="fore-left-t">
            城市传奇队
        </div>
	    <div class="fore-right-dif-t pre-fore-right-dif-t">
	        <span><x-button class="btn" mini type="primary" v-link="{ path: '/selectPreTeam'}">&nbsp;&nbsp;&nbsp;&nbsp;更改&nbsp;&nbsp;&nbsp;&nbsp;</x-button></span>
	    </div>
    </div>
    
    <div class="model-fore-dif-t">
        <div class="fore-left-one-dif-t">
            <img src="../../assets/login_btn_upload@2x.png">
        </div>
        <div class="fore-left-t">
            城市传奇队
        </div>
        <div class="fore-right-dif-t pre-fore-right-dif-t">
            <span><x-button class="btn" mini type="primary" v-link="{ path: '/selectPreTeam'}">&nbsp;&nbsp;&nbsp;&nbsp;更改&nbsp;&nbsp;&nbsp;&nbsp;</x-button></span>
        </div>
    </div>
    <div class="model-fore-dif-t">
        <div class="fore-left-one-dif-t">
            <img src="../../assets/login_btn_upload@2x.png">
        </div>
        <div class="fore-left-t">
            城市传奇队
        </div>
        <div class="fore-right-dif-t pre-fore-right-dif-t">
            <span><x-button class="btn" mini type="primary" v-link="{ path: '/selectPreTeam'}">&nbsp;&nbsp;&nbsp;&nbsp;更改&nbsp;&nbsp;&nbsp;&nbsp;</x-button></span>
        </div>
    </div>
    <div class="model-fore-dif-t ">
        <div class="fore-left-one-dif-t">
            <img src="../../assets/login_btn_upload@2x.png">
        </div>
        <div class="fore-left-t">
            城市传奇队
        </div>
        <div class="fore-right-dif-t pre-fore-right-dif-t">
            <span><x-button class="btn" mini type="primary" v-link="{ path: '/selectPreTeam'}">&nbsp;&nbsp;&nbsp;&nbsp;更改&nbsp;&nbsp;&nbsp;&nbsp;</x-button></span>
        </div>
    </div>
    </group>
    <div class="modal-float-tip" id="confirmscore" style="display:none">
        <div class="wrapper">
            <div class="tips">确定选定球队晋级?</div>
            <span  class="left-tips" @click="cancels">取消</span><span class="right-tips" @click="makesure">确定</span>
        </div>
    </div>
    <div class="bottom-red-btn"><span class="yes-btn"  @click="makesurepromotion">预晋级</span><span class="no-btn" style="display:none">预晋级</span></div>
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
    .model-fore-dif-t{
        background-color:#fff;
        border-top: 1px solid #ececec;
        height:45px
    }
    .fore-left-one-dif-t{
        clear:left;
    	display:block;
        float:left;
    	width:15%;
    }
     .model-fore-dif-t  .fore-right-dif-t{
        display:block;
        width:35%;
        text-align: center;
        float:right;
        font-size:12px;
    }
    .fore-left-one-dif-t img{
    	width:30px;
    	display:block;
        float:left;
    	margin-left:20%;
    	border-radis:50%;
        padding:8px 0px
    }
    .model-fore-dif-t  .fore-left-t{
        display:inline-block;
        padding:13px 4px;
        width:45%;
        font-size:13px;
        color:#707070;

    }
   
    .model-fore-dif-t .fore-mid-dif-t span{
        display:block;
    }
    .model-fore-dif-t .fore-left-dif-t .fore-top-dif-t span{
       
        font-size:12px;
    }
    .model-fore-dif-t .fore-line-dif-t{
        width:19.4rem;
        background-color: #ccc;
        height:1px;
        display:inline-block;
        float:right;
        margin-top:0.3rem;
    }
    .fore-right-dif-t .weui_switch{
        margin-right:8% !important; 
        float:right;
    }
    .pre-fore-right-dif-t{
        margin-top: 8px;
    }
</style>