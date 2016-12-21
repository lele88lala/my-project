<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">CRM部人员管理</x-header>
  </div>
  <div class="top">
    <div class="head-img"><img class="img-head" src="../../assets/login_btn_upload@2x.png"></div>
    <div class="right-words">
        <span>红牛城市传奇争霸赛-公开组</span>
        <span>2016/09/20-2016/09/24</span>
        <span>北京赛区</span>
    </div>
    <div class=>

    </div>
</div>
<div class="p-no-data" style="display:none">
    暂无部门人员
</div>
<div >
<group>
  <cell title="二维码" value="扫描授权赛区负责人" is-link class="cell-group" v-link="{ path: '/scanCodeJoinGroup'}"><img class="er-code" src="../../assets/login_btn_upload@2x.png"></cell>
</group>
<div class=pl>
  CRM部人员列表
</div>
<group title="" class="">
    <div class="model-fore-dif-t crm-bottom-model">
        
        <div class="fore-left-t crm-left-words">
            <span class="top-words">编号： 009</span>
            <span class="bot-words">张某某</span>
        </div>
        <div class="fore-right-dif-t crm-btn">
            <span><x-button class="btns" mini type="primary" @click="onclicks">解除权限</x-button></span>
        </div>
    </div>
    <div class="model-fore-dif-t crm-bottom-model">
            
            <div class="fore-left-t crm-left-words">
                <span class="top-words">编号： 009</span>
                <span class="bot-words">张某某</span>
            </div>
            <div class="fore-right-dif-t crm-btn">
                <span><x-button class="btns" mini type="primary" @click="onclicks">解除权限</x-button></span>
            </div>
      </div>
      <div class="model-fore-dif-t crm-bottom-model">
        
          <div class="fore-left-t crm-left-words">
              <span class="top-words">编号： 009</span>
              <span class="bot-words">张某某</span>
          </div>
          <div class="fore-right-dif-t crm-btn">
              <span><x-button class="btns" mini type="primary" @click="onclicks">解除权限</x-button></span>
          </div>
      </div>
  </group>
</div>
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
import Switch from 'vux/src/components/switch'
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
    Switch,
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
   .crm-btn .weui_btn_mini{
    display:block;
    float:right;
    margin-right:10%;
    margin-top:20px !important;
   }
   .crm-bottom-model{
    height:64px !important;
   }
   .crm-left-words span{
    display:block;
    padding-top:5px;
    padding-left:5px;
   }
   .crm-left-words .top-words{
    margin:0 0 !important;
    padding:0 5px !important;
   }
   .bot-words{
    font-size:12px;
    color:#bdbdbd;
   }
</style>