<template>
    <div class='search-box'>
        <div class="search-hot">热门搜索</div>
        <div class="hot-word">
            <span 
                v-for = 'item in hotword'
                :key = 'item.id'
            >{{ item.tilte }}</span>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            hotword: [
                {id: 1, tilte: '苹果'},
                {id: 2, tilte: '三星'},
                {id: 3, tilte: '华为'},
                {id: 4, tilte: '手机'},
                {id: 5, tilte: '垄断'},
                {id: 6, tilte: '百度'},
                {id: 7, tilte: '小米8'},
                {id: 8, tilte: 'surface'},
                {id: 9, tilte: 'htc10'},
                {id: 10, tilte: 'XR'}
            ]
        }
    }
}
</script>

<style lang="scss">
    .search-box {
        padding: 0 .48rem;
        margin: .853333rem 0;
        .search-hot {
            font-size: .4rem;
            margin: .48rem 0;
        }
        .hot-word {
            margin-bottom: .96rem;
            display: flex;
            flex-wrap: wrap;
            span {
                background: #fff;
                height: .96rem;
                line-height: .96rem;
                border-radius: .533333rem;
                padding: 0 .48rem;
                margin: .16rem;
                font-size: .32rem;
                flex: 1 1 auto;
                text-align: center;
                max-width: 30%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>
