import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';

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
        },
        {
            path: '/projects',
            component: Projects,
            name: 'projects'
        },
        {
            path: '/contact',
            component: Contact,
            name: 'contact'
        }
    ]
};
