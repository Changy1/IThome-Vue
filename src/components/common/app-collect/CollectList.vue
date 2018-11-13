<template>
    <div class='list'>
        <collect-item></collect-item>
    </div> 
</template>

<script>
import CollectItem from '@c/common/app-collect/CollectItem'
export default {
    components: {
        CollectItem
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

