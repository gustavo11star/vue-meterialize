import Vue from 'vue'
import Vuex from 'vuex'
import CcVuex from '.././vuex'
import CcCategories from '.././components/Categories/store'

Vue.use(Vuex)

const modules = {
  CcVuex, CcCategories
}

export default new Vuex.Store({
  modules
})
