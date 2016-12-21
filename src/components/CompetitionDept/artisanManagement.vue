<template>
    <div class="common-header">
        <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">技术人员管理</x-header>
        </div>
  <div class="top">
    <div class="head-img"><img class="img-head" src="../../assets/login_btn_upload@2x.png"></div>
    <div class="right-words">
        <span>红牛城市传奇争霸赛-公开组</span>
        <span>2016/09/20-2016/09/24</span>
        <span>北京赛区</span>
    </div>

</div>
<group>
  <cell title="二维码" value="扫描加入团队" is-link class="cell-group" v-link="{ path: '/scanCodeJoinGroup'}"><img class="er-code" src="../../assets/login_btn_upload@2x.png"></cell>
</group>
<div class="p-no-data"  style="display:none">
    暂无技统人员
</div>
<div>
	<div class=pl>
	  技术统计人员列表
	</div>
	<group title="" class="">
	    <div  class="artbottom">
		        <div class="people">
		            <div class="left"><div><span>006</span><span> 张小帅</span></div><div><span>手机号:</span><span>13029398103</span></div></div>
		            <div class="right"><x-button class="btn del-but" mini type="primary"  @click="confirms">&nbsp;&nbsp;&nbsp;&nbsp;移除&nbsp;&nbsp;&nbsp;&nbsp; </x-button></div>
		        </div>
	    </div>
	     <div  class="artbottom">
		        <div class="people">
		            <div class="left"><div><span>006</span><span> 张小帅</span></div><div><span>手机号:</span><span>13029398103</span></div></div>
		            <div class="right"><x-button class="btn del-but" mini type="primary"  @click="confirms">&nbsp;&nbsp;&nbsp;&nbsp;移除&nbsp;&nbsp;&nbsp;&nbsp; </x-button></div>
		        </div>
	    </div>

	</group>
	<div class="modal-float-tip-conf" style="display:none" id="makeconfirm">
		<div class="modal-float-tip-conf-wrapper">
		    <div class="top-tips">确定移除该人员么</div>
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
  data () {
    return {
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      n: 4,
      m: '待委派比赛'
    }
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
.cell-group{
         background-color:#fff;
         color:#333333;
         font-size:13px;
}
    .weui_cell_ft{
      color:#BDBDBD !important;
      font-size:12px;
    }
    .weui_cells{
      margin-top:10px !important;
    }
    .er-code{
      width:25px;
      vertical-align: middle;
      margin-left:8px;
    }
    .btns{
      font-size:10px;
      background-color:#607cac !important;
      margin-top:0px !important ;
     
    }
    .weui_cell_bd>p{
      color:#707070 !important;
    }
    div .pl{
      height:10px;
      font-size:14px;
      padding-top:10px;
      padding-bottom:10px;
      padding-left:12px;
      color:#929292;
    }
    .del-but{
    	background-color:#607cac !important;
    }
</style>