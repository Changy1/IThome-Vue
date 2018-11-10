<template>
    <div>
        <app-header></app-header>
        <rank-banner :index.sync = 'index'></rank-banner>
        <div ref = 'root' class='rankscroll'> 
            <div>
                <rank-list :position = 'position' :index = 'index' v-for = 'item in ranklist' :key= 'item.id' :item= 'item'></rank-list>
            </div>
        </div>
    </div>    
</template>

<script>
import AppHeader from '@c/layout/AppHeader.vue'
import RankBanner from '@c/common/app-rank/RankBanner'
import RankList from '@c/common/app-rank/RankList'
import BetterScroll from 'better-scroll'
let now = Date.now()

export default {   
    data () {
        return {
            ranklist: [
                { id: 1, title: '原创', url:`ithome/api/news/newslistpageget?Tag=originalm&ot=${ now }&page=0`},
                { id: 2, title: '安卓', url:`ithome/api/news/newslistpageget?Tag=androidm&ot=${ now }&page=0`},
                { id: 3, title: '苹果', url:`ithome/api/news/newslistpageget?Tag=iosm&ot=${ now }&page=0`},
                { id: 4, title: '直播', url:`ithome/api/news/newslistpageget?Tag=livem&ot=${ now }&page=0`},
                { id: 5, title: '科普', url:`ithome/api/news/newslistpageget?Tag=discoverym&ot=${ now }&page=0`}
            ],
            index: 1,
            position: {
                top: 0
            },
        }
    },
    components: {
        RankBanner,
        RankList,
        AppHeader
    },
    methods: {
        backTop () {
            this.scroll.scrollTo(0,0,500)
        }
    },
    mounted () {
        this.scroll = new BetterScroll(this.$refs.root, {
            probeType: 2,
            click: true
        })
    },
    watch: {
        'position.top': {
            immediate: true,
            handler () {
                if( ! this.scroll ) return false
                this.scroll.scrollTo(0 , -(this.position.top) , 500)
            }
        }
    }
}
</script>

<style lang="scss">
    .rankscroll {
        height: calc(100vh - 3.813333rem);
        overflow: hidden;
    }
</style>
