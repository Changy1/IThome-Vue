<template>
    <div class='list'>
        <collect-item v-for = 'item in collect.info' :key = 'item.id' :info = 'item'></collect-item>
    </div> 
</template>

<script>
import CollectItem from '@c/common/app-collect/CollectItem'
import { mapState } from 'vuex';
export default {
    components: {
        CollectItem
    },
    computed: {
        ...mapState(['collect'])
    }
}
</script>

<style lang="scss" scoped>
    .list {
        position: relative;
        padding: 0 .48rem;
        overflow: hidden;
    } 
</style>

