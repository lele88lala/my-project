<template>
    <div class="common-header">
        <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">搜索晋级球队</x-header>
    </div>
	<div class="search_tab_wrapper">
	    <div class="search_tab">
	        <img src="../../assets/icon_search@2x.png"><input type="text" placeholder="搜索球队名称">
	        
	    </div>
        <span class="search-button">搜索</span>
    </div>
    <div class="model-fore-dif-t">
        <div class="fore-left-one-dif-t">
            <img src="../../assets/login_btn_upload@2x.png">
        </div>
        <div class="fore-left-t">
            城市传奇队
        </div>
        <div class="fore-right-dif-t pre-fore-right-dif-t">
            <span><x-button class="btn" mini type="primary" @click="deamMatch(le.gTeamId,le.hTeamId,le.eventId)">&nbsp;&nbsp;&nbsp;&nbsp;选择&nbsp;&nbsp;&nbsp;&nbsp;</x-button></span>
        </div>
    </div>
    <div class="model-fore-dif-t">
        <div class="fore-left-one-dif-t">
            <img src="../../assets/login_btn_upload@2x.png">
        </div>
        <div class="fore-left-t">
            城市传奇队
        </div>
        <div class="fore-right-dif-t pre-fore-right-dif-t">
            <span><x-button class="btn" mini type="primary" @click="deamMatch(le.gTeamId,le.hTeamId,le.eventId)">&nbsp;&nbsp;&nbsp;&nbsp;选择&nbsp;&nbsp;&nbsp;&nbsp;</x-button></span>
        </div>
    </div>
    <div class="model-fore-dif-t">
        <div class="fore-left-one-dif-t">
            <img src="../../assets/login_btn_upload@2x.png">
        </div>
        <div class="fore-left-t">
            城市传奇队
        </div>
        <div class="fore-right-dif-t pre-fore-right-dif-t">
            <span><x-button class="btn" mini type="primary" @click="deamMatch(le.gTeamId,le.hTeamId,le.eventId)">&nbsp;&nbsp;&nbsp;&nbsp;选择&nbsp;&nbsp;&nbsp;&nbsp;</x-button></span>
        </div>
    </div>
</template>
<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import XButton from 'vux/src/components/x-button'
import XHeader from 'vux/src/components/x-header'
import {Tab, TabItem} from 'vux/src/components/tab'

export default {
  components: {
    Group,
    Cell,
    XButton,
    XHeader,
    Tab,
    TabItem
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
