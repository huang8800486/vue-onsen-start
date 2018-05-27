import Vue from 'vue';
import Vuex from 'vuex';
import navigator from './modules/navigator';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    navigator: navigator
  }
});

export default store;