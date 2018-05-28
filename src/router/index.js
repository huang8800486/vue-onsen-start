import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import store from '../store';

Vue.use(Router);

const router = new Router({
    routes: routes
});

router.beforeEach((to, from, next) => {
    debugger
    // Reset pageStack to the new route
    //store.commit('navigator/reset', to.matched.map(m => m.components.default));
    store.dispatch('reset', to.matched.map(m => m.components.default));
    next();
})

export default router;