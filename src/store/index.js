import Vue from 'vue'
import Vuex from 'vuex'
import file from './modules/file'
import log from './modules/log'
import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    file,
    log
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters

})

export default store;
