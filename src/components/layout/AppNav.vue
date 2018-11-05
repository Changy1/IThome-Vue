<template>
    <div v-if= "navshow" class='nav'>
        <nav>
            <div class='nav-personal'>
                <div class="nav-personal_img">
                    <img src='https://img.ithome.com/m/images/user/noavatar.png'>
                </div>
                <div class="nav-personal_name">
                    <span class='nav-personal_nickname'>越过</span>
                    <p>
                        <span class='nav-personal_lv'>Lv.0</span>
                        <span class="nav-personal_ID">ID:596116693</span>
                    </p>
                </div>
            </div>
            <div class="nav-search">
                    <img src='//img.ithome.com/m/images/index/search-ico.svg'>
                    <span>搜索关键词</span>
            </div>
            <div class="nav-text">
                <ul>
                    <li v-for = 'item in li' :key = 'item.id' >
                        <img :src= 'item.src'>
                        <span class=''>{{ item.text }}</span>
                    </li>
                </ul>
            </div>
            <div class="nav-page">
                <span>博客版</span>
                丨
                <span>极速版</span>
                丨
                <span>电脑版</span>
            </div>
        </nav>
        <!-- 这里是sync的用法，update：props 的模式触发数据的改变，父元素会监听这个事件 -->
        <div @click = "$emit('update:navshow', false)" class="nav-mask"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            li: [
                { id: 1, src: 'https://img.ithome.com/m/images/user/comment.svg', text: '我的评论' },
                { id: 2, src: 'https://img.ithome.com/m/images/user/note.svg', text: '我的帖子' },
                { id: 3, src: 'https://img.ithome.com/m/images/user/collection.svg', text: '我的收藏' },
                { id: 4, src: 'https://img.ithome.com/m/images/user/suggest.svg', text: '分享给好友' },
                { id: 5, src: 'https://img.ithome.com/m/images/user/setting.svg', text: '账户设置' },
                { id: 6, src: 'https://img.ithome.com/m/images/user/feedback.svg', text: '意见反馈' },
                { id: 7, src: 'https://img.ithome.com/m/images/user/logout.svg', text: '退出登录' },
            ]
        }
    },
    props : ['navshow']
}
</script>

<style lang="scss">
    .nav {
        position: fixed;
        top: 0; bottom: 0; left: 0; right: 0;
        width: 100%;
        height: 100%;
        margin: auto;
        nav {
            position: absolute;
            top: 0;
            width: 80%;
            height: 100%;
            right: 0;
            background: #fff;
            z-index: 21;
            padding: .48rem;
            overflow: auto;
            .nav-personal {
                display: flex;
                align-items: center;
                .nav-personal_img {
                    width: 2.08rem;
                    height: 2.08rem;
                    margin-right: .48rem;
                    margin-bottom: .32rem;
                    img {
                        border-radius: 50%;
                    }
                }
                .nav-personal_name {
                    .nav-personal_nickname{
                        display: block;
                        font-size: .426667rem;
                        color: #333;
                        margin-bottom: .266667rem;
                    }
                    p {
                        font-size: .32rem;
                        color: #aaa;   
                        .nav-personal_lv {
                            margin-right: .213333rem;
                        }  
                    }
                }
            }
            .nav-search {
                width: 100%;
                height: .96rem;
                line-height: .96rem;
                background: #f3f4f5;
                border-radius: .533333rem;
                text-align: center;
                span{
                    color: #969696;
                    display: inline-block;
                }
                img{
                    display: inline-block;
                    margin-right: .133333rem;
                    margin-bottom: .133333rem;
                    width: .746667rem;
                }
            }
            .nav-text {
                li {
                    width: 100%;  
                    height: 1.786667rem;  
                    color: #333;
                    font-size: .426667rem;
                    display: flex;
                    align-items: center;
                    img {
                        height: .64rem;
                        margin-right: .48rem;
                        margin-bottom: .053333rem;
                    }
                    span {
                        display: inline-block;
                        height: 1.786667rem;
                        line-height: 1.786667rem;
                        flex-grow: 1;
                        border-bottom: .026667rem solid #eee;
                    }
                }
            }
            .nav-page {
                margin: .96rem .213333rem;
                padding: 0 .32rem;
                background-color: #f4f5f6;
                border-radius: .533333rem;
                height: 1.12rem;
                color: #333;
                display: flex;
                align-items: center;
                justify-content: space-around;
                span{
                    font-size: .373333rem;
                    flex-grow: 1;   
                    text-align: center;
                }
            }
        }
        .nav-mask {
            position: absolute;
            height: 100%;
            width: 100%;
            background: rgba( 0, 0, 0, 0.8);
            z-index: 10;
        }
    }
</style>


