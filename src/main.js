import 'babel-polyfill' // 导入填充库,提升兼容性
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick' // 引入 fastclick 解决移动端浏览器 300 毫秒延迟问题

import 'common/stylus/index.styl'

Vue.config.productionTip = false

fastclick.attach(document.body) // 调用 fastclick

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
