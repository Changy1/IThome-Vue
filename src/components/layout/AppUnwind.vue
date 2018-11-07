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
    props: ['tabshow', 'tab']

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


