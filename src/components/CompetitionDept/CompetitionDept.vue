<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">竞赛部</x-header>
  </div>
  <div class="top">
    <div class="head-img"><img class="img-head" src="../../assets/login_btn_upload@2x.png"></div>
    <div class="right-words">
        <span>红牛城市传奇争霸赛-公开组</span>
        <span>2016/09/20-2016/09/24</span>
        <span>北京赛区</span>
    </div>
</div>
<group>
<cell title="部门人员管理" value="" is-link class="cell-group" v-link="{ path: '/home'}"></cell>

</group>

<group title="">
    <cell title="管理比赛" value="" is-link class="cell-group" v-link="{ path: '/manageMatch' }"></cell>
    <cell title="管理技统" :value=m+n+'场' is-link class="cell-group" v-link="{ path: '/manageArtisan' }"></cell>
    <cell title="确认比分" value="待确认比赛4场" is-link class="cell-group" v-link="{ path: '/confirmScore'}"></cell>
    <cell title="管理晋级" value="待确认球队4支" is-link class="cell-group" v-link="{ path: '/prePromotinManage'}"></cell>

  </group>
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
  }
}
</script>

<style>
.cell-group{
         background-color:#fff;
         color:#333333;
         font-size:13px;
}
.right-words span {
        display: block;
    }

    .head-img, .right-words {
        display: inline-block;
    }
 .top {
        width: 100%;
        height: 4.5rem;
        padding-top: 0.5rem;
        background-color: #fff;
    }

    .img-head {
        width: 3.5rem;
        height: 3.5rem;
        vertical-align: middle;
        margin-left: 0.5rem;
    }

    .right-words {
        font-size: 13px;
        vertical-align: middle;
        margin-left: 0.5rem;
        color: #707070;
    }
    .weui_cell_ft{
      color:#BDBDBD !important;
      font-size:0.7rem;
    }
    .weui_cells{
      margin-top:10px !important;
    }
</style>