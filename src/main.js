import Vue from 'vue'
import store from './store'
import App from './App'
import VueRouter from 'vue-router'
import Materials from 'vue-materials'

import HelloWorldRoutes from './components/HelloWorldRoutes.vue'
import MainVuex from './components/vuex/MainVuex.vue'
import Categories from './components/Categories'

const router = new VueRouter({
  routes: [
    { path: '*', redirect: '/' },
    { path: '/', name: 'hello', component: HelloWorldRoutes },
    { path: '/vuex', name: 'vuex', component: MainVuex },
    { path: '/categories', name: 'categories', component: Categories }
  ],
  mode: 'history',
  linkActiveClass: 'active-page',
  linkExactActiveClass: 'current-page'
})

Vue.use(Materials)
Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
})
