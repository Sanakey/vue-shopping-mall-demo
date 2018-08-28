import Vue from 'vue'
import list from './list.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#list',
  render: h => h(list)
})
