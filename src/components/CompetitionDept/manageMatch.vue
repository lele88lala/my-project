<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">管理比赛</x-header>
  </div>
<div class="search_tab_wrapper">
    <div class="search_tab">
        <img src="../../assets/icon_search@2x.png"><input type="text" placeholder="搜索球队名称">
        
    </div>
    <span class="search-button">搜索</span>
</div>
<!-- <div class="p-no-data" v-if="info == null">
    暂无可处理的比赛
</div> -->
<!-- <scroller lock-y :scrollbar-x="true"> -->
<tab class="">
<template v-for="times in timelist2">
  <tab-item  :selected="'已发货' === '已发货'" @click="hehe(timelist[$index], $event)" class="time-bottom-line" active-color="#ef5350" default-color="#9f9f9f" id="list-time">{{times}}</tab-item>
</template>
</tab>
<!-- </scroller> -->
<div>
<template v-for="match in matchlist">
<div class="model">
    <div class="left">
        <div class="tops">
            <img src="../../assets/login_btn_upload@2x.png">
            <span>{{match.hTeamName}}</span>
        </div>
        <div class="tops">
            <img src="../../assets/login_btn_upload@2x.png">
            <span>{{match.gTeamName}}</span>
        </div>
        <div class="tops tops-b">
            <img class="time-img" src="../../assets/gauntlet_icon_time@2x.png">
            <span class="time">12:00 - 13:00</span>
        </div>
    </div>
    <div class="right">
         <span><x-button class="btn" mini type="primary" @click="deamMatch(le.gTeamId,le.hTeamId,le.eventId)">处理比赛</x-button><x-button class="btn-dis" mini disabled style="display:none">主队弃权</x-button><x-button class="btn-dis" mini disabled style="display:none">客队爽约</x-button><x-button class="btn-dis" mini disabled style="display:none">比赛取消</x-button></span>
    </div>
    <span class="line"></span>
</div>
</template>
<!-- <div class="model">
    <div class="left">
        <div class="tops">
            <img src="../../assets/login_btn_upload@2x.png">
            <span>城市队城市队城市队城市队城市队城市队</span>
        </div>
        <div class="tops">
            <img src="../../assets/login_btn_upload@2x.png">
            <span>传奇队</span>
        </div>
        <div class="tops tops-b">
            <img class="time-img" src="../../assets/gauntlet_icon_time@2x.png">
            <span class="time">12:00 - 13:00</span>
        </div>
    </div>
    <div class="right">
         <span><x-button class="btn" mini type="primary" @click="cancels">处理比赛</x-button> <x-button class="btn-dis" mini disabled style="display:none">主队弃权</x-button><x-button class="btn-dis" mini disabled style="display:none">客队爽约</x-button><x-button class="btn-dis" mini disabled style="display:none">比赛取消</x-button></span>
    </div>
    <span class="line"></span>
</div> -->
<div class="load-more" v-if="info != null">
    上拉加载更多数据
</div>
 <div id="dealtips" class="modal-float" style="display:none">
    <div class="tab-wrapper">
    <!-- type=1 主队弃权,type=2 客对弃权,type=3 主队爽约,type=4 客队爽约，type=5 比赛取消  -->
    <div class="tab" @click="gomakesure(1)">
        双方弃权
     </div>
     <div class="tab" @click="gomakesure(1)">
        主队弃权
     </div>
        <div class="tab" @click="gomakesure(2)">
            客队弃权
        </div>
        <div class="tab" @click="gomakesure(5)">
            比赛取消
        </div>
        <div class="tab" @click="gomakesure(3)">
            主队爽约
        </div>
        <div class="tab" @click="gomakesure(4)">
            客队爽约
        </div>
        <div id="cancels" class="tab cancel" @click="cancels">
            取消
        </div>
    </div>
</div>
<div id="pop" class="modal-float-tip" style="display:none">
    <div class="wrapper" >
        <div class="tips">确定主队爽约比赛吗?</div>
        <span  class="left-tips" @click="makesuredel">取消</span><span class="right-tips" @click="makesureyes">确定</span>
    </div>
</div>
<div class="modal-float-tip" style="display:none">
    <div class="wrapper">
        <div class="tips">确定客队爽约比赛吗?</div>
        <span  class="left-tips" >取消</span><span class="right-tips" >确定</span>
    </div>
</div>
<div class="modal-float-tip" style="display:none">
    <div class="wrapper">
        <div class="tips">确定客队爽约比赛吗?</div>
        <span  class="left-tips" >取消</span><span class="right-tips" >确定</span>
    </div>
</div>
<div class="modal-float-tip" style="display:none">
    <div class="wrapper">
        <div class="tips">确定主队弃权比赛吗?</div>
        <span  class="left-tips" >取消</span><span class="right-tips" >确定</span>
    </div>
</div>
<div class="modal-float-tip" style="display:none">
    <div class="wrapper">
        <div class="tips">确定客队弃权比赛吗?</div>
        <span  class="left-tips" >取消</span><span class="right-tips" >确定</span>
    </div>
</div>
<input type="hidden" id="hTeamId" value="">
<input type="hidden" id="eventId" value="">
<input type="hidden" id="gTeamId" value="">
<input type="hidden" id="dealType" value="">
</div>
</template>
<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import XButton from 'vux/src/components/x-button'
import XHeader from 'vux/src/components/x-header'
import {Tab, TabItem} from 'vux/src/components/tab'
import Scroller from 'vux/src/components/scroller'
import {dateFormat} from '../../assets/dateconvert'
var Vue = require('vue')
var VueResource = require('vue-resource')
Vue.use(VueResource)
export default {

  methods: {
    deamMatch: function (gTeamId, hTeamId, eventId) {
      document.getElementById('hTeamId').value = hTeamId
      document.getElementById('gTeamId').value = gTeamId
      document.getElementById('eventId').value = eventId
      document.getElementById('dealtips').style.display = 'block'
    },
    cancels: function () {
      document.getElementById('dealtips').style.display = 'none'
    },
    gomakesure: function (type) {
      document.getElementById('dealType').value = type
      document.getElementById('pop').style.display = 'block'
    },
    makesuredel: function () {
      document.getElementById('pop').style.display = 'none'
      document.getElementById('dealtips').style.display = 'none'
    },
    refreshData: function () {
      Vue.http.get('/match_mg/event_list.htm?token=' + this.token + '&divisionId=' + this.divisionId + '$type=' + this.type + '&page=' + this.pn).then((response) => {
        this.$set('info', response.data.data)
      }, (response) => {
      // error callback
      })
    },
    makesureyes: function () {
      var dealType = document.getElementById('dealType').value
      var eventId = document.getElementById('eventId').value
      var hTeamId = document.getElementById('hTeamId').value
      var gTeamId = document.getElementById('gTeamId').value
      if (parseInt(dealType) === 1) {
        Vue.http.get('/match_mg/abstain_event.htm?token=' + this.token + '&eventId=' + eventId + '&teamId=' + hTeamId).then((response) => {
          this.refreshData()
        }, (response) => {
        })
      } else if (parseInt(dealType) === 2) {
        Vue.http.get('/match_mg/abstain_event.htm?token=' + this.token + '&eventId=' + eventId + '&teamId=' + gTeamId).then((response) => {
          this.refreshData()
        }, (response) => {
        })
      } else if (parseInt(dealType) === 3) {
        Vue.http.get('/match_mg/miss_event.htm?token=' + this.token + '&eventId=' + eventId + '&teamId=' + hTeamId).then((response) => {
          this.refreshData()
        }, (response) => {
        })
      } else if (parseInt(dealType === 4)) {
        Vue.http.get('/match_mg/miss_event.htm?token=' + this.token + '&eventId=' + eventId + '&teamId=' + gTeamId).then((response) => {
          this.refreshData()
        }, (response) => {
        })
      } else if (parseInt(dealType === 5)) {
        Vue.http.get('/match_mg/cancel_event.htm?token=' + this.token + '&eventId=' + eventId).then((response) => {
          this.refreshData()
        }, (response) => {
        })
      }
      document.getElementById('pop').style.display = 'none'
      document.getElementById('dealtips').style.display = 'none'
    },
    getSiblings: function (elm) {
      var a = []
      var p = elm.parentNode.children
      for (var i = 0, pl = p.length; i < pl; i++) {
        if (p[i] !== elm) a.push(p[i])
      }
      return a
    },
    hehe: function (msg, event) {
      window.alert(msg)
      event.target.classList.add('time-bottom-line')
      var b = this.getSiblings(event.target)
      for (var i = b.length - 1; i >= 0; i--) {
        b[i].classList.remove('time-bottom-line')
      }
    }
  },
  components: {
    Group,
    Cell,
    XButton,
    XHeader,
    Tab,
    TabItem,
    Scroller
  },
  data () {
    return {
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      timeNotFormate: '',
      timelist2: [],
      test: [],
      timelist: [],
      matchlist: [],
      token: '',
      divisionId: '',
      type: '',
      pn: 1
    }
  },
  ready () {
    var id = this.$route.query
    var adata = []
    this.token = id.token
    this.divisionId = id.divisionId
    this.type = id.type
    Vue.http.get('/match_mg/event_days.htm?token=' + id.token + '&divisionId=' + id.divisionId + '&type=' + id.type).then((response) => {
      // this.$set('timelist2', response.data.data)
      this.$set('timelist', response.data.data)
      // this.$set('timelist2', response.data.data)
      this.test = this.timelist
      this.$set('timeNotFormate', response.data.data[0])
      for (var i = this.timelist.length - 1; i >= 0; i--) {
        this.timelist2[i] = dateFormat(response.data.data[i])
      }
      window.alert(this.timelist2[0])
      Vue.http.get('/match_mg/event_list.htm?token=' + id.token + '&divisionId=' + id.divisionId + '&type=' + id.type + '&page=' + this.pn + '&queryDay=' + this.timeNotFormate).then((response) => {
        this.$set('matchlist', response.data.data)
        window.alert(this.timelist[0])
        window.alert(this.test[0])
      }, (response) => {
      // error callback
      })
    }, (response) => {
    })
    document.onscroll = function () {
      var windowH = window.screen.height
      var scropT = document.body.scrollTop
      var sc = document.documentElement.scrollTop === 0 ? document.body.scrollHeight : document.documentElement.scrollHeight
      if (windowH + scropT >= sc) {
        document.querySelector('.load-more').innerHTML = '加载中...'
        // document.querySelector('.load-more').style.display = 'none'
        // document.querySelector('.loadding').style.display = 'block'
        var arr = []
        this.pn++
        Vue.http.get('/match_mg/event_list.htm?token=' + id.token + '&divisionId=' + id.divisionId + '$type=' + id.type + '&page=' + this.pn).then((response) => {
          console.log(response.data.data)
          adata = response.data.data
          // this.$set('info', response.data.data)
          if (adata == null) {
            document.querySelector('.load-more').innerHTML = '已经加载全部了...'
          } else {
            for (var i = 0; i < adata.length; i++) {
              arr.push('<div class="model">')
              arr.push('<div class="left">')
              arr.push('<div class="tops">')
              arr.push('<img src=' + this.info.hTeamPic + '>')
              arr.push('<span>' + this.info.hTeamName + '</span>')
              arr.push('</div>')
              arr.push('<div class="tops">')
              arr.push('<img src=' + this.info.gTeamPic + '>')
              arr.push('<span>' + this.info.gTeamName + '</span>')
              arr.push('</div>')
              arr.push('<div class="tops tops-b">')
              arr.push('<img class="time-img" src="../../assets/gauntlet_icon_time@2x.png">')
              arr.push('<span class="time">' + this.info.beginDate + ' - ' + this.info.endDate + '</span>')
              arr.push('</div>')
              arr.push('</div>')
              arr.push('<div class="right">')
              arr.push('<span><x-button class="btn" mini type="primary" @click="onclicks">处理比赛</x-button></span>')
              arr.push('</div>')
              arr.push('</div>')
              arr.push('<span class="line"></span>')
            }
            var line = document.createElement('div')
            line.innerHTML = arr.join('')
            document.querySelector('.load-more').innerHTML = '上拉加载更多数据'
          }
        }, (response) => {
        // error callback
        })
      }
    }
  }

}
</script>
<style>
    .time-bottom-line{
      border-bottom:1px solid red !important;
    }
    .top-time{
        text-align: center;
        padding:10px 0px;
        background-color: #efefef;
        font-size:12px;
        color:#333333;
    }
    .model{
        background-color:#fff;
        height:80px;
    }
     .model .mid{
        text-align: center;
        height:80px;
        font-size:13px;

    }
     .model  .left{
        float:left;
        width:66%;
        color:#707070;
        font-size:13px;

    }
    .model  .right,.model .right-deal{
        float:right;
        width:34%;
    }
    /*.model .mid{
         display:inline-block;
        width:33%;
        color:#c2c2c2;
        font-size:13px;
    }*/
     .model .left .tops img{
        width:15px;
        vertical-align: middle;
        padding:5px 0 5px 5px;

    }
    .model .mid span{
        display:block;
        padding:8px 0 8px 0;
    }
    .time{
        font-size:13px !important;
    }
    .model .right{
        margin-left:0px;
        float:right;
    }
    .model .right .weui_btn.weui_btn_mini{
        margin-right:10%;
        margin-top:25px;
        float:right;
    }
    .btn{
        background-color:#cc7372 !important;
    }
    .btn-dis{
        background-color:#fff !important;
    }
     .model .line{
        width:98%;
        background-color: #ececec;
        height:1px;
        display:inline-block;
        float:right;
    }
    .weui_btn:after{
        border:1px solid #fff !important;
    }
    .modal-float{
        position: fixed;
        background-color: rgba(0, 0, 0, .5);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .modal-float .tab{
        text-align: center;
        background-color: #fff;
        border-bottom: 1px solid #ececec;
        padding:12px 0px;
        font-size: 14px;
        color:#c2c2c2;
    }
    .tab-wrapper{
        background-color:#efefef;
        position:fixed;
        width:100%;
        bottom:0px;
    }
    .cancel{
        margin-top:5px;
        color:#747474 !important;
    }


    .modal-float-tip{
        position: fixed;
        background-color: rgba(0, 0, 0, .5);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .tab-wrapper{
        background-color:#efefef;
        position:fixed;
        width:100%;
        bottom:0rem;

    }
    .cancel{
        margin-top:0.4rem;
        color:#747474 !important;
    }
    .wrapper {
        /*padding: 2rem 0;*/
        background-color: #fff;
        width: 16rem;
        height: 7.5rem;
        margin: 0 auto;
        margin-top: 6.5rem;
        font-size: 0.6rem;
        border-radius: 2px;
        color:#838383;
    }
    .tips{
        text-align: center;
        height:5rem;
        line-height: 5rem;
        border-bottom: 1px solid #ececec;
        font-size:0.8rem;

    }
    .wrapper span{
        display:block;
        text-align: center;
        line-height: 2.4rem;
        height:2.4rem;
        font-size:0.8rem;

    }
    .left-tips{
        display:inline-block;
        float:left;
        width:50%;
        border-right:1px solid #ececec;
    }
    .right-tips{
        float:right;
        width:49%;
    }
    .p-no-data{
        text-align: center;
        color:#939393;
        font-size:10px;
        padding-top:10px;
    }
    .time-img{
        width:20px !important;
    }
    .tops-b{
        color:#9f9f9f !important;
    }
    .load-more,.loadding,.loadding-all{
        text-align: center;
        font-size:12px;
        color:#9f9f9f;
    }
    .vux-tab {
        overflow: auto;
    }
    .vux-tab .vux-tab-item {
        flex: 0 0 80px;
    }
    .vux-tab-ink-bar{
        display:none !important;
    }
    .vux-tab .vux-tab-item.vux-tab-selected{
        color:#ef5350 !important;
    }
    .vux-tab .vux-tab-item{
        color:#9f9f9f !important;
        font-size:12px !important;
    }
    .search_tab * {
        vertical-align: middle;
    }
    .search_tab_wrapper{
        padding:8px 5px;

    }
    .search_tab {
        text-align: center;
        background-color: #fff;
        display:inline-block;
        margin-left:7px;
        border-radius: 5px;
    }
    .search_tab img {
        width:20px;
        padding-left:3px;
    }
    .search-button{
        font-size:13px; 
        color:#ef5350;
        padding:10px 4px;
    }
    .search_tab input{
        width:220px;
    }
    .search_tab_wrapper input{
        font-size:12px;
    }
    .vux-tab{
      border-bottom:1px solid #ececec;
    }
</style>