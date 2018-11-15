<template>
    <div>
        <app-header :ishome = 'ishome'></app-header>
            <div ref='root' class='home'>
                <div>
                    <app-banner></app-banner>
                    <app-list :iteminfos = 'iteminfos'></app-list>
                </div>
            </div>    
        <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
            <div @click= "backTop" v-if = 'backshow' class='button-top animated'></div>
        </transition>
    </div>
</template>

<script>
import AppHeader from '@c/layout/AppHeader.vue'
import AppBanner from '@c/common/app-home/AppBanner'
import AppList from '@c/common/app-home/AppList'
import scroll from '../../util/scroll.js'
export default {
    components: {
        AppBanner,
        AppList,
        AppHeader
    },
    data () {
        return {
            iteminfos: [],
            time: Date.now(),
            backshow: false,
            ishome: 'ishome'
        }
    },
    methods: {
        backTop () {
            this.scroll.scrollTo(0,0,500)
        },
        async getFilms () {
            let result = await this.$http({
                url: `ithome/api/news/newslistpageget?Tag=&ot=${this.time}&page=0`
            })
            this.iteminfos = this.iteminfos.concat(result.Result)
            this.time =  parseInt(this.time) - 20000000 
        }
    },
    mounted () {
        this.getFilms()
        this.scroll = scroll({
            el: this.$refs.root,
            handler: this.getFilms.bind(this),
            onscroll: (y) => {
                this.backshow = (y < -200)
            }
        })
    }
}
</script>

<style lang="scss">
    .home{
        overflow: hidden;
        height: calc(100vh - 2.613333rem);
        margin-top: .266667rem;
    }
    .button-top{
        position: fixed;
        bottom: 5.333333rem;
        right: .533333rem;
        height: 1.173333rem;
        width: 1.173333rem;
        padding: .026667rem .16rem;
        background: url(//img.ithome.com/m/images/index/go-top.svg) center center no-repeat;
        background-size: 1.173333rem 1.173333rem;
    }
    .toast {
        z-index: 100;
        position: fixed;
        bottom: 1.333333rem;
        width: 50vw;
        left: 0;
        right: 0;
        margin: 0 auto;
        text-align: center;
        background: rgba(0,0,0,0.5);
        color: #fff;
    }
</style>
