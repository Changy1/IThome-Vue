<template>
    <div class='item'>
        <router-link 
        :to = "{name: 'details' , query: { id: info.newsid , title: info.title , time: info.orderdate , img: info.image} }" 
        class='item-box'>
            <div class='item-img'>
                <span 
                    class="item-num"
                    :class="{ 
                        'item-one' : index == 0 ,  
                        'item-two' : index == 1 ,
                        'item-three' : index == 2,
                        'item-other' : index > 2
                    }" >{{ index+1 }}</span>
                <img :src='info.image'>
            </div>
            <div class='item-text'>
                <div class='item-text_top'>
                    <span class='item-text_topic'>{{ info.title }}</span>
                </div>
                <div class='item-text_bottom'>
                    <span class='item-text_time'>{{ info.PostDateStr }}</span>
                    <span class="item-text_tip" :class= "oneinfo.TipClass" v-for= '(oneinfo,index) in info.NewsTips' :key = 'index' >{{ oneinfo.TipName }}</span>
                    <span class='item-text_review'>{{ info.commentcount }}评</span>
                </div>
            </div>
        </router-link>
    </div>      
</template>

<script>
export default {
    props: ['info', 'index']
}
</script>

<style lang="scss">
    .item {
        position:relative;
        margin: .64rem 0;
        .item-box{
            display: flex;
            justify-content: space-between;
            .item-img{
                width: 31%;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: .106667rem;
                }
                .item-one{
                    background: url('//img.ithome.com/m/images/index/rank-gold.png') no-repeat;
                }
                .item-two{
                    background: url('//img.ithome.com/m/images/index/rank-silver.png') no-repeat;
                }
                .item-three{
                    background: url('//img.ithome.com/m/images/index/rank-copper.png') no-repeat;
                }
                .item-other{
                    background: url('//img.ithome.com/m/images/index/rank-other.png') no-repeat;
                }
                .item-num{
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    left: -0.266667rem;
                    font-size: .32rem;
                    width: .586667rem;
                    height: .56rem;
                    color: #fff;
                    line-height: .56rem;
                    text-align: center;
                    background-size: .586667rem .56rem;
                }
            }
            .item-text{
                width: 66%;
                display: flex;
                flex-wrap: wrap;
                align-content: space-between;
                .item-text_top,.item-text_bottom{
                    width: 100%;
                }
                .item-text_topic{
                    width: 5.92rem;                 // 必须设置一个定宽
                    font-size: .426667rem;          
                    overflow: hidden;               // 隐藏
                    text-overflow: ellipsis;        // 省略号
                    display: -webkit-box;           // 将对象作为弹性伸缩盒子模型显示
                    -webkit-line-clamp: 2;          // 设置一个块元素显示的文本的行数
                    -webkit-box-orient: vertical;   // 设置或检索伸缩盒对象的子元素的排列方式 
                }
                .item-text_bottom{
                    font-size: .32rem;
                    color: #99a2aa;
                }
                .item-text_review{
                    float: right;
                }
                .item-text_tip{
                    margin: .096rem;
                    padding: 0 .064rem;
                    color: #fff;
                }
                .tip-red{
                    background-color: #d22222;
                }
                .tip-blue{
                    background-color: #4780dd;
                }
                .tip-orange{
                    background-color: #ffab27;
                }
                .tip-gray {
                    background-color: #ccc;
                }
            }
        }
    }
</style>
