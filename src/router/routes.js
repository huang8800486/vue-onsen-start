import Dashboard from '../pages/dashboard';
import SubscribeNotify from '../pages/subscribeNotify';

const routes = [
    {
        path: '',
        name: 'dashboard',
        component: {
            extends: Dashboard
        },
        children: [
            {
                path: 'subscribeNotify',
                name: 'subscribeNotify',
                component: {
                    extends: SubscribeNotify
                }
            }        
        ]
    }
];

export default routes;