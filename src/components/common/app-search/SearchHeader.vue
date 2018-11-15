<template>
    <div>
        <div class='search-input'>
            <input v-model= 'key' type="text" class="search-text">
            <!-- 这里需要注意使用params穿参就必须使用name了 query无所谓 -->
            <router-link :to = "{ path: '/search/text', query: {key: key}}" 
                        class='search-btn'
                        @click.native = 'go'
                        style = 'margin-right: 0.5rem;'
                        >搜索</router-link>
            <router-link to = "/home" 
                        class='search-btn'
                        >首页</router-link>
        </div>
        <div class="search-nav">
            <span 
                v-for = 'item in navli'
                :key = 'item.id'
                @click = 'type = item.type'
                :class='{active: type == item.type}'>{{ item.title }}</span>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            key: this.$route.query.key,
            type: 'wenzhang',
            navli: [
                { id:1, title: '文章', type: 'wenzhang'},
                { id:2, title: '辣品', type: 'lapin'},
                { id:3, title: '圈子', type: 'quanzi'}
            ]
        }
    },
    methods: {
        go () {
            this.$router.go(0)  //这里可以让他当前页面刷新
        }
    }
}
</script>

<style lang="scss">
    .search-input {
        padding: .208rem 0;
        background: #fff;
        .search-text {
            outline: none;
            height: .96rem;
            padding: 0 .32rem;
            margin: 0 .32rem;
            background: #f4f5f6;
            border-radius: .533333rem;
            border: none;
            width: calc(100% - 3rem);
        }
        .search-btn {
            color: #d22222;
        } 
    }
    .search-nav {
        background: #fff;
        z-index: 200;
        height: 1.28rem;
        display: flex;
        justify-content: space-around;
        line-height: 1.28rem;
        box-shadow: 0 .08rem .106667rem 0 rgba(0,0,0,.05);
    }
    .active {
        color: #d22222;
        position: relative;
        &:after {
            position: absolute;
            bottom: 0;
            left: 0;
            margin: 0 .16rem;
            content: '';
            border: #d22222 solid .053333rem;
            width: .4rem;
            border-radius: .133333rem;
        }
    }
</style>
