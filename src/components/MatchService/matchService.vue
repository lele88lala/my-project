<template>
	  <div class="common-header">
        <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">赛场服务</x-header>
    </div>
    <group>
      <cell class="zhi-cai" title="执裁任务" v-link="{ path: '/refereeTask'}" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/login_btn_upload@2x.png">
      </cell>
      <cell class="zhi-cai" title="技统任务" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/login_btn_upload@2x.png">
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
	   .select-division-group .weui_cells{
        margin-top:0px !important;
     }
     .division-select-cell .weui_cell_ft{
        display:none !important;
     }
     .zhi-cai .weui_cell_bd {
      font-size:13px !important;
     }

</style>