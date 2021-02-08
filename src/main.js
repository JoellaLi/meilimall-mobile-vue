import Vue from 'vue'
import App from './App.vue'
import { setupVant } from './vant'

Vue.config.productionTip = false

// 安装UI组件库Vant
setupVant(Vue)

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
