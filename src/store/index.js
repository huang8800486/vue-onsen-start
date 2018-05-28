import Vue from 'vue';
import Vuex from 'vuex';
import navigator from './modules/navigator';

Vue.use(Vuex);
debugger;
const store = new Vuex.Store({
  modules: {
    navigator: navigator
  },
  strict: true,
});

export default store;