<template>
    <div class="rank-header">
        <swiper class="rank-tab" :options= "swiperOption" ref="mySwiper">
            <swiper-slide v-for = 'item in ranktab' :key = 'item.id' class="rank-tab_text">
                <a>
                    {{ item.title }}
                </a>
            </swiper-slide>
        </swiper>
    </div>
</template>


<script>
export default {
    data () {
        return {
            ranktab: [
                { id: 1, title: '日榜'},
                { id: 2, title: '周榜'},
                { id: 3, title: '热评'},
                { id: 4, title: '辣榜'},
                { id: 5, title: '月榜'}
            ],
            swiperOption: {                 
               slidesPerView: 'auto'     //设置slider容器能够同时显示的slides数量（auto 根据宽度自动设定）
            }
        }
    },
    computed: {
      swiper() {                                // swiper标签有ref，所以ref里面就有了mySwiper
        return this.$refs.mySwiper.swiper       // 这里是计算属性，让this.swiper指向当前的轮播图
      }
    }
}
</script>


<style lang="scss">
    .rank-header {
        height: 1.44rem;
        width: 100%;
        line-height: 1.44rem;
        display: flex;
        align-items: center;
        overflow: hidden;
        .rank-tab_text{
            background: #f2f3f4;
            width: 2.24rem;
            height: .96rem;
            line-height: .96rem;
            margin: 0 .272rem;
            text-align: center;
            border-radius: .533333rem;
        }
        .rank-tab_active {
            background-image: linear-gradient(135deg,#f56969 0%,#ea2727 100%);
            a{
                color: #fff;
            }
        }
    }
</style>
