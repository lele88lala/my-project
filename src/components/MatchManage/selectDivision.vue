<template>
	  <div class="common-header">
        <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">选择赛区</x-header>
    </div>
    <!-- <group>
       <cell title="赛区负责人管理" class="cell-group" v-link="{ path: '/divisionOwner',query: { groupId:groupId,token:token}}" value="" is-link></cell>
    </group> -->
    <!-- <div class="plls operation-pls">
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
    </group> -->
    <div class="plls operation-pls">
        赛区
    </div>
    <group class="select-division-group">
        <template v-for="le in newList">
              <cell v-bind:title="le.name" class="cell-group division-select-cell" v-link="{ path: '/matchManage',query:{divisionId:le.divisionId,token:token,groupId:groupId}}" value="" is-link></cell>
       </template>
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
  },
  ready () {
    var id = this.$route.query
    this.token = id.token
    this.groupId = id.groupId
    Vue.http.get('match_mg/division_list.htm?token=' + id.token + '&groupId=' + id.groupId).then((response) => {
      // console.log(response.data.data.divisionList)
      this.$set('newList', response.data.data.divisionList)
    }, (response) => {
    // error callback
    })
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