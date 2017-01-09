<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">裁判执行</x-header>
  </div>
	 <div>
	    <div class="slider-wrapper">
	        <span class="slider"><span  class="left-b-words urge-match-left" @click="leftonc">未完成</span><span class="left-words" id="leftbwords">未完成</span><span  class="right-b-words" @click="rightonc">已完成</span><span id="rightbwords" class="right-words">已完成</span></span>
	    </div>
    </div>
	<div class="top-time" >
	        2016-07-09 星期六
	    
	</div>
	<div id="wait-data" style="display:none">
		<div class="model artisan-model btn-size">
			    <div class="left">
			        <div class="tops">
			            <img src="../../assets/login_btn_upload@2x.png">
			            <span>首都师范大学科德学院队首都师范大学</span>
			        </div>
			        <div class="tops">
			            <img src="../../assets/login_btn_upload@2x.png">
			            <span>传奇队</span>
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
			    <div class="right">
			         <x-button class="btn-dis" mini disabled style="display:block">等待执裁</x-button>
			    </div>
		        <span class="line"></span>
		</div>
		<div class="model artisan-model btn-size">
			    <div class="left">
			        <div class="tops">
			            <img src="../../assets/login_btn_upload@2x.png">
			            <span>首都师范大学科德学院队首都师范大学</span>
			        </div>
			        <div class="tops">
			            <img src="../../assets/login_btn_upload@2x.png">
			            <span>首都师范大学科德学院队首都师范大学</span>
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
			    <div class="right">
			         <x-button class="btn-dis" mini disabled style="display:block">等待确认比分</x-button>
			    </div>
		        <span class="line"></span>
		</div>
	</div>
	<div id="done-data">
		<div class="model artisan-model btn-size">
			    <div class="left">
			        <div class="tops">
			            <img src="../../assets/login_btn_upload@2x.png">
			            <span>首都师范大学科德学院队首都师范大学</span>
			        </div>
			        <div class="tops">
			            <img src="../../assets/login_btn_upload@2x.png">
			            <span>传奇队</span>
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
			    <div class="right">
				    <div class="fore-side referee-part">
		                <span>50</span>
		                <span>40</span>
	                </div>
			    </div>
		        <span class="line"></span>
		</div>
		<div class="model artisan-model btn-size">
			    <div class="left">
			        <div class="tops">
			            <img src="../../assets/login_btn_upload@2x.png">
			            <span>首都师范大学科德学院队首都师范大学</span>
			        </div>
			        <div class="tops">
			            <img src="../../assets/login_btn_upload@2x.png">
			            <span>首都师范大学科德学院队首都师范大学</span>
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
			    <div class="right">
			        <div class="fore-side referee-part">
		                <span>50</span>
		                <span>40</span>
	                </div>
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
      document.getElementById('wait-data').style.display = 'block'
      document.getElementById('done-data').style.display = 'none'
    },
    rightonc: function () {
      document.getElementById('leftbwords').style.display = 'none'
      document.getElementById('rightbwords').style.display = 'block'
      document.getElementById('done-data').style.display = 'block'
      document.getElementById('wait-data').style.display = 'none'
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
	.btn-size .left{
		width:59% !important;
	}
	.btn-size .right{
		width:39% !important;
	}
	.btn-size .right .weui_btn.weui_btn_mini{
		margin-right:0% !important;
	}
	.referee-part span{
		padding-top:0px !important;
		text-align: right !important;
		padding-right:30px;
	}
</style>