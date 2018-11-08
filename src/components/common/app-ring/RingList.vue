<template>
    <div class='ring-list'>
        <div class='rilist-type'>
            <span :class= '{active: item.type == type}' @click = 'type = item.type' v-for= 'item in rilist' :key = 'item.id'>{{ item.title }}</span>
        </div>
        <ring-item :type = 'type'></ring-item>
    </div>      
</template>

<script>
import RingItem from '@c/common/app-ring/RingItem.vue'

export default {
    components: {
        RingItem
    },
    data () {
        return {
            type: 1, 
            rilist: [
                { id: 1, title: '新回复', type : 0, url: 'https://quan.ithome.com/wap/api/tie/tielistget?columnID=0&type=0&orderTime=1541689286000'},
                { id: 2, title: '热帖', type : 1, url: 'https://quan.ithome.com/wap/api/tie/tielistget?columnID=0&type=3&visitCount=300'},
                { id: 3, title: '新发表', type : 2, url: 'https://quan.ithome.com/wap/api/tie/tielistget?columnID=0&type=1&orderTime=1541683128000'},
                { id: 4, title: '新发表', type : 3, url: 'https://quan.ithome.com/wap/api/tie/tielistget?columnID=0&type=5&orderTime=1484451659000&visitCount='},
            ]
        }
    }
}
</script>


<style lang="scss">
    .ring-list {
        margin-top: .32rem;
        background: #fff;
        .rilist-type {
            height: 1.28rem;
            line-height: 1.28rem;
            display: flex;
            justify-content: space-around;
            border-bottom: solid .026667rem #eee;
            span {
                position: relative;
                font-size: .426667rem;
                color: #666;  
            }
            .active {
                color: #d22222;
                &:after {
                    content: " ";
                    position: absolute;
                    height: .117333rem;
                    border-radius: .533333rem;
                    background: #d22222;
                    width: .32rem;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                }
            }
        }
    }
</style>
