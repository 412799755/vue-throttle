import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import Throttle from './../packages/index'
// 注册组件库
Vue.use(Throttle.throttle)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
