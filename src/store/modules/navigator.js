
const state = {
  stack: [],
  options: {}
}

const getters = {
  pageStack: state => state.stack
}

const mutations = {
  reset(state, page) {
    debugger;
    state.stack = Array.isArray(page) ? page : [page || state.stack[0]];
  }
}

const actions = {
  reset: ({commit}, page) => {
    debugger;
    commit('reset', page);
  }
}

export default {
  // strict: true,
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
