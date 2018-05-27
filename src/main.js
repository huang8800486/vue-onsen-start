// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue';
import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'
import store from './store';
import App from './App';

Vue.use(VueOnsen);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
})
.$mount('#app');