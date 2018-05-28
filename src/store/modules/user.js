const state = {
    skisEmployee: {
        comp: '',
        emno: '',
        role: 0
    }
}

const getters = {
    isLoggedIn: (state) => !!state.skisEmployee.role
}

const mutations = {
}

const actions = {
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}