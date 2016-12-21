<template>
<div class="common-header">
<x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">赛事管理</x-header>
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
<cell title="张晓帅" value="" class="cell-group" style="display:none" ><x-button class="btns" mini type="primary" @click="onclicks">解除权限</x-button></cell>
<cell title="负责人：张晓帅" value=""  style="display:none" class="cell-group"></cell>

<cell title="二维码" value="扫描授权赛区负责人" is-link class="cell-group" v-link="{ path: '/scanCodeJoinGroup'}"><img class="er-code" src="../../assets/login_btn_upload@2x.png"></cell>
</group>

<group title="">
    <cell title="竞赛部" value="管理比赛 管理技统 确认比分 确认晋级" is-link class="cell-group" v-link="{ path: '/competitionDept' }"></cell>
    <cell title="CRM部" value="管理球队 督促球队" is-link class="cell-group" v-link="{ path: '/crmDept' }"></cell>
     <cell title="外联部" value="查看服务 查看场地" is-link class="cell-group" v-link="{ path: '/contactDept' }"></cell>
    <cell title="运营情况" value="赛事运营数据统计" is-link class="cell-group" v-link="{ path: '/operationSituation' }"></cell>

  </group>
  <div class="modal-float-tip" style="display:none" id="dealtips">
    <div class="wrapper">
        <div class="tips">确定解除权限吗?</div>
        <span  class="left-tips" @click="cancels">取消</span><span class="right-tips" @click="cancels">确定</span>
    </div>
</div>
</template>

<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import XButton from 'vux/src/components/x-button'
import XHeader from 'vux/src/components/x-header'

export default {
  methods: {
    onclicks: function () {
      document.getElementById('dealtips').style.display = 'block'
    },
    cancels: function () {
      document.getElementById('dealtips').style.display = 'none'
    },
    gomakesure: function () {
      document.getElementById('pop').style.display = 'block'
    },
    makesuredel: function () {
      document.getElementById('pop').style.display = 'none'
    },
    makesureyes: function () {
      document.getElementById('pop').style.display = 'none'
    }
  },

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
  }
}
</script>

<style>
    .common-header .vux-header-title{
    	color:#000;
    }
    .common-header .vux-header .vux-header-left .vux-header-back:before{
	    content: "";
	    position: absolute;
	    display: block;
	    top: 2px;
	    left: 0;
	    width: 12px;
	    height: 12px;
	    border: 1px solid #000;
	    border-width: 1px 0 0 1px;
	    margin-left: 3px;
	    margin-top: 1px;
	    -webkit-transform: rotate(315deg);
	    transform: rotate(315deg);    
    }
    .common-header{
    	border-bottom:1px solid #ccc;
    }
</style>