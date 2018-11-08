<template>
    <div class='ring-banner'>
        <swiper class='ring-banner-main' :options= "swiperOption" ref="mySwiper">
            <swiper-slide v-for= 'item in ringbannerli' :key= 'item.id' class='banner-slide'>
                <img class='banner-img' :src= 'item.src'>
                <p class="banner-text">{{ item.title }}</p>
                <p class="banner-news">{{ item.num }}</p>
            </swiper-slide>
        </swiper>
    </div> 
</template>

<script>
export default {
    data () {
        return {
            ringbannerli: [
                { id: 1, src: '//img.ithome.com/img/q/c22.png', title: '畅谈', num: '+8133'},
                { id: 2, src: '//img.ithome.com/img/q/c28.png', title: '极客圈', num: '+32'},
                { id: 3, src: '//img.ithome.com/img/q/c26.png', title: '安卓圈', num: '+378'},
                { id: 4, src: '//img.ithome.com/img/q/c35.png', title: 'iOS圈', num: '+1101'},
                { id: 5, src: '//img.ithome.com/img/q/c21.png', title: 'Win10圈', num: '+280'},
                { id: 6, src: '//img.ithome.com/img/q/c25.png', title: 'Win10手机圈', num: '+76'},
                { id: 7, src: '//img.ithome.com/img/q/c27.png', title: '软媒产品', num: '+59'},
                { id: 8, src: '//img.ithome.com/img/q/c23.png', title: '站务处理', num: '+3'},
                { id: 9, src: '//img.ithome.com/img/q/c18.png', title: '资讯投递', num: '+0'},
            ],
            swiperOption: {                 
               slidesPerView: 'auto'        // 设置slider容器能够同时显示的slides数量（auto 根据宽度自动设定）
            }
        }
    },
    computed: {
      swiper() {                                // swiper标签有ref，所以ref里面就有了mySwiper
        return this.$refs.mySwiper.swiper       // 这里是计算属性，让this.swiper指向当前的轮播图
      }
    },
}
</script>

<style lang="scss">
    .ring-banner {
        width: 100%;
        font-size: .4rem;
        position: relative;
        background-color: #fff;
        .ring-banner-main {
            overflow: hidden;
            width: 100%;
            .banner-slide {
                width: auto;
                display: inline-block;
                margin: 0 .544rem;
                padding: .384rem 0;
                text-align: center;
                .banner-img {
                    width: .96rem;
                    height: .96rem;
                }
                .banner-text { 
                    font-size: .365333rem;
                    color: #2a2a2a;
                    padding: .224rem 0;
                }
                .banner-news {
                    font-size: .32rem;
                    color: #df3838;
                }
            }
        }
    }
</style>
