import Login from '../pages/Login';
import Linehook from '../components/Linehook';
import Dashboard from '../pages/Dashboard';
import SubscribeNotify from '../pages/SubscribeNotify';

//const extend = (name, component) => ({name, extends: component});
const extend = (name, component) => {
    debugger
    return {name, extends: component};
};

const routes = [{
        path: '',
        name: 'dashboard',
        component: {
            extends: Dashboard
        },
        children: [{
            path: 'subscribeNotify',
            name: 'subscribeNotify',
            component: {
                extends: SubscribeNotify
            }
        }]
    },
    { path: '/login', name: 'login', component: { extends: Login }},
    { path: '/linehook', name: 'linehook', component: extend('linehook', Linehook) }
];

export default routes;