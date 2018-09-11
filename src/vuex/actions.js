import { CHANGE_MSG, INCREMENT_COUNTER } from './mutation_types'

/*
export const changeMessage = (store, msg) => {
  store.commit(CHANGE_MSG,msg)
}
export const incrementCounter = (store) => {
  store.commit(INCREMENT_COUNTER)
}
*/
//비구조화 할당
export default {
  changeMessage ({commit},msg) {
    commit(CHANGE_MSG,msg)
  },
  incrementCounter ({commit}) {
    commit(INCREMENT_COUNTER)
  }

}
