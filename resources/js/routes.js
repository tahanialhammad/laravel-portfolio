import Home from './components/Home';
import About from './components/About';

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
