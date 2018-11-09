<template>
    <div>
        <div class='search-input'>
            <input type="text" class="search-text">
            <span class='search-btn'>搜索</span>
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
            type: 'wenzhang',
            navli: [
                { id:1, title: '文章', type: 'wenzhang'},
                { id:2, title: '辣品', type: 'lapin'},
                { id:3, title: '圈子', type: 'quanzi'}
            ]
        }
    }
}
</script>

<style lang="scss">
    .search-input {
        padding: .208rem 0;
        .search-text {
            outline: none;
            height: .96rem;
            padding: 0 .32rem;
            margin: 0 .32rem;
            background: #f4f5f6;
            border-radius: .533333rem;
            border: none;
            width: calc(100% - 1.866667rem);
        }
        .search-btn {
            color: #d22222;
        } 
    }
    .search-nav {
        z-index: 200;
        height: 1.28rem;
        display: flex;
        justify-content: space-around;
        line-height: 1.28rem;
        box-shadow: 0 .08rem .106667rem 0 rgba(0,0,0,.05)
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
