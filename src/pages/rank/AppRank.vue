<template>
    <div>
        <app-header></app-header>
        <rank-banner></rank-banner>
        <rank-list v-for = 'item in ranklist' :key= 'item.id' :item= 'item'></rank-list>
    </div>    
</template>

<script>
import AppHeader from '@c/layout/AppHeader.vue'
import RankBanner from '@c/common/app-rank/RankBanner'
import RankList from '@c/common/app-rank/RankList'
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
            ]
        }
    },
    components: {
        RankBanner,
        RankList,
        AppHeader
    }
}
</script>

<style lang="scss">
    
</style>
