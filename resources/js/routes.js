import Vue from "vue"; //t
import VueRouter from 'vue-router';
Vue.use(VueRouter);//t


import Home from './views/Home';
import MyProjects from './views/MyProjects';
import Contact from './views/Contact';

let routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/myprojects',
        name: 'myprojects',
        component: MyProjects,
    },
    {
        path: '/about',
        name: "about",
        // component: require('./views/About.vue')
        component: () => import("./views/About.vue") //t
    },
    {
        path: '/contact',
        name: "contact",
        component: Contact
    }
];
export default new VueRouter({
    routes,
    linkActiveClass: 'active'
});
