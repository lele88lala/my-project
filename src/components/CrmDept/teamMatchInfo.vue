<template>
	  <div class="common-header">
        <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">参赛球队</x-header>
    </div>
    <div class="team-match-top">
        <div class="i-n-c">
	    	<img class="team-match-img" src="../../assets/login_btn_upload@2x.png">
	    	<div class="team-match-name">城市传奇队城市传奇队城市传奇队</div>
	    	<img class="team-cloth" src="../../assets/yi.png">
    	</div>
    	<div class="ying-p-wrapper">
    	    <div class="ying-zhan-price">应战费用：￥140</div>
    		<div class="make-match-mi ying-zhan-mi"><img src="../../assets/icon_lock_fill@2x.png"><span class="ying-mi-words">需应战密令</span>
    		</div>
    	</div>
    </div>
    <group>
      <cell class="zhi-cai" title="约占方电话：15093898490" v-link="{ path: '/teamMatchInfo'}"  >
        <img  slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/icon_phone_two@2x.png" class="">
      </cell>
      <cell class="zhi-cai" title="约战方留言：如有特殊情况，提前联系我们"  v-link="{ path: '/teamMatchInfo' }">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/icon_message@2x.png" class="">
      </cell>
      <cell class="zhi-cai" title="2016-07-14  14：00" v-link="{ path: '/teamMatchInfo'}" >
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/icon_time_fill@2x.png" class="">
      </cell>
      <cell class="zhi-cai" title="北京八里庄三中篮球馆"  v-link="{ path: '/teamMatchInfo' }">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/icon_address_fill@2x.png" class="">
      </cell>
    </group>
    <group>
    	<cell class="zhi-cai" title="约占方电话：15093898490">
        <img  slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/icon_people@2x.png" class="">
      </cell>
      <cell class="zhi-cai tao-can" title="裁判1名、记录员1名，赠送神启技术统计服务，品牌饮用水1箱（24瓶）。">
      </cell>
    </group>
    <group>
    	<cell class="zhi-cai" title="应战方需付费用">
        <img  slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/icon_charge@2x.png" class="">
      </cell>
      <cell class="zhi-cai tao-can" title="现场支付场地费：" value="￥40">
      </cell>
      <cell class="zhi-cai tao-can" title="在线支付服务费：" value="￥100">
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
	.team-match-img{
		width:30px;
		vertical-align: middle;
		display:block;
		float:left;
		margin-left:10px;
	}
	.team-match-name{
		display:inline-block;
		vertical-align: middle;
		font-size:13px;
		color:#333333;
	}
	.team-cloth{
		display:block;
		float:right;
		width:20px;
		margin-top:5px;
		margin-right:10px;
		vertical-align: middle;

	}
	.team-match-top{
		background-color:#fff;
		margin-top:7px;
	}
	.ying-zhan-mi{
		display:inline-block;
		float:right;
		margin-right:10px;
		margin-top:-2px;
	}
	.ying-zhan-price{
		display:inline-block;
		font-size:13px;
		margin-left:50px;
	}
	.i-n-c{
		padding-top:10px;
	}
	.team-match-name{
		padding-left:10px;
	}
	.ying-mi-words{
		color:#666666;
	}
	.ying-p-wrapper{
		margin-top:10px;
		padding-bottom:10px;
	}
	.tao-can{
		padding-left:40px !important;
	}
</style>