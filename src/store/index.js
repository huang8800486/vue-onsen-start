import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import navigator from './modules/navigator';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user: user,
    navigator: navigator
  },
  strict: true,
});

export default store;