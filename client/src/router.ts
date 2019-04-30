import Vue from 'vue';
import Router from 'vue-router';

import About from './views/About.vue';
import Home from './views/Home.vue';


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            // Could use dynamic imports to make import lazy
            component: About,
        },
    ],
});
