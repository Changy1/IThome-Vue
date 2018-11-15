<template>
    <div>
        <form class="login">
            <div class='login-main'>
                <div class="login-text">使用软媒通行证，畅享软媒所有服务</div>
                <div class="login-product">
                    <img v-for = 'item in productli' :key = 'item.id' :src = 'item.src'>
                </div>
                <div class="login-input">
                    <div class="login-input_username">
                        <input v-model = 'username' type="text" class="user-input" placeholder="邮箱/手机号">
                    </div>
                    <div class="login-input_password">
                        <input v-model = 'password' type="text" class="user-password" placeholder="密码" >
                        <a class="user-forget">忘记密码？</a>
                    </div>
                    <a @click = 'login'  class="login-input_btn">
                            登录
                    </a>
                    <div class="login-input_a">
                        <div>
                            <img class='remember-img' src='/images/unchecked.png'>
                            <a class='login-remeber'>记住我</a>
                        </div>
                        <div>
                            <router-link to = '/register' class='login-register'>立即注册</router-link>
                            <img class='register-img' src='/images/arraw.png'>
                        </div>
                    </div>
                </div>
                <div class="login-hr">
                    <img class='login-line' src='/images/line.png'>
                    一键登录
                    </div>
                <div class="login-others">
                    <a>
                        <img v-for = 'item in otherslogin' :key = 'item.id'  :src= 'item.src'>
                    </a>
                </div>
            </div>
        </form>
        <div class='colse-btn'>
            <router-link to = '/home'>
                ×
            </router-link>
        </div>
    </div>
</template>


<script>
import { Toast } from 'mint-ui'
export default {
    data () {
        return {
            productli: [
                { id:1, src: '/images/ithome.png'},
                { id:2, src: '/images/qiyu.png'},
                { id:3, src: '/images/lapin.png'}
            ],
            otherslogin: [
                { id:1, src: '/images/iconqq.png'},
                { id:2, src: '/images/iconwechat.png'},
                { id:3, src: '/images/iconweibo.png'}
            ],
            username: '',
            password: ''
        }
    },
    methods: {
        login () {
            let userinfo = JSON.parse( localStorage.getItem('userInfo') )
            let yesname = userinfo.username
            let yesword = userinfo.password
            if( this.username == yesname && this.password == yesword ) {
                Toast({
                    message: '登录成功',
                    position: 'middle',
                    className: 'toast',
                    duration: 1000
                })
                setTimeout( () => {
                    this.$router.push('home')
                },1000)
            } else {
                Toast({
                    message: '账号或密码错误',
                    position: 'middle',
                    className: 'toast',
                    duration: 1000
                })
            }
        }
    },
/*     beforeRouteLeave (to, from , next) {     //这里没法用
        if ( !localStorage.getItem('userInfo') ){
            console.log(10)
            const answer = window.confirm('你确定不登录直接查看新闻吗？')
            if (answer) {
                next()
            } else {
                next(false)
            }
        } else {
            next()
        }
    } */
}
</script>

<style lang="scss">
    .colse-btn{
        position: absolute;
        top: 0;
        right: .266667rem;
        a{
            font-size: 1.066667rem;
            color: #777;
        }
    }
    .login {
        font: 12px "Microsoft Yahei";
        width: 7.2rem;
        height: 13.333333rem;
        margin: 10% auto;
        border: none;
        .login-main {
            height: 100%;
            width: 100%;
            .login-text {   
                font-size: .346667rem;
                margin-top: .346667rem;
                color: #666;
                text-align: center;
            }
            .login-product {
                margin-top: .453333rem;
                text-align: center;
                img {
                    width: .853333rem;
                    height: .853333rem;
                    margin: .133333rem;
                }
            }
            .login-input {
                text-align: left;
                z-index: 10000;
                height: 8.266667rem;
                .login-input_username {
                    height: 1.733333rem;
                    border-bottom: solid 1px;
                    border-bottom-color: #ccc;
                    vertical-align: bottom;
                    .user-input {
                        margin: .933333rem .133333rem 0 0;
                        width: 7.2rem;
                        outline: none;
                        border: none;
                        font-size: .373333rem;
                        color: #888;
                    }
                }
                .login-input_password {
                    height: 1.733333rem;
                    border-bottom: solid 1px;
                    border-bottom-color: #ccc;
                    .user-password {
                        height: 19px;
                        margin: .933333rem .133333rem 0 0 ;
                        width: 5.333333rem;
                        outline: none;
                        border: none;
                        font-size: .373333rem;
                        color: #888;
                    }
                    .user-forget {
                        color: #416EAF;
                        font-size: .32rem;
                    }
                }
                .login-input_btn {
                    width: 7.226667rem;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    background-color: #416EAF;
                    border-radius: .586667rem;
                    font-size: .426667rem;
                    display: block;
                    color: #F4FFFF;
                    margin-top: .506667rem;
                    margin-bottom: .453333rem;
                    outline: none;
                    text-align: center;
                }
                .login-input_a {
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    .remember-img {
                        width: .4rem;
                        height: .4rem;
                        vertical-align: middle;
                    }
                    .login-remeber {
                        vertical-align: middle;
                        padding-left: .106667rem;
                        color: #416EAF;
                    }
                    .login-register {
                        color: #416EAF;
                        vertical-align: middle;
                    }
                    .register-img {
                        vertical-align: middle;
                        width: .4rem;
                        height: .4rem;
                    }
                }
            }
            .login-hr {
                width: 7.2rem;
                color: #8A8A8A;
                margin-bottom: .266667rem;
                text-align: center;
                .login-line {
                    position: relative;
                    top: .373333rem;
                }
            }
            .login-others {
                text-align: center;
                img {
                    margin: .266667rem;
                    width: 1.066667rem;
                    height: 1.066667rem;
                }
            }
        }
    }
</style>


