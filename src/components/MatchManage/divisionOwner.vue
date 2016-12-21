<template>
	<div class="common-header">
        <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">赛区负责人管理</x-header>
    </div>
    <div class="plls operation-pls">
        管理人员列表
    </div>
    <group title="" class="select-division-group division-owner-group">
    <cell title="二维码" value="扫描授权赛区负责人" is-link class="cell-group" v-link="{ path: '/scanCodeJoinGroup'}"><img class="er-code" src="../../assets/login_btn_upload@2x.png"></cell>
    <div class="model-fore-dif-t crm-bottom-model">
        
        <div class="fore-left-t crm-left-words">
            <span class="top-words">上海赛区</span>
            <span class="bot-words">负责人：张小帅</span>
        </div>
        <div class="fore-right-dif-t crm-btn">
            <span><x-button class="btns" mini type="primary" @click="onclicks">解除权限</x-button></span>
        </div>
    </div>
    <div class="model-fore-dif-t crm-bottom-model">
            
            <div class="fore-left-t crm-left-words">
                <span class="top-words">上海赛区</span>
                <span class="bot-words">负责人：张小帅</span>
            </div>
            <div class="fore-right-dif-t crm-btn">
                <span><x-button class="btns" mini type="primary" @click="onclicks">解除权限</x-button></span>
            </div>
      </div>
      <div class="model-fore-dif-t crm-bottom-model">
        
          <div class="fore-left-t crm-left-words">
                <span class="top-words">上海赛区</span>
                <span class="bot-words">负责人：张小帅</span>
          </div>
          <div class="fore-right-dif-t crm-btn">
              <span><x-button class="btns" mini type="primary" @click="onclicks">解除权限</x-button></span>
          </div>
      </div>
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
	.division-owner-group .weui_cell{
		border-bottom:1px solid #ececec !important;
		height:45px !important;
	}
  .plls{
      height:10px;
      font-size:13px;
      padding-top:5px;
      padding-bottom:14px;
      padding-left:12px;
      color:#707070;
      border-bottom: 1px solid #ececec;
      border-top: 1px solid #ececec;
  }
</style>