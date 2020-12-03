// 应用入口 js

import Vue from 'vue'
import App from './App.vue'
//引入路由器    引入router  多了两个属性
import router from  './router'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
