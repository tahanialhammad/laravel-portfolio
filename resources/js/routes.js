import Home from './views/Home';
import About from './views/About';

export default{
    mode: 'history',
    linkActiveClass: 'active',
    routes:[
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/about',
            component: About,
            name: 'about'
        }
    ]
};
