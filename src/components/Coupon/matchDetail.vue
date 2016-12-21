<template>
<div class="blur-background">
	
</div>
<div class="content-blur-wrapper">
	<div class="blur-content blur-content-one">红牛城市传奇篮球争霸赛</div>
	<div class="blur-content blur-content-two">公开组-北京赛区</div>
	<div class="blur-content blur-content-three">
		<span class="xian"></span>
		<span class="xian-words">基本信息</span>
		<span class="xian"></span>
	</div>
	<div class="blur-content-left blur-content-fore">时间：2016/09/20 - 2016/09/24</div>
	<div class="blur-content-left blur-content-five">
		<div class="five-left">主办方:</div>
		<div class="five-right">
			<span>城市传奇篮球俱乐部</span>
			<span>城市传奇篮球俱乐部2</span>
		</div>
	</div>
	<div class="blur-content-left blur-content-five">
		<div class="five-left">承办方:</div>
		<div class="five-right">
			<span>红牛城市传奇篮球俱乐部1</span>
			<span>红牛城市传奇篮球俱乐部2</span>
		</div>
	</div>
	<div class="blur-content blur-content-three">
		<span class="xian"></span>
		<span class="xian-words">基本信息</span>
		<span class="xian"></span>
	</div>
	<div class="blur-content-left blur-content-six">
	红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球牛城市传奇篮球
红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球俱乐部红牛城市传奇篮球牛城市传奇篮球
	</div>
	<!-- <div class=" blur-content-left bottom-close-button"><img src="../../assets/btn_search_close@2x.png"></div> -->
</div>

</template>
<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import XButton from 'vux/src/components/x-button'
import XHeader from 'vux/src/components/x-header'
import Blur from 'vux/src/components/blur'

export default {
  components: {
    Group,
    Cell,
    XButton,
    XHeader,
    Blur
  }
}
</script>
<style>
	.blur-background{
        text-align:center;
		background-image:url(../../assets/event_icon@3x.png);
		background-size:cover;
		background-position:center;
		width:100%;
		height:100%;
		filter: blur(10px);
        -webkit-filter: blur(40px);
        -moz-filter: blur(40px);
        -o-filter: blur(40px);
        -ms-filter: blur(40px);
        filter: blur(40px);
        position: fixed;
        left:0;
        top: 0;
	
	}
	.blur-content{
        text-align: center;
	    color:#fff;
	    -webkit-filter: blur(0px);
	    -moz-filter: blur(0px);
	    -o-filter: blur(0px);
	    -ms-filter: blur(13px);
	    filter: blur(0px);
	}
	.blur-content-left{
        text-align: left;
	    color:#fff;
	    font-size:13px;
	    -webkit-filter: blur(0px);
	    -moz-filter: blur(0px);
	    -o-filter: blur(0px);
	    -ms-filter: blur(13px);
	    filter: blur(0px);
	}
	.blur-content-three .xian{
		display:inline-block;
		width:100px;
		height:1px;
		background-color:#fff;
		vertical-align: middle;

	}
	.blur-content-two{
		font-size:13px;
		padding-top:10px;
	}
    .blur-content-one{
    	font-size:15px;
    	padding-top:50px;
    }
	.xian-words{
		display:inline-block;
		vertical-align: middle;
		padding-left:8px;
		padding-right:8px;
		font-size:13px;
	}
	.blur-content-three{
		padding-top:15px;
	}
	.five-right span{
		display:block;
	}
	.blur-content-five div{
		display:inline-block;
	}
	.five-left{
		vertical-align: top;
	}
	.blur-content-six{
		font-size:13px;
		padding:10px 16px;
		overflow: hidden;
	}
	.blur-content-fore,.blur-content-five{
		padding:5px 30px;
	}
	.bottom-close-button{
				/*background-image:url(../../assets/event_icon@3x.png);
background-size:cover;
filter: blur(10px);
        -webkit-filter: blur(13px);
        -moz-filter: blur(13px);
        -o-filter: blur(13px);
        -ms-filter: blur(13px);
        filter: blur(13px);*/
        background-color:rgb(0,0,0,0.1);
		background-position:center;
		text-align: center;
		position:fixed;
		bottom:0px;
		left:50%;
		width:100%;
		transform: translateX(-50%);
		padding:30px 0;
	}
</style>