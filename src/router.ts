import Vue from 'vue';
import Router from 'vue-router';
import Learn from './views/Learn.vue';
import CoursePage from './views/CoursePage.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/learn'
        },
        {
            path: '/learn',
            name: 'Learn',
            component: Learn
        },
        {
            path: '/create',
            name: 'Create',
            component: (): Promise<any> => import('./views/Create.vue') //TODO: Make this type more specific //Lazy load component
        },
        {
            path: '/course/:id',
            name: 'Course',
            component: (): Promise<any> => import('./views/Course.vue') //TODO: Make this type more specific //Lazy load component
        },
        {
            path: '/course/:id/edit',
            name: 'Edit Course',
            component: (): Promise<any> => import('./views/EditCourse.vue') //TODO: Make this type more specific //Lazy load component
        },
        {
            path: '/course/:id/:page',
            name: 'Course Page',
            component: CoursePage
        },
        {
            path: '/complete/:id',
            name: 'Complete!',
            component: (): Promise<any> => import('./views/Complete.vue') //TODO: Make this type more specific //Lazy load component
        }
    ]
});
