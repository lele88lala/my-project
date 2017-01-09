<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">竞赛部</x-header>
  </div>
  <div class="top">
    <div class="head-img"><img class="img-head" src="../../assets/login_btn_upload@2x.png"></div>
    <div class="right-words">
        <span>{{matchName}}-{{groupName}}</span>
        <span>{{beginD}}- {{endD}}</span>
        <span>{{divsionName}}</span>
    </div>
</div>
<group>
<cell title="部门人员管理" value="" is-link class="cell-group" v-link="{ path: '/home'}"></cell>

</group>

<group title="">
    <cell title="管理比赛" value="" is-link class="cell-group" v-link="{ path: '/manageMatch' ,query:{divisionId:divisionId,token:token,type:1}}"></cell>
    <cell title="赛场服务" value="" is-link class="cell-group" v-link="{ path: '/manageArtisan',query:{divisionId:divisionId,token:token,type:2} }"></cell>
    <cell title="确认比分" value="" is-link class="cell-group" v-link="{ path: '/confirmScore',query:{divisionId:divisionId,token:token,type:3}}"></cell>
    <cell title="管理晋级" value="" is-link class="cell-group" v-link="{ path: '/prePromotinManage'}"></cell>

  </group>
  <group>
    <cell title="技统人员管理" value="" is-link class="cell-group" v-link="{ path: '/artisanManagement' ,query:{divisionId:divisionId,token:token,type:1}}"></cell>
    <cell title="裁判人员管理" value="" is-link class="cell-group" v-link="{ path: '/refereeManagement',query:{divisionId:divisionId,token:token,type:2} }"></cell>
  </group>
</template>

<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import xbutton from 'vux/src/components'
import XHeader from 'vux/src/components/x-header'
var Vue = require('vue')
var VueResource = require('vue-resource')

Vue.use(VueResource)
export default {
  components: {
    Group,
    Cell,
    xbutton,
    XHeader
  },
  data () {
    return {
      n: 4,
      m: '待委派比赛',
      token: '',
      divisionId: '',
      matchName: '',
      groupName: '',
      beginD: '',
      endD: '',
      divsionName: ''
    }
  },
  ready () {
    var id = this.$route.query
    this.token = id.token
    this.divisionId = id.divisionId
    this.matchName = id.matchName
    this.groupName = id.groupName
    this.beginD = id.beginD
    this.endD = id.endD
    this.divsionName = id.divsionName
  }
}
</script>

<style>
.cell-group{
         background-color:#fff;
         color:#333333;
         font-size:13px;
}
.right-words span {
        display: block;
    }

    .head-img, .right-words {
        display: inline-block;
    }
 .top {
        width: 100%;
        height: 4.5rem;
        padding-top: 0.5rem;
        background-color: #fff;
    }

    .img-head {
        width: 3.5rem;
        height: 3.5rem;
        vertical-align: middle;
        margin-left: 0.5rem;
    }

    .right-words {
        font-size: 13px;
        vertical-align: middle;
        margin-left: 0.5rem;
        color: #707070;
    }
    .weui_cell_ft{
      color:#BDBDBD !important;
      font-size:0.7rem;
    }
    .weui_cells{
      margin-top:10px !important;
    }
</style>