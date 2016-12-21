<template>
<div class="common-header">
  <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">CRM部</x-header>
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
<cell title="部门人员管理" value="" is-link class="cell-group" v-link="{ path: '/crmPeopleManage'}"></cell>

</group>

<group title="">
    <cell title="管理球队" value="管理球队,核对球员" is-link class="cell-group" v-link="{ path: '/manageTeam' }"></cell>
    <cell title="督促比赛" value="待迎战促成,提醒球队发起约战" is-link class="cell-group" v-link="{ path: '/urgeMatch' }"></cell>

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
</style>