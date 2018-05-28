import router from './router';
import store from './store';

const whitePages = ['/login', '/authredirect'] // no redirect whitelist

router.beforeEach((to, from, next) => {
    debugger
    // Reset pageStack to the new route
    store.dispatch('navigator/reset', to.matched.map(m => m.components.default));

    const isLoggedIn = store.getters['user/isLoggedIn'];
    if (isLoggedIn) {
        next();
    } else {
        if (whitePages.indexOf(to.path) !== -1) { // 在免登錄的頁面直接進入
            next()
        } else {
            next('/login') // 否則全部導向登入頁
        }
    }

    // if (!isLoggedIn)
    //     next();
    // else {

    // }
})