import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Materials from 'vue-materials'

Vue.use(Materials)
Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})
