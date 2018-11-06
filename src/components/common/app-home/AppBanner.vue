<template>
    <div class='banner'>
        <swiper class="banner-box" :options= "swiperOption" ref="mySwiper">
            <swiper-slide v-for = 'item in bannerli' :key = 'item.id' class="banner-text">
                <a>
                    <img :src= item.src >
                </a>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>    
</template>

<script>
export default {
    data () {
        return {
            bannerli: [
                { id:2 , src : 'https://img.ithome.com/newsuploadfiles/focus/69cf343e-15f4-4718-b85a-8a6bde361f07.jpg'},
                { id:1 , src : 'https://img.ithome.com/newsuploadfiles/focus/b536f89a-e6e6-4cd3-b27d-2e089105f59c.jpg'},                
                { id:3 , src : 'https://img.ithome.com/newsuploadfiles/focus/698a1037-879c-4a8f-bd65-c925a9e1ea00.jpg'},
                { id:4 , src : 'https://img.ithome.com/newsuploadfiles/focus/09d77bb2-6763-48dc-88c0-ea81f650aba2.jpg'}

            ], 
            // 先给一个根据宽度决定显示几个，然后就能显示多个了，在默认居中就在中间了，改变间距
            swiperOption: {
                direction: 'horizontal',    // 滑动方向   
                loop: true,                 // 循环
                autoplay: 5000,             // 自动切换
                spaceBetween: 6,            // slide的距离
                centeredSlides:true,        // 默认居中
                slidesPerView: 'auto',      // 设置slider容器能够同时显示的slides数量（auto 根据宽度自动设定）
                pagination: {
                    el: '.swiper-pagination'
                }
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
    .banner{
        margin: .224rem 0;
        .banner-box{
            width: 100%;
            .banner-text {
                border-radius: .266667rem;
                width: 9.04rem;
                a{
                    width: 100%;
                    height: 100%;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: .08rem;
                    }
                }
            }
        }
    }
</style>
