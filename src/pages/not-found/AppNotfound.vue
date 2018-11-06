<template>
    <div>
        <img class='not-found-img' src='http://img.ithome.com/file/images/404.png'>
        <p class='not-found-p'>不要慌！点击<router-link to = '/home'>返回首页</router-link></p>
    </div>    
</template>

<script>

export default {

}
</script>

<style lang="scss">
    .not-found-img{
        margin-top: .8rem;
    }
    .not-found-p {
        width: auto;
        margin: .533333rem 2.666667rem;
        a{
            color: lightseagreen;
        }
    }
</style>
