// import { update } from "lodash";
import Vue from "vue";
import Vuex from "vuex";
import hypixel from "hypixel-api";

Vue.use(Vuex);
const client = new hypixel('18b8d682-a0a4-4c55-a555-ac4420eee87c')

export default new Vuex.Store({
  state: {
    name: null,
    player: null
  },
  mutations: {
    updateName(state, updated_name){
      state.name = updated_name
    },
    updatePlayer(state, data) {
      state.player = data
    }
  },
  actions: {
    updateName(context, updated_name){
      context.commit("updateName", updated_name)
    },
    fetchPlayer(context, player_name){
      client.getPlayer('name', player_name).then((player) => {
        context.commit('updatePlayer', player)
      }).catch((err) => {
        console.error('Error! ' + err)
      })
    }
  },
  getters: {
    getName: (state) => {
      return state.name
    }
  },
  modules: {}
});
