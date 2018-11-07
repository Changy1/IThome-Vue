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
    props: ['iteminfos']
}
</script>

<style lang="scss">
    .list {
        position: relative;
        padding: 0 .48rem;
        overflow: hidden;
    } 
</style>
