<template>
    <div>
        <div class="header-container">
            <div class="header-logo">
                <a v-if = 'isRing'>
                    <img src='http://img.ithome.com/quan_m/images/index/logo.svg'>
                </a>
                <router-link to='/home' v-else>
                    <img src='http://img.ithome.com/m/images/index/logo.svg'>
                </router-link>
            </div>
            <div class="header-options">
                <router-link to = '/home' v-if = 'isRing' class="header-options_left">
                    <img src='//img.ithome.com/quan_m/images/index/ithome-logo.svg'>
                    <span>咨询</span>
                </router-link>
                <a @click = 'back' v-if= '!ishome' class="header-options_left">
                    <img src='//img.ithome.com/m/images/index/lapin-logo-gray.svg'>
                    <span>后退</span>
                </a>
                <router-link to = '/ring' v-if = '!isRing' :class= '{homequanzi: ishome}' class="header-options_center">
                    <img src='//img.ithome.com/m/images/index/circle-logo-gray.svg'>
                    <span>圈子</span>
                </router-link>
                <a @click = 'navshow = !navshow' class="header-options_right">
                    <img src='//img.ithome.com/m/images/index/um-search.svg'>
                </a>
            </div>

            <app-nav :navshow.sync = 'navshow'></app-nav>
        </div> 
        <app-tab v-if = '!isRing && !isDetails ' :tabshow = 'tabshow'></app-tab>
    </div>
</template>

<script>
import AppNav from '@c/layout/AppNav'
import AppTab from '@c/layout/AppTab'
export default {  
    data () {
        return {
            navshow: false,
            tabshow: {          // 这里父组件定义一个对象，给子组件地址，保证下面两级都能改变数据
                yesorno: false
            },
        }
    },
    methods: {
        back () {
            this.$router.go(-1)
        }
    },
    props: ['isRing','isDetails','ishome'],
    components: {
        AppNav,
        AppTab,
    }
}

</script>

<style lang="scss">
    .header-container {
        background: #fff;
        height: 1.413333rem;
        display: flex;
        justify-content: space-between;
        .header-logo{
            flex-grow: 0;
            flex-shrink: 0;
            width: 2.506667rem;
            a {
                display: flex;
                height: 100%;
                width: 100%;
                padding-left: .16rem;
                justify-content: center;
                align-items: center;
                    img{
                        width: 1.866667rem;
                        height: .933333rem;
                    }
            }
        }
        .header-options{
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-grow: 0;
            flex-shrink: 0;
            width: 5.226667rem;
            .header-options_left,.header-options_center,.header-options_right{
                display: flex;
                align-items: center;
            }
            .header-options_left,.header-options_center{
                margin-left: .32rem;
                img{
                    width: .8rem;
                }
                span{
                    line-height: 1.413333rem;
                }
            }
            .header-options_right{
                padding: .16rem;
                margin-right: .106667rem;
                img{
                    width: .746667rem;
                }
            }
            .homequanzi {
                margin-left: 2rem;
            }
        }
    }
</style>

