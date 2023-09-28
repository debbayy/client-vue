import Vue from 'vue'
import Vuex from 'vuex'
import createPersitedState from "vuex-persistedstate"

import user from './user'
import home from './home'
import pokemon from './pokemon'

Vue.use(Vuex)

const persitedDataState = createPersitedState({
  paths: ["user"],
});

export default new Vuex.Store({
  plugins: [persitedDataState],
  modules: {
    pokemon: {
      namespaced: true,
      ...pokemon
    },
    user: {
      namespaced: true,
      ...user
    },
    home: {
      namespaced: true,
      ...home
    }
  }
})
