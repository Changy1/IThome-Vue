<template>
    <div class= 'list-itemone'>
        <div class="list-itemone_top">
            <img class='list-itemone_img' :src= 'info.HeadImg'>
            <span class='list-itemone_name'>{{ info.Un }}</span>
            <span class='list-itemone_fan'>{{ info.Cn }}</span>
        </div>
        <div class="list-itemone_center">
            <span   v-for = '(item,index) in info.TieTips' 
                    :key = 'index'
                    class='list-itemone_tip'
                    :class = 'item.TipClass'
                >{{ item.TipName }}</span>
            <span class='list-itemone_text'>{{ info.T }}</span>
        </div>
        <div class="list-itemoen_bottom">
            <span class='list-itemone_time'>{{ info.PostDateStr }}发布</span>
            <span class='list-itemone_user'>{{ info.Rn }}</span>
            <span class='list-itemone_now'>{{ info.LastCommentDateStr }}</span>
            <span class='list-itemone_count'>{{ info.Rc }}评论</span>
        </div>
    </div>    
</template>

<script>

export default {
    props: ['info']
}
</script>

<style lang="scss">
    .list-itemone {
        margin: .48rem 0;
        border-bottom: solid .03rem #eee;
        .list-itemone_top {
            margin: .48rem 0;
            .list-itemone_img {
                width: .64rem;
                height: .64rem;
                border-radius: 50%;
            }
            .list-itemone_name {
                margin-left: .24rem;
                font-size: .346667rem;
                vertical-align: middle;
            }
            .list-itemone_fan {
                float: right;
                font-size: .32rem;
                padding: .128rem .2848rem;
                background: #f4f5f6;
                border-radius: .96rem;
                vertical-align: middle;
            }
        }
        .list-itemone_center {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-all;
            word-wrap: break-word;
            line-height: .768rem;
            .tip-orange {
                background: #ff831b;
            }
            .tip-default {
                background: lightseagreen;
            }
            .list-itemone_tip{
                line-height: .426667rem;
                position: relative;
                top: -0.037333rem;
                color: #fff;
                display: inline-block;
                padding: .021333rem .096rem;
                margin-right: .096rem;
                font-size: .329333rem;
                border-radius: .133333rem;
            }
            .list-itemone_text{
                font-size: .426667rem;
            }
        }
        .list-itemoen_bottom {
            margin: .48rem 0;
            font-size: .32rem;
            .list-itemone_time { 
                color: #99a2aa;
            }
            .list-itemone_user {
                padding-left: .32rem;
            }
            .list-itemone_now {
                color: #99a2aa;
                padding-left: .16rem;
            }
            .list-itemone_count {
                color: #99a2aa;
                float: right;
            }
        }
    }
</style>
