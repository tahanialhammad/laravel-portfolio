// window._ = require('lodash');

// try {
//     window.Popper = require('popper.js').default;
//     window.$ = window.jQuery = require('jquery');

//     require('bootstrap');
// } catch (e) {}


// window.axios = require('axios');

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

//t
// window._ = require('lodash');

import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

window.Vue = Vue;
Vue.use(VueRouter);

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
