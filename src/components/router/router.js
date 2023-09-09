import { createRouter, createWebHashHistory } from 'vue-router'
import mainPage from '../pages/mainPage.vue'
import postPage from '../pages/postPage.vue'
import postPageWithVuex from '../pages/postPageWithVUEX.vue'
const routes = [

    {
        path: '/users',
        component: postPage
    },
    {
        path: '/',
        component: mainPage
    },
    {
        path: '/store',
        component: postPageWithVuex
    },
]
const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router