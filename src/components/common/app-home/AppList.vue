<template>
    <div class='list'>
       <app-item v-for = 'item in iteminfos' :key = 'item.newsid' :info = 'item'></app-item>
    </div>    
</template>

<script>
import AppItem from '@c/common/app-home/AppItem'

export default {
    components: {
        AppItem
    },
    data () {
        return {
            iteminfos: []
        }
    },
    async created () {
        let result = await this.$http({
            url: 'ithome/api/news/newslistpageget?Tag=&ot=1541503908000&page=0'
        })
        this.iteminfos = result.Result
    }
}
</script>

<style lang="scss">
    .list {
        position: relative;
        padding: 0 .48rem;
    } 
</style>
