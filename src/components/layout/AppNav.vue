<template>
    <!-- 这里不能给父元素加v-if，如果父元素消失出现的画，子元素不会有动画效果，所以要把父元素的高度设置为0，让他不盖住别的东西 -->
    <div class='nav'>
        <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
            <nav v-if= "navshow" class='animated'>
                <router-link to='/login'>
                    <div class='nav-personal'>
                        <div class="nav-personal_img">
                            <img v-if = 'userinfo' src='https://img.ithome.com/m/images/user/noavatar.png'>
                            <img v-else src= 'https://img.ithome.com/quan_m/images/user/no-login-hdimg.png'>
                        </div>
                        <div class="nav-personal_name">
                            <span v-if = 'userinfo' class='nav-personal_nickname'>{{ this.userinfo.username }}</span>
                            <span v-else class='nav-personal_nickname'>登录/注册</span>
                            <p> 
                                <span v-if = 'userinfo' class='nav-personal_lv'>Lv.0</span>
                                <span v-if = 'userinfo' class="nav-personal_ID">ID:596116693</span>
                                <span v-else class="nav-personal_ID">登录软媒通行证，畅享所有服务</span>
                            </p>
                        </div>
                    </div>
                </router-link>
                <div class="nav-search">
                        <img src='//img.ithome.com/m/images/index/search-ico.svg'>
                        <router-link to = '/search/keys'>搜索关键词</router-link>
                </div>
                <div class="nav-text">
                    <ul>
                        <li v-for = 'item in li' :key = 'item.id' >
                            <img :src= 'item.src'>
                            <span v-if = 'item.id != 3 && item.id != 7'  class=''>{{ item.text }}</span>
                            <span v-if = 'item.id == 7' @click = 'over'  class=''>{{ item.text }}</span>
                            <router-link to = '/collect' v-if = 'item.id ==3'>{{ item.text }}</router-link>
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
        </transition>
        <!-- 这里是sync的用法，update：props 的模式触发数据的改变，父元素会监听这个事件 -->
        <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
            <div v-if= "navshow" @click = "$emit('update:navshow', false)" class="nav-mask animated"></div>
        </transition>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
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
            ],
            userinfo: ''
        }
    },
    props : ['navshow'],
    mounted () {
        this.userinfo = JSON.parse( localStorage.getItem('userInfo') ) || ''
    },
    methods: {
        over () {
            //如果当前是登陆的话
            if ( this.userinfo ){
                localStorage.removeItem('userInfo')
                Toast({
                    message: '退出成功',
                    position: 'middle',
                    className: 'toast',
                    duration: 1000
                })
                setTimeout( () => {
                    this.$router.go(0)
                },1000)
            } else {
                Toast({
                    message: '登录后才可以退出哦',
                    position: 'middle',
                    className: 'toast',
                    duration: 2000
                })
            }
        }
    }
}
</script>

<style lang="scss">
    .nav {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 20;
        .animated {
            animation-duration: 0.5s;
        }
        nav {
            position: absolute;
            top: 0;
            right: 0;
            width: 80vw;
            height: 100vh;
            background: #fff;
            z-index: 30;
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
                a{
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
            top: 0;
            right: 0;
            height: 100vh;
            width: 100vw;
            background: rgba( 0, 0, 0, 0.8);
            z-index: 10;
        }
    }
</style>


