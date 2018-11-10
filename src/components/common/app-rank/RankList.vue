<template>
    <div class='rank-list'>
        <div class="rank-list_header">
            {{ item.title }}
        </div>
        <rank-item v-for = '(item,index) in rankitem' v-if= 'index <= 11' :key = 'item.newsid' :info = 'item' :index = 'index'></rank-item>
    </div>    
</template>

<script>
import RankItem from '@c/common/app-rank/RankItem.vue'
export default {
    data () {
        return {
            rankitem: []
        }
    },
    components: {
        RankItem
    },
    props: ['item', 'index', 'position'],
    async created () {
        let result = await this.$http({
            url: this.item.url
        })
        this.rankitem = result.Result
    },
    watch: {
        index: {
            immediate: true,
            handler () {
                if( this.item.id == this.index){
                    if( ! this.$el ) return false
                    this.position.top = this.$el.offsetTop
                }
            }
        }
    }
}
</script>

<style lang="scss">
    .rank-list{
        padding: 0 .48rem;
        .rank-list_header {
            margin-top: .96rem;
            padding-left: .768rem;
            height: .56rem;
            line-height: .56rem;
            font-size: .453333rem;
            background: url(//img.ithome.com/m/images/index/rank.png) left center no-repeat;
            background-size: .768rem .768rem;
        }
    }
</style>
