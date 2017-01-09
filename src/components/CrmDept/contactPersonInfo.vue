
<template>
    <div class="common-header">
        <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">联系人信息</x-header>
    </div>
	<div class="new-team-middle">
            <div class="new-team-phone new-team-phone-top"><img src="../../assets/icon_name@2x.png"/>
                <input class="top-input" type="text" placeholder="输入姓名">
            </div>
            <div class="line1"></div>
            <div class="new-team-people con-p-inps">
                <img src="../../assets/icon_phone_two@2x.png"/>
                <input class="contact-p-input" type="text" placeholder="输入手机号">
                <span class="shu-xian"></span>
                <span class="yan-zheng">验证手机号</span>
                <span class="yan-zheng-time">60s</span>
            </div>
        </div>	
        <div class="new-team-middle">
        <div class="new-team-phone yan-zheng-codes"><img src="../../assets/icon_security_code@2x.png"/>
                <input class="bottom-input" type="text" placeholder="输入验证码">
            </div>
            </div>
         <div class="new-team-bottom">
            <div class="new-team-join-button">
                提交
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
    padding: 10px 2px;
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
.contact-p-input{
    width:170px !important;
}
.shu-xian{
    display:inline-block;
    height:30px;
    width:2px; 
    background-color:#ececec;
    vertical-align: middle
}
.yan-zheng{
    font-size:12px;
    color:#507daf;
    padding-left:15px;
}
.new-team-people{
    position:relative;
}
.yan-zheng-time{
    position:absolute;
    right:38px;
    top:28px;
    font-size:12px;
    color:#bdbdbd;
}
.con-p-line{
    width:100% !important;
}
.yan-zheng-codes{
    margin-top:10px;
}
.con-p-inps{
    border-bottom: 1px solid #ececec;
    padding-bottom:6px;
}
</style>