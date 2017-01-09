<template>
	<div class="common-header">
        <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">招募球队</x-header>
    </div>
    <div @click = "hehe">
    <div class="search_tab_wrapper">
	    <div class="search_tab">
	        <img src="../../assets/icon_search@2x.png"><input type="text" placeholder="搜索姓名/手机号">
	        
	    </div>
	    <span class="search-button">搜索</span>
    </div>
    <div class="recruit-button-wrapper"> 
         <div class="recruit-button bt-shows1" @click="showtips" >
         	<img src="../../assets/btn_screen@2x.png"  class="bt-shows2">
            <span class="bt-shows3">筛选</span>
         </div>
        <div class="zhao-mu-button" v-link="{ path: '/newTeamInfo'}"><img src="../../assets/btn_recruit@2x.png"><span>招募</span></div>
    </div>
    <div class="bottom-wrapper delegate-bottom-wrapper recruit-list">
        <div  class="artbottom">
	        <div class="people">
	            <div class="left"><div><span>006</span><span> 张小帅</span></div><div><span>手机号:</span><span>13029398103</span></div></div>
	            <div class="right"><span class="recruit-list-words">未加入球队</span></div>
	        </div>
        </div>
    </div>
    <div class="bottom-wrapper delegate-bottom-wrapper recruit-list">
        <div  class="artbottom">
	        <div class="people">
	            <div class="left"><div><span>006</span><span> 张小帅</span></div><div><span>手机号:</span><span>13029398103</span></div></div>
	            <div class="right"><span class="recruit-list-words">已加入球队</span></div>
	        </div>
        </div>
    </div>
    <div class="bottom-wrapper delegate-bottom-wrapper recruit-list">
        <div  class="artbottom">
	        <div class="people">
	            <div class="left"><div><span>006</span><span> 张小帅</span></div><div><span>手机号:</span><span>13029398103</span></div></div>
	            <div class="right"><span class="recruit-list-words">未注册会员</span></div>
	        </div>
        </div>
    </div>
    <div class="bottom-wrapper delegate-bottom-wrapper recruit-list">
        <div  class="artbottom">
	        <div class="people">
	            <div class="left"><div><span>006</span><span> 张小帅</span></div><div><span>手机号:</span><span>13029398103</span></div></div>
	            <div class="right"><span class="recruit-list-words">未注册会员</span></div>
	        </div>
        </div>
    </div>
    </div>
    <div id="showtips" style="display:none">
	    <div class="eject-content1">
			<span class="on">全部</span>
			<div class="line3"></div>
			<span>已加入球队</span>
			<div class="line3"></div>
			<span>未加入球队</span>
			<div class="line3"></div>
			<span>未注册会员</span>
		</div>
		<div class="tragel1"></div>
	</div>
</template>
<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import xbutton from 'vux/src/components'
import XHeader from 'vux/src/components/x-header'

export default {
  components: {
    Group,
    Cell,
    xbutton,
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
  },
  methods: {
    showtips: function () {
      if (document.getElementById('showtips').style.display === 'none') {
        document.getElementById('showtips').style.display = 'block'
      } else {
        document.getElementById('showtips').style.display = 'none'
      }
    },
    hehe: function (event) {
      if (event.target !== document.getElementById('showtips') && event.target !== document.querySelector('.bt-shows1') && event.target !== document.querySelector('.bt-shows2') && event.target !== document.querySelector('.bt-shows3')) {
        document.getElementById('showtips').style.display = 'none'
      }
    }
  },
  ready () {
  }
}
</script>
<style>
	.zhao-mu-button{
		float:right;
		margin-right:10px;
		background-color:#507daf;
		border-radius: 3px;

	}
	.zhao-mu-button span{
		padding-right:5px;
	}
	.zhao-mu-button * {
		vertical-align: middle;
		font-size:12px;
		color:#fff;
	}
	.recruit-button{
		float:left;
		margin-left:10px;
		margin-bottom:6px;
	}
	.recruit-button *{
		vertical-align: middle;
		font-size:13px;
		color:#507daf;
	}
	.zhao-mu-button img {
		width:28px;
	}
	.recruit-button img {
		width:30px;
	}
	.recruit-button-wrapper{
		padding-top:5px;
		padding-bottom:10px;
	}
	.recruit-list{
		clear:both;
	}
	.recruit-list-words{
		color:#929292;
	}
	.eject-content1{
    	position:absolute;
    	border-radius: 8px;
        width:150px;
        height:170px;
        background-color:rgba(0,0,0,0.5);
        top:130px;
        left:10px;
        z-index: 9;
    }
    .on{
    	color:#fff !important;
    }
    .line3{
	    width: 100%;
	    float: right;
	    height: 1px;
	    margin: 0.2rem 0;
	    background-color: #919191;
	    margin-left: 20px;
	    overflow-x: hidden;
    }
    .tragel1{
    	position:absolute;
    	top:120px;
        left:40px;
	    width: 0;
	    height: 0;
	    border-left: 9px solid transparent;
	    border-right: 9px solid transparent;
	    border-bottom: 10px solid rgba(0,0,0,0.5);
    }
    .eject-content1 span{
    	display:block;
    	text-align: center;
    	color:#999999;
    	font-size:14px;
    	height:37px;
    	line-height:37px;
    }
</style>