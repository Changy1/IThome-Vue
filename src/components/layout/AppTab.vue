<template>
    <div class='tab'>
        <swiper class="tab-box" :options= "swiperOption" ref="mySwiper">
            <swiper-slide v-for = 'item in tab' :key = 'item.id' class="tab-text_item">
                <router-link :to='item.path'>
                    {{ item.title }}
                </router-link>
            </swiper-slide>
        </swiper>
        <button class='tab-button' @click = "tabshow.yesorno = true"></button>
        <app-unwind :tab = 'tab' :tabshow = 'tabshow' v-if = 'tabshow.yesorno'></app-unwind>
    </div>
</template>

<script>
import AppUnwind from '@c/layout/AppUnwind'
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
            swiperOption: {                 
                slidesPerView: 'auto',        // 设置slider容器能够同时显示的slides数量（auto 根据宽度自动设定）
                slidesOffsetAfter: 50,
            }
        }
    },
    props: ['tabshow'],
    computed: {
      swiper() {                                // swiper标签有ref，所以ref里面就有了mySwiper
        return this.$refs.mySwiper.swiper       // 这里是计算属性，让this.swiper指向当前的轮播图
      }
    },
    components: {
        AppUnwind
    }
}
</script>

<style lang="scss">
    .tab {
        position: relative;
        height: .96rem;
        .tab-box{
            height: 100%;
            .tab-text_item{
                width: auto;
                line-height: .96rem;
                margin: 0 .250667rem 0 .48rem;
                font-size: .4rem;
            }
        }
        .tab-button{
            z-index: 1;
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
        .router-link-exact-active {
            color: #d22222;
            font-size: .426667rem;
            &::after {
                content: "";
                position: absolute;
                height: .106667rem;
                width: .32rem;
                border-radius: .053333rem;
                background: #d22222;
                bottom: 0;
                left: 0;
                right: 0;
                margin: 0 auto;
            }
        }
    } 
</style>


