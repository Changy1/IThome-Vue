<template>
    <div class="rank-header">
        <swiper class="rank-tab" :options= "swiperOption" ref="mySwiper">
            <swiper-slide  @click.native = "$emit('update:index', item.id)" :class = '{tab_active : item.id == index}' v-for = 'item in ranktab' :key = 'item.id' class="rank-tab_text">
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
                { id: 1, title: '原创'},
                { id: 2, title: '安卓'},
                { id: 3, title: '苹果'},
                { id: 4, title: '直播'},
                { id: 5, title: '科普'}
            ],
            swiperOption: {                 
                slidesPerView: 'auto',     //设置slider容器能够同时显示的slides数量（auto 根据宽度自动设定）
                
            }
        }
    },
    props: ['index'], 
    computed: {
      swiper() {                                // swiper标签有ref，所以ref里面就有了mySwiper
        return this.$refs.mySwiper.swiper       // 这里是计算属性，让this.swiper指向当前的轮播图
      }
    }
}
</script>


<style lang="scss">
    .rank-header {
        background: #fff;
        position: sticky;
        top: -0.053333rem;
        left: 0;
        z-index: 10;
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
        .tab_active {
            background-image: linear-gradient(135deg,#f56969 0%,#ea2727 100%);
            a{
                color: #fff;
            }
        }
    }
</style>
