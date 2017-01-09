<template>
	  <div class="common-header">
        <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">参赛球队</x-header>
    </div>
    <div class="search_tab_wrapper">
        <div class="search_tab">
            <img src="../../assets/icon_search@2x.png"><input type="text" placeholder="搜索球队名称">
            
        </div>
        <span class="search-button ">搜索</span>
    </div>
    <div class="match-team-count">参赛球队：6支</div>
    <group>
      <cell class="zhi-cai" title="城市传奇" v-link="{ path: '/teamMatchInfo'}" is-link >
        <img  slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/login_btn_upload@2x.png" class="match-team-image">
        <img class="remind-dot" src="../../assets/remind@2x.png">
      </cell>
      <cell class="zhi-cai" title="城市传奇" is-link v-link="{ path: '/teamMatchInfo' }">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/login_btn_upload@2x.png" class="match-team-image">
        <img class="remind-dot" src="../../assets/remind@2x.png">
      </cell>
      <cell class="zhi-cai" title="小飞侠" v-link="{ path: '/teamMatchInfo'}" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/login_btn_upload@2x.png" class="match-team-image">
        <img class="remind-dot" src="../../assets/remind@2x.png">
      </cell>
      <cell class="zhi-cai" title="乐乐对" is-link v-link="{ path: '/teamMatchInfo' }">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/login_btn_upload@2x.png" class="match-team-image">
        <img class="remind-dot" src="../../assets/remind@2x.png">
      </cell>
      <cell class="zhi-cai" title="哈哈队" v-link="{ path: '/teamMatchInfo'}" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/login_btn_upload@2x.png" class="match-team-image">
      </cell>
      <cell class="zhi-cai" title="大狗熊" is-link v-link="{ path: '/teamMatchInfo' }">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/login_btn_upload@2x.png" class="match-team-image">
      </cell>
    </group>
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
      newList: [],
      token: '',
      groupId: '',
      m: '待委派比赛'
    }
  }
}
</script>
<style>
	   .select-division-group .weui_cells{
        margin-top:0px !important;
     }
     .division-select-cell .weui_cell_ft{
        display:none !important;
     }
     .zhi-cai .weui_cell_bd {
         font-size:13px !important;
     }
     .match-team-count{
         color:#929292;
         font-size:13px;
         padding-top:5px;
         padding-left:13px;
     }
     .zhi-cai{
      position:relative;
     }
     .remind-dot{
      position:absolute;
      width:15px;
      left:40px;
      top:6px;
     }
     .match-team-image{
      width:30px;
      padding-right:5px;
     }
</style>