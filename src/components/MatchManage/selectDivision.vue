<template>
	  <div class="common-header">
        <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">选择赛区</x-header>
    </div>
    <group>
       <cell title="赛区负责人管理" class="cell-group" v-link="{ path: '/divisionOwner'}" value="" is-link></cell>
    </group>
    <div class="plls operation-pls">
        已选择赛区
    </div>
    <group class="select-division-group">
       <cell title="深圳" class="cell-group division-select-cell" v-link="{ path: '/matchManage'}" value="" is-link></cell>
    </group>
    <div class="plls operation-pls">
        城市赛
    </div>
    <group class="select-division-group">
       <cell title="北京" class="cell-group division-select-cell" v-link="{ path: '/matchManage'}" value="" is-link></cell>
       <cell title="上海" class="cell-group division-select-cell" v-link="{ path: '/matchManage'}" value="" is-link></cell>
       <cell title="武汉" class="cell-group division-select-cell" v-link="{ path: '/matchManage'}" value="" is-link></cell>
    </group>
    <div class="plls operation-pls">
        城市冠军赛
    </div>
    <group class="select-division-group">
       <cell title="沈阳区" class="cell-group division-select-cell" v-link="{ path: '/matchManage'}" value="" is-link></cell>
       <cell title="上海区" class="cell-group division-select-cell" v-link="{ path: '/matchManage'}" value="" is-link></cell>
       <cell title="武汉区" class="cell-group division-select-cell" v-link="{ path: '/matchManage'}" value="" is-link></cell>
    </group>
    <div class="plls operation-pls">
        全国赛
    </div>
    <group class="select-division-group">
       <cell title="全国" class="cell-group division-select-cell" v-link="{ path: '/matchManage'}" value="" is-link></cell>
    </group>
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
  ready () {
    var id = this.$route.query
    console.log(id)
    console.log(this.$route.name)
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
</style>