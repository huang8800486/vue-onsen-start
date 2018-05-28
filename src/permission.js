import router from './router';
import store from './store';

router.beforeEach((to, from, next) => {
    debugger
    // Reset pageStack to the new route
    //store.commit('navigator/reset', to.matched.map(m => m.components.default));
    store.dispatch('navigator/reset', to.matched.map(m => m.components.default));
    next();
})