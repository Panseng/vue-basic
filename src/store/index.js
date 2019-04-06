import Vue from 'vue'
import Vuex from 'vuex'
import { basicRoutes } from '@/router'

Vue.use(Vuex)

const state = {
  routes: basicRoutes,
  isCollapse: false
}

const getters = {
  routes: state => state.routes,
  isCollapse: state => state.isCollapse
}

const mutations = {
  troggleSidebar: state => {
    state.isCollapse = !state.isCollapse
  }
}

const actions = {
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
