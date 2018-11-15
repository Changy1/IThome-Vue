<template>
    <div class='details'>
        <div class='details-top'>
            <a>首页</a>
            <i></i>
            <a>电商</a>
        </div>
        <div class="details-main">
            <h1>{{ info.title }}</h1>
            <div class="detils-time">
                <span class="news-time">{{ info.time | timeout }} &nbsp;</span>
                <span class="news-person">IT之家 (小白)</span>
            </div>
            <div class="news-content">
                <p>IT之家11月13日消息 为庆祝IG夺冠，王思聪“撒”113万元大奖。现在获奖情况也都知道了，113人中112个女性，只有一位男性。对此网友调侃道，难不成这是个“女装大佬”？现在，这位唯一的男性获奖者首度发声，说明了一下真实情况。</p>
                <p>据新浪科技官微消息，这位唯一的男性获奖者表示，自己确实是男的，是一枚直男，不存在改性别的问题。这是自己第一次中奖，至于为什么会中，小哥表示自己也不知道为什么。面对这个结果，小哥称自己“哈想低调一点点”。</p>
                <p>对于这个结果，微博CEO已经给出了解释，抽奖与活跃度有关，绝对没有机器号。此次参与本次王思聪万元抽奖活动男女比列为1:1.2，微博会对抽奖中疑似“水军”的账号进行降权，这些账号一般都是只转发不原创或者从来没有发过图，由于女性用户相对比较活跃，所以男性用户在抽奖活动上比较吃亏。</p>
                <p>对于为什么要对有些账号降权，微博CEO表示自己也没办法，当年是按随机抽的，抽出来机器号，用户到处举报，去工商投诉...后来只能用各种办法去过滤疑似垃圾号了。</p>
            </div>
        </div>
        <div class="details-footer">
            <div class="footer-main">
                <div class="footer-write">
                    <span>说两句...</span>
                </div>
                <div class="footer-comment">
                    <span>97</span>
                    <button></button>
                </div>
                <div 
                @click = 'changeCollect'
                class="footer-collect">
                    <button
                    :class = '{ before : active, nobefore: !active }'></button>
                </div>
                <div class="footer-share">
                    <button></button>
                </div>
                <a class="footer-open">
                    <button>打开APP</button>
                </a>
            </div>
        </div>
    </div>    
</template>


<script>
import Vue from 'vue'
import { mapActions } from 'vuex'
Vue.filter('timeout', ( val, param ) => {
    if ( !val ) return false
    let newarr = val.split('T')
    let newtime = newarr[1].split(':')
    let laststr = newarr[0] + ' ' + newtime[0] + ':' + newtime[1] 
    return laststr
})
export default {
    data () {
        return {
            info: {},
            active: false
        }
    },
    methods: {
        ...mapActions({
            changeInfo: 'collect/changeInfo',
            berforecollect : 'collect/berforecollect'
        }),
        //当收藏过就删除收藏，如果没有收藏过就收藏
        async changeCollect () {
            let { id, title, time, img } = this.info
            let before = await this.changeInfo({
                id, title, time, img 
            })        
            //改变了收藏的状态，然后改变button的class
            this.active = !this.active
        }
    },
    async mounted () {    //这时候数据已经加载了，dom也已经渲染了，所以在渲染dom的时候还没有修改info
                    //这时候info是个空，空传入过滤器没有split方法会报错
        this.info = this.$route.query
        let before = await this.berforecollect(this.info.id)    //直接传递id
        this.active = before
    }
}
</script>


<style lang="scss" scoped>
    .details {
        padding: 0 .48rem;
        .details-top {
            color: #99a2aa;
            margin-top: .544rem;
            font-size: .32rem;
            a {
                color: #99a2aa;
            }
            i {
                display: inline-block;
                width: .32rem;
                height: .426667rem;
                background: url('//img.ithome.com/m/images/news/arrow-news-r.svg') center center no-repeat;
                background-size: .16rem .32rem;
                margin: 0 .032rem;
                vertical-align: text-bottom;
            }
        }
        .details-main {
            h1 {
                margin-top: .32rem;
                font-size: .533333rem;
                font-weight: 600 ;
                line-height: .96rem;
            }
            .detils-time {
                margin: .384rem 0 .64rem 0;
                color: #99a2aa;
                font-size: .32rem;
            }
            .news-content {
                text-align: justify;
                word-wrap: break-word;
                p {
                    font-size: .426667rem;
                    margin-bottom: .64rem;
                    line-height: .773333rem;
                    display: block;
                }
            }
        }
        .details-footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            z-index: 23;
            .footer-main {
                padding: 0 .32rem;
                display: flex;
                height: 1.52rem;
                justify-content: space-around;
                box-shadow: 0 0.01rem 0.5rem 0 rgba(0,0,0,.2);
                background: #fff;
                .footer-write{
                    background: url('//img.ithome.com/m/images/review/write-comment.svg') left center no-repeat;
                    background-size: .773333rem .773333rem;
                    padding-left: .96rem;
                    span {
                        line-height: 1.52rem;
                        font-size: .346667rem;
                    }
                }
                .footer-comment {
                    position: relative;
                    span {
                        position: absolute;
                        top: .341333rem;
                        left: .76rem;
                        color: #d22222;
                        font-size: .32rem;
                    }
                    button {
                        height: 1.493333rem;
                        width: 1.493333rem;
                        padding: .026667rem .16rem;
                        background: url('//img.ithome.com/m/images/news/comment-no.svg') no-repeat;
                        background-size: .768rem .768rem;
                        background-position: center center;
                        border: none;
                        outline: none;
                    }
                }
                .footer-collect {
                    button{
                        height: 1.493333rem;
                        width: 1.493333rem;
                        padding: .026667rem .16rem;
                        border: none;
                        outline: none;
                    }
                    .nobefore {
                        background: url('//img.ithome.com/m/images/news/collect-gray.svg') no-repeat;
                        background-size: .768rem .768rem;
                        background-position: center center;
                    }
                    .before {
                        background: url('//img.ithome.com/m/images/news/collect-red.svg')no-repeat;
                        background-size: .768rem .768rem;
                        background-position: center center;
                    }
                }
                .footer-share {
                    button{
                        height: 1.493333rem;
                        width: 1.493333rem;
                        padding: .026667rem .16rem;
                        background: url('//img.ithome.com/m/images/news/share.svg') no-repeat;
                        background-size: .768rem .768rem;
                        background-position: center center;
                        border: none;
                        outline: none;
                    }
                }
                .footer-open {
                    button {
                        margin-top: .272rem;
                        height: .96rem;
                        width: 2.56rem;
                        padding: .026667rem .16rem;
                        border: solid .026667rem #d22222;
                        background: #fff;
                        font-size: .346667rem;
                        border-radius: .48rem;
                        color: #d22222;
                        font-family: Arial;
                        line-height: .96rem;
                    }
                }
            }
        }
    }
</style>
