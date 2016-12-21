<template>
	<div class="common-header">
        <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">运营情况</x-header>
    </div>
     <div>
    	 <div class="plls  operation-pls">
            待确认晋级球队
         </div>
    </div>
    <div class="tab-box tab-box-a">
                <ul class="ul-num">
                <span class="bi-lu">比率</span>
                    <li>
                        <div class="num">
                            <div class="s1" style="height:100%"><span>20</span></div>
                            <div class="s2" style="height:66.5%"><span>16</span></div>
                        </div>
                        <b>参与球队</b>
                        <div class="bo-words">60%</div>
                    </li>
                    <li class="left-ju-li">
                        <div class="num">
                            <div class="s1" style="height:98.5%"><span>20</span></div>
                            <div class="s2" style="height:80%"><span>15</span></div>
                        </div>
                        <b>比赛场次</b>
                        <div class="bo-words">60%</div>
                    </li>
                    <li class="left-ju-li">
                        <div class="num">
                            <div class="s1" style="height:100%"><span>20</span></div>
                            <div class="s2" style="height:50%"><span>10</span></div>
                        </div>
                        <b>参与人数</b>
                        <div class="bo-words">60%</div>
                    </li >
                    <li class="left-ju-li">
                        <div class="num">
                            <div class="s1" style="height:50%"><span>10</span></div>
                            <div class="s2" style="height:30%"><span>6</span></div>
                        </div>
                        <b>场馆使用</b>
                        <div class="bo-words">60%</div>
                    </li>
                </ul>
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
.left-ju-li{
	margin-left:2%;
}
	.tab-box{background-color: #fff;}

.ul-num{white-space: nowrap;overflow-x: auto;padding-bottom: 10px;text-align: center;position:relative;}
.ul-num li{display: inline-block;text-align: center;width:50px;margin-top:20px;}
.ul-num li b{font-size: 11px;font-weight: normal;color: #bfbfbf;}
.ul-num li .num{height: 150px;position: relative;}
.ul-num li .num span{color: #fff;font-size: 12px;display: inline-block;position: relative;}
.ul-num li .num .s1,.ul-num li .num .s2{position: absolute;bottom:0;width:50%;min-height: 10%;border-radius: 0.1rem 0.1rem 0 0;}
.ul-num li .num .s1{left:0;background-color: #dadada;}
.ul-num li .num .s2{right:0;background-color: #607cac;}
.ul-num li .num .s1 span{
    top:5px;
    right:1px;
   
}
.bo-words{
	font-size:12px;
	color:#565656;
}
.ul-num li .num .s2 span{
    top:5px;
    right:1px; 
}
.bi-lu{
	position:absolute;
	left:3%;
	top:196px;
	font-size:11px;
	color:#565656;
}
.operation-pls{
    color:#bfbfbf !important;
}

</style>