import Vue from 'vue'

import VueRouter from 'vue-router'

import AppHome from '../pages/home/AppHome.vue'
import AppRank from '../pages/rank/AppRank.vue'
import AppHotcomment from '../pages/hotcomment/AppHotcomment.vue'
import AppNotfound from '../pages/not-found/AppNotfound.vue'
import AppLogin from '../pages/login/AppLogin.vue'
import AppRegister from '../pages/register/AppRegister.vue'

Vue.use(VueRouter)



const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: AppHome
    },
    {
        path: '/rank',
        component: AppRank
    },
    {
        path: '/hotcomment',
        component: AppHotcomment
    },
    {
        path: '/login',
        component: AppLogin
    },
    {
        path: '/register',
        component: AppRegister
    },
    {
        path: '/not-found',
        component: AppNotfound
    },
    {
        path: '**',
        redirect: '/not-found'
    }
]


const router = new VueRouter({
    mode: 'history',
    routes    
})

export default router