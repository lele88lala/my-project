
<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">新球队信息</x-header>
  </div>
	<div class="new-team-middle">
            <div class="new-team-phone new-team-phone-top"><img src="../../assets/service_icon_team@2x.png"/>
                <input class="top-input" type="text" placeholder="输入球队名称">
            </div>
            <div class="line1"></div>
            <div class="new-team-people">
                <img src="../../assets/icon_people@3x.png"/>
                <input type="text" placeholder="输入领队名称">
            </div>
            <div class="line1"></div>

            <div class="new-team-phone"><img src="../../assets/icon_phone@3x.png"/>
                <input class="bottom-input" type="text" placeholder="输入领队电话">
            </div>
        </div>	
         <div class="new-team-bottom">
            <div class="new-team-join-button">
                加入球队
            </div>
        </div>
</template>
<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import XButton from 'vux/src/components/x-button'
import XHeader from 'vux/src/components/x-header'

export default {
  components: {
    Group,
    Cell,
    XButton,
    XHeader
  }
}
</script>
<style>
	input {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    border: none;
    font-size: 24px;
    padding: 10px;
}
.new-team-middle {
    background-color: white;
    border-bottom: 1px solid #ececec;
    margin-top:10px;
}
.new-team-phone-top{
	border-top:1px solid #ececec;
}
.new-team-middle img {
    padding: 3px;
    width: 20px;
    margin-left:6px;
}

.new-team-middle input {
    margin-left: 5px;
    padding: 6px 2px;
    font-size: 12px;
    line-height: 1.4rem;
    width:85%;
}
::-webkit-input-placeholder{
     color:#b6b6b6;
}

.new-team-middle img, .new-team-middle input {
    vertical-align: middle;
}

.line1 {
    width: 97%;
    float:right;
    height: 1px;
    margin: 0.2rem 0;
    background-color: #D5D5D5;
    margin-left:20px;
    overflow-x: hidden
}
.top-input{
	margin-top:5px;
}
.bottom-input{
	margin-bottom:5px;
}
.new-team-bottom {
    background-color: #efefef;
    width: 100%;
}

.new-team-join-button {
    margin: 0 auto;
    margin-top: 13px;
    text-align: center;
    background-color: #e73a3f;
    width: 92%;
    border-radius: 2px;
    color: white;
    font-size: 14px;
    padding: 8px 0;
}

</style>