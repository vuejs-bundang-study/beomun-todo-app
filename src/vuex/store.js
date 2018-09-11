// npm install vuex --save
//store.js
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { CHANGE_MSG, INCREMENT_COUNTER } from './mutation_types'
import actions from './actions'

Vue.use(Vuex)

//state : msg 를 저장하고있다.
//mutations : msg 를 변경할 수 있는 메소드 제공
const state = {
  msg: 'Hello Vue!',
  count: 0
}

const mutations = {
  [CHANGE_MSG] (state,msg) {
    state.msg = msg;
  },
  [INCREMENT_COUNTER] (state) {
    state.count ++;
  }
}

//init vuex
export default new Vuex.Store({
  state, mutations, getters, actions
});
