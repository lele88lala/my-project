
<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">加入团队</x-header>
  </div>
  <div class="artisan-join-team">
      <img src="../../assets/login_btn_upload@2x.png">
      <span class="artisan-yao">邀请你加入</span>
      <span class="artisan-ji">技统裁判人员团队</span>
  </div>
	<div class="artisan-new-team-middle">
            <div class="artisan-new-team-phone artisan-new-team-phone-top"><!-- <img src="../../assets/icon_phone@3x.png"/> -->
                <input class="artisan-top-input" type="text" placeholder="输入手机号">
            </div>
            <div class="line1"></div>
            <div class="artisan-new-team-people">
                <!-- <img src="../../assets/icon_people@3x.png"/> -->
                <input type="text" placeholder="输入真实姓名">
            </div>
            <div class="line1"></div>

            <div class="artisan-new-team-phone"><!-- <img style="display:none" src="../../assets/icon_phone@3x.png"/> -->
                <input class="artisan-bottom-input three-input" type="text" placeholder="输入验证码">
                <div class="yan-zheng-code"><img src="../../assets/login_btn_upload@2x.png"></div>
                <div class="su-xian"></div>
            </div>
        </div>	
         <div class="artisan-new-team-bottom">
            <div class="artisan-new-team-join-button">
                加入团队
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
    height:10px;
}
.artisan-new-team-middle {
    background-color: white;
    border-bottom: 1px solid #ececec;
}
.artisan-new-team-phone-top{
	border-top:1px solid #ececec;
}
/*.artisan-new-team-middle img {
    padding: 3px;
    width: 20px;
    margin-left:6px;
}*/

.artisan-new-team-middle input {
    margin-left: 3%;
    padding: 6px 2px;
    font-size: 12px;
    line-height: 1.4rem;
    width:85%;
}
::-webkit-input-placeholder{
     color:#b6b6b6;
}

.artisan-new-team-middle img, .new-team-middle input {
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
.artisan-top-input{
	margin-top:5px;
}
.artisan-bottom-input{
	margin-bottom:5px;
}
.artisan-new-team-bottom {
    background-color: #efefef;
    width: 100%;
}

.artisan-new-team-join-button {
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
  .artisan-join-team * {
    text-align: center
  }
  .artisan-join-team span,.artisan-join-team img{
    display:block;
  }
  .artisan-join-team img{
    margin:0 auto;
    padding-top:10px;
    width:50px;
  }
  .artisan-join-team{
    background-color:#fff;
  }
  .artisan-yao{
    font-size:12px;
    color:#b8b8b8;
    padding-top:10px;
  }
  .artisan-ji{
    font-size:14px;
    color:#3d3d3d;
    padding-top:7px;
    padding-bottom:10px;
  }
  .three-input{
    width:30% !important;
  }
  .su-xian{
    width:1px;
    height:35px;
    float:right;
    margin-right:5%;
    background-color:#ececec;
    vertical-align: middle
  }
  .yan-zheng-code{
    float:right;
    margin-right:5%;
    margin-top:5px;
  }
  .yan-zheng-code img{
    width:60px;
    height:20px;
  }
</style>