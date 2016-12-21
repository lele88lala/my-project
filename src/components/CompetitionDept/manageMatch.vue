<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">管理比赛</x-header>
  </div>
<div class="p-no-data" style="display:none">
    暂无可处理的比赛
</div>
<div>
<div class="top-time">
2016-07-09 星期六
</div>
<div class="model">
    <div class="left">
        <div class="tops">
            <img src="../../assets/login_btn_upload@2x.png">
            <span>城市队</span>
        </div>
        <div class="tops">
            <img src="../../assets/login_btn_upload@2x.png">
            <span>传奇队</span>
        </div>
    </div>
    <div class="mid">
         <span class="time">12:00 - 13:00</span>
         <span class="match-space">城市队主场馆</span>
    </div>
    <div class="right">
         <span><x-button class="btn" mini type="primary" @click="onclicks">处理比赛</x-button><x-button class="btn-dis" mini disabled style="display:none">主队弃权</x-button><x-button class="btn-dis" mini disabled style="display:none">客队爽约</x-button><x-button class="btn-dis" mini disabled style="display:none">比赛取消</x-button></span>
    </div>
    <span class="line"></span>
</div>
<div class="model">
    <div class="left">
        <div class="tops">
            <img src="../../assets/login_btn_upload@2x.png">
            <span>城市队</span>
        </div>
        <div class="tops">
            <img src="../../assets/login_btn_upload@2x.png">
            <span>传奇队</span>
        </div>
    </div>
    <div class="mid">
         <span class="time">12:00 - 13:00</span>
         <span class="match-space">城市队主场馆</span>
    </div>
    <div class="right">
         <span><x-button class="btn" mini type="primary" @click="onclicks">处理比赛</x-button><x-button class="btn-dis" mini disabled style="display:none">主队弃权</x-button><x-button class="btn-dis" mini disabled style="display:none">客队爽约</x-button><x-button class="btn-dis" mini disabled style="display:none">比赛取消</x-button></span>
    </div>
    <span class="line"></span>
</div>
<div class="model">
    <div class="left">
        <div class="tops">
            <img src="../../assets/login_btn_upload@2x.png">
            <span>城市队</span>
        </div>
        <div class="tops">
            <img src="../../assets/login_btn_upload@2x.png">
            <span>传奇队</span>
        </div>
    </div>
    <div class="mid">
         <span class="time">12:00 - 13:00</span>
         <span class="match-space">城市队主场馆</span>
    </div>
    <div class="right">
         <span><x-button class="btn" mini type="primary" style="display:none">处理比赛</x-button><x-button class="btn-dis" mini disabled >主队弃权</x-button><x-button class="btn-dis" mini disabled style="display:none">客队爽约</x-button><x-button class="btn-dis" mini disabled style="display:none">比赛取消</x-button></span>
    </div>
    <span class="line"></span>
</div>
<div class="model">
    <div class="left">
        <div class="tops">
            <img src="../../assets/login_btn_upload@2x.png">
            <span>城市队</span>
        </div>
        <div class="tops">
            <img src="../../assets/login_btn_upload@2x.png">
            <span>传奇队</span>
        </div>
    </div>
    <div class="mid">
         <span class="time">12:00 - 13:00</span>
         <span class="match-space">城市队主场馆</span>
    </div>
    <div class="right">
         <span><x-button class="btn" mini type="primary" style="display:none">处理比赛</x-button><x-button class="btn-dis" mini disabled style="display:none">主队弃权</x-button><x-button class="btn-dis" mini disabled>客队爽约</x-button><x-button class="btn-dis" mini disabled style="display:none">比赛取消</x-button></span>
    </div>
    <span class="line"></span>
</div>
<div class="model">
    <div class="left">
        <div class="tops">
            <img src="../../assets/login_btn_upload@2x.png">
            <span>城市队</span>
        </div>
        <div class="tops">
            <img src="../../assets/login_btn_upload@2x.png">
            <span>传奇队</span>
        </div>
    </div>
    <div class="mid">
         <span class="time">12:00 - 13:00</span>
         <span class="match-space">城市队主场馆</span>
    </div>
    <div class="right">
         <span><x-button class="btn" mini type="primary" style="display:none">处理比赛</x-button><x-button class="btn-dis" mini disabled style="display:none">主队弃权</x-button><x-button class="btn-dis" mini disabled style="display:none">客队爽约</x-button><x-button class="btn-dis" mini disabled>比赛取消</x-button></span>
    </div>
<!--     <span class="line"></span>
 -->
 </div>
 <div id="dealtips" class="modal-float" style="display:none">
    <div class="tab-wrapper">
     <div class="tab" @click="gomakesure">
        主队弃权
     </div>
        <div class="tab" @click="gomakesure">
            客队弃权
        </div>
        <div class="tab" @click="gomakesure">
            比赛取消
        </div>
        <div class="tab" @click="gomakesure">
            主队爽约
        </div>
        <div class="tab" @click="gomakesure">
            客队爽约
        </div>
        <div id="cancels" class="tab cancel" @click="cancels">
            取消
        </div>
    </div>
</div>
<div id="pop" class="modal-float-tip" style="display:none">
    <div class="wrapper" >
        <div class="tips">确定主队爽约比赛吗?</div>
        <span  class="left-tips" @click="makesuredel">取消</span><span class="right-tips" @click="makesureyes">确定</span>
    </div>
</div>
<div class="modal-float-tip" style="display:none">
    <div class="wrapper">
        <div class="tips">确定客队爽约比赛吗?</div>
        <span  class="left-tips" >取消</span><span class="right-tips" >确定</span>
    </div>
</div>
<div class="modal-float-tip" style="display:none">
    <div class="wrapper">
        <div class="tips">确定客队爽约比赛吗?</div>
        <span  class="left-tips" >取消</span><span class="right-tips" >确定</span>
    </div>
</div>
<div class="modal-float-tip" style="display:none">
    <div class="wrapper">
        <div class="tips">确定主队弃权比赛吗?</div>
        <span  class="left-tips" >取消</span><span class="right-tips" >确定</span>
    </div>
</div>
<div class="modal-float-tip" style="display:none">
    <div class="wrapper">
        <div class="tips">确定客队弃权比赛吗?</div>
        <span  class="left-tips" >取消</span><span class="right-tips" >确定</span>
    </div>
</div>
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
    .top-time{
        text-align: center;
        padding:10px 0px;
        background-color: #efefef;
        font-size:12px;
        color:#333333;
    }
    .model{
        background-color:#fff;
    }
     .model .mid{
        text-align: center;
        height:80px;
        font-size:13px;

    }
     .model  .left{
        float:left;
        width:33%;
        color:#707070;
        font-size:13px;

    }
    .model  .right,.model .right-deal{
        float:right;
        width:34%;
    }
    .model .mid{
         display:inline-block;
        width:33%;
        color:#c2c2c2;
        font-size:13px;
    }
     .model .left .tops img{
        width:15px;
        vertical-align: middle;
        padding:10px 0 10px 10px;

    }
    .model .mid span{
        display:block;
        padding:8px 0 8px 0;
    }
    .time{
        font-size:13px !important;
    }
    .model .right{
        margin-left:0px;
        float:right;
    }
    .model .right .weui_btn.weui_btn_mini{
        margin-right:10%;
        margin-top:25px;
        float:right;
    }
    .btn{
        background-color:#cc7372 !important;
    }
    .btn-dis{
        background-color:#fff !important;
    }
     .model .line{
        width:98%;
        background-color: #ececec;
        height:1px;
        display:inline-block;
        float:right;
    }
    .weui_btn:after{
        border:1px solid #fff !important;
    }
    .modal-float{
        position: fixed;
        background-color: rgba(0, 0, 0, .5);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .modal-float .tab{
        text-align: center;
        background-color: #fff;
        border-bottom: 1px solid #ececec;
        padding:12px 0px;
        font-size: 14px;
        color:#c2c2c2;
    }
    .tab-wrapper{
        background-color:#efefef;
        position:fixed;
        width:100%;
        bottom:0px;
    }
    .cancel{
        margin-top:5px;
        color:#747474 !important;
    }


    .modal-float-tip{
        position: fixed;
        background-color: rgba(0, 0, 0, .5);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .tab-wrapper{
        background-color:#efefef;
        position:fixed;
        width:100%;
        bottom:0rem;

    }
    .cancel{
        margin-top:0.4rem;
        color:#747474 !important;
    }
    .wrapper {
        /*padding: 2rem 0;*/
        background-color: #fff;
        width: 16rem;
        height: 7.5rem;
        margin: 0 auto;
        margin-top: 6.5rem;
        font-size: 0.6rem;
        border-radius: 2px;
        color:#838383;
    }
    .tips{
        text-align: center;
        height:5rem;
        line-height: 5rem;
        border-bottom: 1px solid #ececec;
        font-size:0.8rem;

    }
    .wrapper span{
        display:block;
        text-align: center;
        line-height: 2.4rem;
        height:2.4rem;
        font-size:0.8rem;

    }
    .left-tips{
        display:inline-block;
        float:left;
        width:50%;
        border-right:1px solid #ececec;
    }
    .right-tips{
        float:right;
        width:49%;
    }
    .p-no-data{
        text-align: center;
        color:#939393;
        font-size:10px;
        padding-top:10px;
    }
</style>