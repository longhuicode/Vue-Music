import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// 如果当前环境是开发环境,则开启Vuex相关的debug模式
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug, // 开启严格模式,对state的更改进行严格检测
  plugins: debug ? [createLogger()] : [] // 每次打印修改state的日志记录
})
