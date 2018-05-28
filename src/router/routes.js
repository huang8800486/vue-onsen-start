import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import SubscribeNotify from '../pages/subscribeNotify';

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
    {
        path: '/login',
        name: 'login',
        component: {
            extends: Login
        },
    }
];

export default routes;