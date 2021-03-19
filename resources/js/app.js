// require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Pinned from './components/Pinned';

Vue.use(VueRouter);

// window.Vue = require('vue').default;


// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const app = new Vue({
    el: '#app',
    components:{Pinned},
    router: new VueRouter(routes)
});
