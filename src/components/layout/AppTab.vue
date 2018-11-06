<template>
    <div class='tab'>
        <div class="tab-text swiper-container">
            <div class="tab-box swiper-wrapper">
                <div class="tab-text_item swiper-slide">
                    最新
                </div>
                <div class="tab-text_item swiper-slide">
                    排行榜
                </div>
                <div class="tab-text_item swiper-slide">
                    最新
                </div>
                <div class="tab-text_item swiper-slide">
                    最新
                </div>
            </div>
        </div>
        <button></button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .tab {
        height: .96rem;
        .tab-text{
            height: 100%;
            .tab-box{
                height: 100%;
                display: flex;
                .tab-text_item{
                    line-height: .96rem;
                    margin: 0 .250667rem 0 .48rem;
                    font-size: .4rem;
                }
            }
        }
    } 
</style>


