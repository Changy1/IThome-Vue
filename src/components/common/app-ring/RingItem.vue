<template>
    <div class='ring-item'>
        <ring-itemone v-for = 'item in ringli' :key = 'item.Id' :info = 'item'></ring-itemone>
    </div>    
</template>

<script>
import RingItemone from '@c/common/app-ring/RingItemone.vue'
let time = Date.now()
export default {
    components: {
        RingItemone
    },
    data () {
        return {
            url: [
                `quan/wap/api/tie/tielistget?columnID=0&type=0&orderTime=${ time }`,
                'quan/wap/api/tie/tielistget?columnID=0&type=3&visitCount=350',
                `quan/wap/api/tie/tielistget?columnID=0&type=1&orderTime=${ time }`,
                `quan/wap/api/tie/tielistget?columnID=0&type=5&orderTime=${ time }&visitCount=`
            ],
            ringli: []
        }
    },
    watch: {
        type: {
            immediate: true,
            handler () { 
               this.ringli = []
               this.gitItem()
            }
        }
    },
    props: ['type'],
    methods: {
        async gitItem () {
            let res = await this.$http({
                url: this.url[this.type]
            })
            this.ringli = res.Result
        }
    }
}
</script>

<style lang="scss">
    .ring-item{
        padding: 0 .48rem;
    }
</style>
