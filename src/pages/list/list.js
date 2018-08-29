import Vue from 'vue'
import list from './list.vue'
import 'assets/reset.css'
import 'assets/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#list',
  render: h => h(list)
})
