import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
// 引入vant
import Vant from 'vant'
// 引入vant的css
import 'vant/lib/index.css'
// 全局挂载
Vue.use(Vant)
// 阻止启动生产消息
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
