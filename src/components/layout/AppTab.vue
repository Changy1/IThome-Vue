<template>
    <div class='tab'>
        <swiper class="tab-box" :options= "swiperOption" ref="mySwiper">
            <swiper-slide v-for = '(item,index) in tab' :key = 'index' class="tab-text_item">
                {{ item }}
            </swiper-slide>
        </swiper>
        <button></button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tab: ['最新', '排行榜', '原创', '苹果', '上热评', '测评室', '发布会', '专题', '阳台', '手机', '数码', '极客学院', 'VR', '智能汽车', '电脑', '京东精选', '安卓', '网络焦点', '行业前沿', '游戏电竞', 'Windows', '科普'],
            swiperOption: {
               slidesPerView: 'auto'
            }
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
}
</script>

<style lang="scss">
    .tab {
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
    } 
</style>


