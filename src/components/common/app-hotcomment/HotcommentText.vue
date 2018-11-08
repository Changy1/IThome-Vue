<template>
    <div class='comment'>
        <div class="comment-img">
            <img v-if = 'index == 0' src= '//img.ithome.com/m/images/index/gold-comment.png'>
            <img v-if = 'index == 1' src= '//img.ithome.com/m/images/index/silver-comment.png'>
            <img v-if = 'index == 2' src= '//img.ithome.com/m/images/index/copper-comment.png'>
            <a v-if = 'index > 2'>{{ index + 1 }}</a>
        </div>
        <div class="comment-userinfo">
            <div class="comment-name">
                <div class="comment-name_photo">
                    <img :src= 'info.HeadImg'>
                </div>
                <div class="comment-name_ID">
                    <span class="comment-name_IDname">{{ info.N }}</span>
                    <span class="comment-name_phone">{{ info.Ta }}</span>
                    <p class="comment-name_city">{{ info.Y }}</p>
                </div>
            </div>
            <div class="comment-content">{{ info.C }}</div>
            <div class="comment-news">{{ info.T }}</div>
            <div class="comment-footer">
                <span class="comment-footer_left">{{ info.WT }}</span>
                <span class="comment-footer_right">
                    <span class="comment-footer_agree">支持({{ info.S }})</span>
                    <span class="comment-footer_noagree">反对({{ info.Cl }})</span>
                    <span class="comment-footer_share">分享</span>
                </span>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    props: ['info', 'index']
}
</script>

<style lang="scss">
    .comment {
        position: relative;
        margin: .32rem 0;
        .comment-img {
            position: absolute;
            top: .266667rem;
            left: 0;
            width: 1.28rem;
            height: .96rem;
            line-height: .96rem;
            text-align: center;
            img{
                width: .666667rem;
                height: .666667rem;
            }
            a{
                color: #999;
            }
        }
        .comment-userinfo {
            margin: 0 .48rem 0 1.28rem;
            border-bottom: solid .026667rem #eee;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .comment-name {
                margin-top: .266667rem;
                display: flex;
                align-items: center;
                .comment-name_photo {
                    width: 36px;
                    height: 36px;
                    margin-right: .224rem;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
                .comment-name_ID {
                    line-height: .4992rem;
                    span{
                        display: inline-block;    
                    }
                    .comment-name_IDname {
                        font-size: .32rem;
                        margin-right: .032rem;
                    }
                    .comment-name_phone {
                        color: #496fcb;
                        font-size: .32rem;
                        padding-left: .48rem;
                        height: .426667rem;
                        line-height: .426667rem;
                        background: url('//img.ithome.com/images/v2.3/dev_icon.svg') no-repeat;
                        background-position: left -176px;
                    }
                    .comment-name_city {
                        font-size: .32rem;
                        color: #999;
                    }
                }
            }
            .comment-content {
                margin: .448rem 0;
                font-size: .4rem;
                line-height: .72rem;
                word-wrap: break-word;
                word-break: break-all;
            }
            .comment-news {
                background: #f4f5f6;
                font-size: .32rem;
                line-height: .464rem;
                color: #666;
                padding: 6px;
            }
            .comment-footer {
                margin: .576rem 0 ;
                color: #999;
                font-size: .32rem;
                display: flex;
                justify-content: space-between;
                .comment-footer_agree {
                    margin-left: .384rem;
                    color: #7ba62c;
                }
                .comment-footer_noagree {
                    margin-left: .384rem;
                    color: #ed7874;
                }
                .comment-footer_share {
                    margin-left: .384rem;
                }
            }
        }
    }
</style>
