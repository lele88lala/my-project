<template>
<div class="common-header">
<x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">赛事管理</x-header>
</div>
  <div class="top">
    <div class="head-img"><img class="img-head" src="../../assets/login_btn_upload@2x.png"></div>
    <div class="right-words">
        <span>{{info.matchName}}-{{info.groupName}}</span>
        <span>{{beginD}}- {{endD}}</span>
        <span>{{info.divsionName}}</span>
    </div>
</div>
<group>
<template v-for="ower in owerinfo">
<cell v-bind:title="ower.nickname" value="" class="cell-group"  ><x-button class="btns" mini type="primary" @click="onclicks(ower.mgerId)">解除权限</x-button></cell>
<!-- <cell title="负责人：张晓帅" value=""  style="display:none" class="cell-group"></cell> -->
</template>
<template v-if="owerinfo.length == 0">
<cell v-if="info.rightType == 1" title="二维码" value="扫描授权赛区负责人" is-link class="cell-group" v-link="{ path: '/scanCodeJoinGroup'}"><img class="er-code" src="../../assets/icon_code.png"></cell>
</template>
</group>
 
<group title="">
    <cell v-if="info.rightType==3&&info.depCode==1||info.rightType==1 ||info.rightType ==2" title="竞赛部" value="管理比赛 管理技统 确认比分 确认晋级" is-link class="cell-group" v-link="{ path: '/competitionDept' ,query:{divisionId:divisionId,token:token,matchName:info.matchName,groupName:info.groupName,beginD:beginD,endD:endD,divsionName:info.divsionName}}"></cell>
    <cell v-if="info.rightType==3&&info.depCode==2||info.rightType==1 ||info.rightType ==2" title="CRM部" value="管理球队 督促球队" is-link class="cell-group" v-link="{ path: '/crmDept' ,query:{divisionId:divisionId,token:token,matchName:info.matchName,groupName:info.groupName,beginD:beginD,endD:endD,divsionName:info.divsionName}}"></cell>
     <!-- <cell v-if="info.rightType==3&&info.depCode==3||info.rightType==1 ||info.rightType ==2" title="外联部" value="查看服务 查看场地" is-link class="cell-group" v-link="{ path: '/contactDept' ,query:{divisionId:divisionId,token:token,matchName:info.matchName,groupName:info.groupName,beginD:beginD,endD:endD,divsionName:info.divsionName}}"></cell> -->
    <cell v-if="info.rightType==3&&info.depCode==4||info.rightType==1 ||info.rightType ==2" title="运营情况" value="赛事运营数据统计" is-link class="cell-group" v-link="{ path: '/operationSituation' ,query:{divisionId:divisionId,token:token}}"></cell>
  </group>
  <div class="modal-float-tip" style="display:none" id="dealtips">
    <div class="wrapper">
        <div class="tips">确定解除权限吗?</div>
        <span  class="left-tips" @click="cancels">取消</span><span class="right-tips" @click="gomakesure">确定</span>
    </div>
</div>
</template>

<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import XButton from 'vux/src/components/x-button'
import XHeader from 'vux/src/components/x-header'
var Vue = require('vue')
var VueResource = require('vue-resource')
Vue.use(VueResource)
export default {
  methods: {
    onclicks: function (mgerId) {
      document.getElementById('dealtips').style.display = 'block'
      this.mgerIds = mgerId
    },
    cancels: function () {
      document.getElementById('dealtips').style.display = 'none'
    },
    gomakesure: function () {
      Vue.http.get('match_mg/mager_relieve.htm?token=' + this.token + '&mgerId=' + this.mgerIds).then((response) => {
        document.getElementById('dealtips').style.display = 'none'
        window.location.reload
      }, (response) => {
      // error callback
      })
    },
    timeConvert: function (d) {
      var date = new Date(d * 1000)
      var Y = date.getFullYear() + '/'
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/'
      var D = date.getDate() + ' '
      // var h = date.getHours() + ':'
      // var m = date.getMinutes() + ':'
      // var s = date.getSeconds()
      return Y + M + D
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
      m: '待委派比赛',
      token: '',
      divisionId: '',
      info: '',
      beginD: '',
      endD: '',
      groupId: '',
      owerinfo: [],
      mgerIds: ''
    }
  },
  ready () {
    var id = this.$route.query
    this.token = id.token
    this.divisionId = id.divisionId
    this.groupId = id.groupId
    Vue.http.get('/match_mg/group_division.htm?token=' + id.token + '&divisionId=' + id.divisionId).then((response) => {
      // console.log(response.data.data)
      this.$set('info', response.data.data)
      var btime = this.timeConvert(this.info.beginDate)
      var etime = this.timeConvert(this.info.endDate)
      this.beginD = btime
      this.endD = etime
      Vue.http.get('match_mg/division_mger_list.htm?token=' + id.token + '&groupId=' + id.groupId).then((response) => {
        this.$set('owerinfo', response.data.data)
      }, (response) => {
      // error callback
      })
    }, (response) => {
    // error callback
    })
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
    .common-header *{
      font-size:15px !important;
    }
</style>