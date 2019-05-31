import * as types from './mutation-types'

const mutations = {
  [types.SET_HEADER](state, header) {
    state.header = header
  }
}

export default mutations
