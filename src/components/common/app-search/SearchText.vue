<template>
    <div class='search-place'>
        <div class='search-img'>
            <img :src = 'info.image'>
        </div>
        <div class="search-a">
            <p class='search-title'>{{ info.title }}</p>
            <p class='search-time'>{{ info.PostDateStr }}</p>
        </div>
    </div>
</template>


<script>
export default {
    props: ['info']
}

</script>

<style lang="scss">
    .search-place {
        margin: .64rem 0;
        position: relative;
        .search-img {
            display: inline-block;
            width: 31.2%;
            position: relative;
        }
        .search-a {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: 66%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .search-title {
                font-size: .426667rem;
                color: #333;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                position: relative;
                word-wrap: break-word;
                word-break: break-all;
            }
            .search-time {
                color: #99a2aa;
                font-size: .32rem;
            }
        }
    }
</style>
