<template>
    <div class = 'search-bottom'>
        <div v-if = 'textli.length'>
            <search-text v-for = 'item in textli' :key = 'item.newsid' :info = 'item'></search-text>
        </div>
        <div v-else class='search-nohas'>没有更多了</div>
    </div>
</template>

<script>
import SearchText from '@c/common/app-search/SearchText.vue'

export default {
    components: {
        SearchText    
    },
    data () {
        return {
            key: this.$route.query.key,
            textli: [],
        }
    },
    async mounted () {
        let res = await this.$http({
            url: `/ithome/api/search/searchnewsget?keyWord=${ this.key }&client=wap&from=&userId=`
        })
        this.textli = res.Result
    }
}
</script>

<style lang="scss">
    .search-bottom {
        padding: 0 .48rem;
        background: #fff;
        margin-top: .053333rem;
        overflow: hidden;
    }
    .search-nohas {
        width: 100%;
        height: .373333rem;
        line-height: .373333rem;
        padding: .373333rem 0;
        margin-bottom: .373333rem;
        text-align: center;
    }
</style>
