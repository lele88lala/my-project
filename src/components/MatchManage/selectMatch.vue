<template>
	<div class="common-header">
        <x-header style="background-color:#fff;color:#000" :left-options="{showBack: true}" :left-options="{backText: false}">选择赛事</x-header>
    </div>
    <group>
    	  <cell title="红牛城市传奇篮球争霸赛(公开组)" class="cell-group" v-link="{ path: '/selectDivision'}" value="" is-link></cell>
    	  <cell title="红牛城市传奇篮球争霸赛(精英组)" class="cell-group" v-link="{ path: '/selectDivision'}" value="" is-link></cell>

    </group>
    <!-- <group >
    <template v-for="le in newList">
        <cell v-bind:title="le" class="cell-group" v-link="{ path: '/selectDivision',query: { deviceId: hehe}}" value="" is-link></cell>
            </template>
    </group> -->
</template>
<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import XButton from 'vux/src/components/x-button'
import XHeader from 'vux/src/components/x-header'
var Vue = require('vue')
var VueResource = require('vue-resource')

Vue.use(VueResource)

  // GET /someUrl
Vue.http.get('http://192.168.1.7:8888/galaxy-app-lazyPig/sellGoods/test.htm').then((response) => {
    // success callback
  // console.log(response.status)
  // console.log(response.data.data.lele)
}, (response) => {
    // error callback
})
export default {
  components: {
    Group,
    Cell,
    XButton,
    XHeader
  },
  // el: '#de',
  data () {
    return {
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      newList: [],
      hehe: 1
    }
  },
  created () {
    Vue.http.get('http://192.168.1.7:8888/galaxy-app-lazyPig/sellGoods/test.htm').then((response) => {
      console.log(response.data.data)
      this.$set('newList', response.data.data)
      console.log(this.newList)
    }, (response) => {
    // error callback
    })
  }
}
</script>
<style>
	
</style>