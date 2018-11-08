<template>
    <div>
        <form class="register">
            <div class='register-main'>
                <div class="register-text">使用软媒通行证，畅享软媒所有服务</div>
                <div class="register-product">
                    <img v-for = 'item in productli' :key = 'item.id' :src = 'item.src'>
                </div>
                <div class="register-input">
                    <div class="register-input_username">
                        <input type="text" class="user-input" placeholder="手机号">
                    </div>
                    <div class="register-input_password">
                        <input type="text" class="user-password" placeholder="短信验证码" >
                    </div>
                    <a class="user-forget">获取验证码</a>
                    <a class="register-input_btn">
                            注册
                    </a>
                    <div class="register-input_a">
                        <router-link to="/login"> 
                            我已有软媒通行证，立即登录
                        </router-link>  
                    </div>
                </div>
                <div class="register-hr">
                    <img class='register-line' src='/images/line.png'>
                    一键登录
                    </div>
                <div class="register-others">
                    <a>
                        <img v-for = 'item in othersregister' :key = 'item.id'  :src= 'item.src'>
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
export default {
    data () {
        return {
            productli: [
                { id:1, src: '/images/ithome.png'},
                { id:2, src: '/images/qiyu.png'},
                { id:3, src: '/images/lapin.png'}
            ],
            othersregister: [
                { id:1, src: '/images/iconqq.png'},
                { id:2, src: '/images/iconwechat.png'},
                { id:3, src: '/images/iconweibo.png'}
            ]
        }
    }
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
    .register {
        font: 12px "Microsoft Yahei";
        width: 7.2rem;
        height: 13.333333rem;
        margin: 10% auto;
        border: none;
        .register-main {
            height: 100%;
            width: 100%;
            .register-text {   
                font-size: .346667rem;
                margin-top: .346667rem;
                color: #666;
                text-align: center;
            }
            .register-product {
                margin-top: .453333rem;
                text-align: center;
                img {
                    width: .853333rem;
                    height: .853333rem;
                    margin: .133333rem;
                }
            }
            .register-input {
                text-align: left;
                z-index: 10000;
                height: 8.266667rem;
                .register-input_username {
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
                .register-input_password {
                    display: inline-block;
                    height: 1.733333rem;
                    width: 3.84rem;
                    border-bottom: solid 1px;
                    border-bottom-color: #ccc;
                    .user-password {
                        height: 19px;
                        margin: .933333rem .133333rem 0 0 ;
                        width: 100%;
                        outline: none;
                        border: none;
                        font-size: .373333rem;
                        color: #888;
                    }
                }
                .user-forget {
                    float: right;
                    display: inline-block;
                    width: 2.88rem;
                    height: 1.146667rem;
                    line-height: 1.146667rem;
                    margin-top: .453333rem;
                    text-align: center;
                    font-size: .32rem;
                    color: #687597;
                    border: solid 1px #687597;
                    border-radius: 22px;
                }
                .register-input_btn {
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
                .register-input_a {
                    color: #5b8bc3;
                    margin-left: 1.52rem;
                    text-decoration: underline;
                }
            }
            .register-hr {
                width: 7.2rem;
                color: #8A8A8A;
                margin-bottom: .266667rem;
                text-align: center;
                .register-line {
                    position: relative;
                    top: .373333rem;
                }
            }
            .register-others {
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


