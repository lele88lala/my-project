<template>
<div class="common-header">
        <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">选择服务人员</x-header>
        </div>
	<div class="model">
		    <div class="left">
		        <div class="tops">
		            <img src="../../assets/login_btn_upload@2x.png">
		            <span>城市队</span>
		        </div>
		        <div class="tops">
		            <img src="../../assets/login_btn_upload@2x.png">
		            <span>传奇队</span>
		        </div>
		    </div>
		    <div class="mid">
		         <span class="time">12:00 - 13:00</span>
		         <span class="match-space">城市队主场馆</span>
		    </div>
		    <div class="right">
		       
		    </div>
	</div>
	<div class="j-p">
		<span>已委派技统人员: 003 李某某</span>
	</div>
	<div class="c-p">
		<span>已委派裁判人员: 003 李某某</span>
	</div>
    <div>
	    <div class="slider-wrapper">
	        <span class="slider"><span  class="left-b-words" @click="leftonc">技术统计人员</span><span class="left-words" id="leftbwords">技术统计人员</span><span  class="right-b-words" @click="rightonc">裁判人员</span><span id="rightbwords" class="right-words">裁判人员</span></span>
	    </div>
    </div>
    <div class="bottom-wrapper">
        <div  class="artbottom">
	        <div class="people">
	            <div class="left"><div><span>006</span><span> 张小帅</span></div><div><span>手机号:</span><span>13029398103</span></div></div>
	            <div class="right"><x-button class="btn" mini type="primary" v-link="{ path: '/delegateArtisan'}" @click="confirms">&nbsp;&nbsp;&nbsp;&nbsp;改派&nbsp;&nbsp;&nbsp;&nbsp; </x-button></div>
	        </div>
        </div>
        <div  class="artbottom">
	        <div class="people">
	            <div class="left"><div><span>006</span><span> 张小帅</span></div><div><span>手机号:</span><span>13029398103</span></div></div>
	            <div class="right"><x-button class="btn" mini type="primary" v-link="{ path: '/delegateArtisan'}" @click="confirms">&nbsp;&nbsp;&nbsp;&nbsp;改派&nbsp;&nbsp;&nbsp;&nbsp; </x-button></div>
	        </div>
        </div>
    </div>
    <div class="modal-float-tip-conf" style="display:none" id="makeconfirm">
	    <div class="modal-float-tip-conf-wrapper">
	        <div class="top-tips">007号技统人员此时段已有任务安排</div>
	        <span  class="bot-tips" @click="makesure">确定</span>
	    </div>
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
    },
    rightonc: function () {
      document.getElementById('leftbwords').style.display = 'none'
      document.getElementById('rightbwords').style.display = 'block'
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
    .j-p ,.c-p{
    	font-size:14px;
    	color:#707070 !important;
    }
	.j-p{
		color:#484848;
        background-color:#fff;
        border-top: 1px solid #ececec;
        border-bottom: 1px solid #ececec;
    }
    .c-p{
    	color:#484848;
        background-color:#fff;
        border-bottom: 1px solid #ececec;
    }
    .j-p span,.c-p span{
    	display:block;
        padding:10px 0 10px 10px;
    }
     .artbottom{
        height:60px;
        background-color:#fff;
        color:#707070;
        border-bottom:1px solid #ececec;
    }
    .people .left{
        float:left;
        width:50%;
        font-size:14px;
    }
    .people .right{
        float:right;
        margin-right:5%;
        margin-top:16px;
        font-size:14px;
    }
    .people span{
        display:inline-block;
        padding-left:12px;
        padding-top:6px;
    }
    .bottom-wrapper{
    	margin-top:10px;
    }
    /*.people .right span{
        padding:3px 30px;
        background-color:#dc5c60;
        border-radius: 2px;
        color:#fff;
        margin-top:20px;
    }*/
    .slider-wrapper{
        background-color:#fff;
        text-align: center;
        padding:18px 0;
        font-size:10px;
    }
    .slider{
        display:block;
        background-color:#ededed;
        padding:12px 20px;
        width:180px;
        margin:0 auto;
        border-radius: 20px;
        position:relative;
    }
    .left-b-words,.right-b-words, .left-words,.right-words{
        display:inline-block;
        position:absolute;
    }
    .slider-wrapper .left-b-words{
    	color:#a6a6a6;
        top:3px;
        left:10%;
    }
    .slider-wrapper .right-b-words{
    	color:#a6a6a6;
        top:3px;
        right:12%;
    }
    .slider-wrapper .left-words{
    	display:none;
        top:2px;
        left:1.5%;
        width:80px;
        padding:2px 20px;
        background-color:#fff;
        border-radius: 10px;

    }
    .slider-wrapper .right-words{
    	font-size:10px;
        top:2px;
        right:1.5%;
        width:80px;
        padding:2px 20px;
        background-color:#fff;
        border-radius: 10px;
    }
    .modal-float-tip-conf{
        position: fixed;
        background-color: rgba(0, 0, 0, .5);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .modal-float-tip-conf-wrapper span{
        display:block;
        text-align: center;
        line-height: 45px;
        height:45px;
        font-size:12px;
    }
    .top-tips{
        text-align: center;
        height:100px;
        line-height: 100px;
        border-bottom: 1px solid #ececec;
        font-size:12px;

    }
    .modal-float-tip-conf-wrapper {
        /*padding: 2rem 0;*/
        background-color: #fff;
        width: 250px;
        height: 140px;
        margin: 0 auto;
        margin-top: 150px;
        font-size: 12px;
        border-radius: 2px;
        color:#838383;
    }
    .bot-tips{
        display:inline-block;
        text-align: center
    }
</style>