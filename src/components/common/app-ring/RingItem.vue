<template>
    <div class='ring-item'>
        <ring-itemone></ring-itemone>
    </div>    
</template>

<script>
import RingItemone from '@c/common/app-ring/RingItemone.vue'

export default {
    components: {
        RingItemone
    },
    data () {
        return {
            url: [
                'https://quan.ithome.com/wap/api/tie/tielistget?columnID=0&type=0&orderTime=1541689286000',
                'https://quan.ithome.com/wap/api/tie/tielistget?columnID=0&type=3&visitCount=300',
                'https://quan.ithome.com/wap/api/tie/tielistget?columnID=0&type=1&orderTime=1541683128000',
                'https://quan.ithome.com/wap/api/tie/tielistget?columnID=0&type=5&orderTime=1484451659000&visitCount='
            ]
        }
    },
    watch: {
        type: {
            immediate: true,
            handler () { 
               
            }
        }
    },
    props: ['type']
}
</script>

<style lang="scss">
    .ring-item{
        padding: 0 .48rem;
    }
</style>
