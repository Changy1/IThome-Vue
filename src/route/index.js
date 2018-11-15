import Vue from 'vue'

import VueRouter from 'vue-router'

import AppHome from '../pages/home/AppHome.vue'
import AppRank from '../pages/rank/AppRank.vue'
import AppHotcomment from '../pages/hotcomment/AppHotcomment.vue'
import AppNotfound from '../pages/not-found/AppNotfound.vue'
import AppLogin from '../pages/login/AppLogin.vue'
import AppRegister from '../pages/register/AppRegister.vue'
import AppRing from '../pages/ring/AppRing.vue'
import AppSearch from '../pages/search/AppSearch.vue'
import SearchKeys from '@c/common/app-search/SearchKeys.vue'
import SearchList from '@c/common/app-search/SearchList.vue'
import AppCollect from '../pages/collect/AppCollect.vue'
import AppDetails from '../pages/details/AppDetails.vue'

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
        name: 'details',
        path: '/details',
        component: AppDetails
    },
    {
        path: '/login',
        component: AppLogin
    },
    {
        path: '/search',
        component: AppSearch,
        children: [
            {
                path: 'keys',
                component: SearchKeys
            },
            {
                path: 'text',
                name: 'text',
                component: SearchList,
            },
            {
                path: '',
                component: SearchKeys
            },
        ]
    },
    {
        path: '/register',
        component: AppRegister
    },
    {
        path: '/collect',
        component: AppCollect,
        beforeEnter: (to, from, next) => {
            if ( localStorage.getItem('userInfo') ) {
                next()
            } else {
                next('/login')
            }
        }
    },
    {
        path: '/ring',
        component: AppRing
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