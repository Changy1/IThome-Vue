<template>
    <div class = 'search-bottom'>
        <search-text v-for = 'item in textli' :key = 'item.newsid' :info = 'item'></search-text>
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
            textli: []
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
        padding: .32rem .48rem;
    }
</style>
