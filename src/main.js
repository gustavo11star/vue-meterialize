import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Materials from 'vue-materials'

import HelloWorldRoutes from './components/HelloWorldRoutes.vue'
import MainVuex from './components/vuex/MainVuex.vue'

const router = new VueRouter({
  routes: [
    { path: '/HelloWorldRoutes', component: HelloWorldRoutes },
    { path: '/vuex', component: MainVuex }
  ]
})

Vue.use(Materials)
Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
