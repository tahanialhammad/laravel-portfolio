// //t
import Vue from "vue"; //tt
import VueRouter from 'vue-router';
Vue.use(VueRouter);//t


import Home from './views/Home';
// import About from './views/About';
import MyProjects from './views/MyProjects';
// import Contact from './views/Contact';

// export default{
//     mode: 'history',
//     linkActiveClass: 'active',
//     routes:[
//         {
//             path: '/',
//             component: Home,
//             name: 'home'
//         },
//         {
//             path: '/about',
//             component: About,
//             name: 'about'
//         },
//         {
//             path: '/projects',
//             component: Projects,
//             name: 'projects'
//         },
//         {
//             path: '/contact',
//             component: Contact,
//             name: 'contact'
//         }
//     ]
// };
//t

let routes = [
    {
        path: '/',
        name: "Home", //t
        component: Home //t
    },
    {
        path: '/about',
        name: "about",
        // component: require('./views/About.vue')
        component: () => import("./views/About.vue") //t
    },
    {
        path: '/myprojects',
        component: MyProjects,
        name: 'myprojects'
    },
    {
        path: '/contact',
        name: "contact",
        component: () => import("./views/Contact.vue") //t

    }
];
export default new VueRouter({
    routes,
    linkActiveClass: 'active'
});
