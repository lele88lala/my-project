<template>
    <div class="common-header">
        <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">选择技统人员</x-header>
    </div>
	<div class="search_tab_wrapper">
	    <div class="search_tab">
	        <img src="../../assets/icon_search@2x.png"><input type="text" placeholder="搜索编号/名称/手机号">
	        
	    </div>
        <span class="search-button">搜索</span>
    </div>
    <div class="bottom-wrapper delegate-bottom-wrapper">
        <div  class="artbottom">
	        <div class="people">
	            <div class="left"><div><span>006</span><span> 张小帅</span></div><div><span>手机号:</span><span>13029398103</span></div></div>
	            <div class="right"><x-button class="btn" mini type="primary" v-link="" @click="confirms">&nbsp;&nbsp;&nbsp;&nbsp;选择&nbsp;&nbsp;&nbsp;&nbsp; </x-button></div>
	        </div>
        </div>
    </div>
    <div class="bottom-wrapper delegate-bottom-wrapper">
        <div  class="artbottom">
	        <div class="people">
	            <div class="left"><div><span>006</span><span> 张小帅</span></div><div><span>手机号:</span><span>13029398103</span></div></div>
	            <div class="right"><x-button class="btn" mini type="primary" v-link="" @click="confirms">&nbsp;&nbsp;&nbsp;&nbsp;选择&nbsp;&nbsp;&nbsp;&nbsp; </x-button></div>
	        </div>
        </div>
    </div>
    <div class="bottom-wrapper delegate-bottom-wrapper">
        <div  class="artbottom">
	        <div class="people">
	            <div class="left"><div><span>006</span><span> 张小帅</span></div><div><span>手机号:</span><span>13029398103</span></div></div>
	            <div class="right"><x-button class="btn" mini type="primary" v-link="" @click="confirms">&nbsp;&nbsp;&nbsp;&nbsp;选择&nbsp;&nbsp;&nbsp;&nbsp; </x-button></div>
	        </div>
        </div>
    </div>
    <div class="modal-float-tip-conf" style="display:none" id="makeconfirm">
	    <div class="modal-float-tip-conf-wrapper">
	        <div class="top-tips">007号技统人员此时段已有任务安排</div>
	        <span  class="bot-tips" @click="makesure">确定</span>
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
