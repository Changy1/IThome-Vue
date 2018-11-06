<template>
    <div class='unwind'>
        <div class="unwind-top">
            <span class='unwind-top_my'>我的栏目</span>
            <span class="unwind-top_go">（点击进入栏目）</span>
            <button @click = "tabshow.yesorno = false"></button>
        </div>
        <div class="unwind-bottom">
            <router-link @click.native = "tabshow.yesorno = false" v-for = 'item in tab' :to = 'item.path' :key = 'item.id' class="bottom-btn">
                {{ item.title }}
            </router-link>
        </div>
    </div>    
</template>

<script>
export default {
    data () {
        return {
            tab: [
                { id: 1, title: '最新', path: '/home' },
                { id: 2, title: '排行榜', path: '/rank' },
                { id: 3, title: '原创', path: '/' },
                { id: 4, title: '苹果', path: '/' },
                { id: 5, title: '上热评', path: '/hotcomment' },
                { id: 6, title: '测评室', path: '/' },
                { id: 7, title: '发布会', path: '/' },
                { id: 8, title: '专题', path: '/' },
                { id: 9, title: '阳台', path: '/' },
                { id: 10, title: '手机', path: '/' },
                { id: 11, title: '数码', path: '/' },
                { id: 12, title: '极客学院', path: '/' },
                { id: 13, title: 'VR', path: '/' },
                { id: 14, title: '智能汽车', path: '/' },
                { id: 15, title: '电脑', path: '/' },
                { id: 16, title: '京东精选', path: '/' },
                { id: 17, title: '安卓', path: '/' },
                { id: 18, title: '网络焦点', path: '/' },
                { id: 19, title: '行业前沿', path: '/' },
                { id: 20, title: '游戏电竞', path: '/' },
                { id: 21, title: 'windows', path: '/' },
                { id: 22, title: '科普', path: '/' },
            ],
        }
    },
    props: ['tabshow']

}
</script>

<style lang="scss">
    .unwind {
        position: absolute;
        z-index: 2;
        top: 0;
        height: 100vh;
        width: 100vw;
        background: #fff;
        .unwind-top {
            position: relative;
            height: .96rem;
            line-height: .96rem;
            .unwind-top_my {
                padding-left: .32rem;
                font-size: .4rem;
            }
            .unwind-top_go {
                font-size: .4rem;
                color: #999;
            }
            button {
                transform: scaleY(-1);
                z-index: 3;
                width: 1.501067rem;
                height: 100%;
                position: absolute;
                top: 0;
                right: 0;
                background: url('//img.ithome.com/m/images/index/arrow-tab.svg') center center no-repeat;
                background-size: .746667rem .746667rem;
                background-color: #fff;
                border: none;
                outline: none;
            }
        }
        .unwind-bottom {
            padding: .072rem;
            display: flex;
            flex-wrap: wrap;
            .bottom-btn {
                font-family: Arial;
                display: inline-block;
                text-align: center;
                line-height: .906667rem;
                width: 2.186667rem;
                height: .906667rem;
                border: .026667rem solid #ddd;
                margin: .192rem .392rem;
                background: #fff;
                border-radius: .533333rem;
                font-size: .346667rem;
                color: #333;
            }
        }
    }
</style>


