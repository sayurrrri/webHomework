import { createWebHashHistory, createRouter } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/home.vue')
        },
        {
            path: '/page1',
            name: 'page1',
            component: () => import('../views/lkx/page1.vue')
        },
        {
            path: '/page2',
            name: 'page2',
            component: () => import('../views/lkx/page2.vue')
        },
        {
            path: '/page3',
            name: 'page3',
            component: () => import('../views/lkx/page3.vue')
        },
        {
            path: '/page4',
            name: 'page4',
            component: () => import('../views/ll/page4.vue')
        },
        {
            path: '/page5',
            name: 'page5',
            component: () => import('../views/ll/page5.vue')
        },
        {
            path: '/page6',
            name: 'page6',
            component: () => import('../views/ll/page6.vue')
        }
    ]
})

export default router