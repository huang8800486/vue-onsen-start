
const state = {
  stack: {},
  options: {}
}

const getters = {
  pageStack: state => state.stack
}

const mutations = {
  reset(state, page) {
    state.stack = Array.isArray(page) ? page : [page || state.stack[0]];
  }
}

const actions = {
  reset: ({commit}, page) => {
    commit('reset', page);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
