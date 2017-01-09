<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">外联部人员管理</x-header>
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
  <cell title="二维码" value="扫描加入团队" is-link class="cell-group" v-link="{ path: '/scanCodeJoinGroup'}"><img class="er-code" src="../../assets/login_btn_upload@2x.png"></cell>
</group>
<div class=pl>
  外联部人员列表
</div>
<group title="" class="">
    <cell title="张晓帅" value=""  class="cell-group"><x-button class="btns" mini type="primary"  @click="onclicks">解除权限</x-button></cell>
    <cell title="张晓帅" value=""  class="cell-group"><x-button class="btns" mini type="primary"  @click="onclicks">解除权限</x-button></cell>
    <cell title="张晓帅" value=""  class="cell-group"><x-button class="btns" mini type="primary"  @click="onclicks">解除权限</x-button></cell>

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
    /*.er-code{
      width:25px;
      vertical-align: middle;
      margin-left:8px;
    }*/
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
      padding-top:5px;
      padding-bottom:10px;
      padding-left:12px;
      color:#929292;
    }
</style>