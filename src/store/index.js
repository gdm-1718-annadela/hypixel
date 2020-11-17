// import { update } from "lodash";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'fANNAtastisch'
  },
  mutations: {
    updateName(state, updated_name){
      state.name = updated_name
    }
  },
  actions: {
    updateName(context, updated_name){
      context.commit("updateName", updated_name)
    }
  },
  getters: {
    getName: (state) => {
      return state.name
    }
  },
  modules: {}
});
