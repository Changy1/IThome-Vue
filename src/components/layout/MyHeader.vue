<template>
    <div class='header'>
        <div class='header-box'>
            <a class='header-back'>
                <router-link to = '/home' class='header-btn'> 
                </router-link>
            </a>
            <div class='header-title'>
                <a
                v-for = 'item in titleli'
                :key = 'item.id'
                @click = 'id = item.id'
                :class = '{"header-active": item.id == id}'
                class ='header-go'>{{ item.title }}</a>
            </div>        
        </div>   
    </div>    
</template>

<script>
export default {
    data () {
        return {
            titleli: [
                { id : 1 , title: '新闻'},
                { id : 2 , title: '评论'},
                { id : 3 , title: '帖子'}
            ],
            id : 1
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        height: 1.44rem;
        .header-box {
            height: 1.333333rem;
            box-shadow: 0 .08rem .08rem 0 rgba(0,0,0,.05);
            padding-top: .288rem;
            padding-right: .096rem;
            padding-bottom: .064rem;
            background: #fff;
            width: 100%;
            .header-back{
                height: 0;
                width: 0;
                position: absolute;
                top:0;
                left:0;
                .header-btn{
                    outline: none;
                    height: 1.28rem;
                    width: 1.253333rem;
                    padding: .026667rem .16rem;
                    background: url('//img.ithome.com/m/images/review/return-btn.png') no-repeat;
                    background-position: center;
                    border: none;
                    background-size: .773333rem .773333rem;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }
            .header-title{
                display: flex;
                height: .773333rem;
                line-height: .773333rem;
                width: calc( 100% - 2.88rem );
                margin: 0 auto;
                justify-content: space-around;
                .header-active {
                    position: relative;
                    color: #d22222;
                    &::after {
                        content: '';
                        height: .08rem;
                        width: .32rem;
                        background: #d22222;
                        position: absolute;
                        bottom: -0.266667rem;
                        left: 0;
                        right: 0;
                        margin: 0 auto;
                        border-radius: .133333rem;
                    }
                }
            }
        }
    }
</style>
