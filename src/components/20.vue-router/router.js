import { createRouter, createWebHashHistory } from 'vue-router'

import MyHome from './MyHome.vue'
import MyMovie from './MyMovie.vue'
import MyAbout from './MyAbout.vue'

const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'router-active',
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: MyHome },
        { path: '/movie', component: MyMovie },
        { path: '/about', component: MyAbout },
    ]
})

export default router