import 'babel-polyfill' // 导入填充库,提升兼容性
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick' // 引入 fastclick 解决移动端浏览器 300 毫秒延迟问题
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

// 将 axios 改写为 Vue 的原型属性,这样就可以在其他组件中使用
Vue.prototype.$http = axios

fastclick.attach(document.body) // 调用 fastclick

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
