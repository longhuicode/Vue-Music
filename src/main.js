import 'babel-polyfill' // 导入填充库,提升兼容性
import Vue from 'vue'
import App from './App'
// import router from './router'
import 'common/stylus/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
