<template>
    <div>
        <my-header></my-header>
        <collect-list></collect-list>
    </div>
</template>


<script>
import MyHeader from '@c/layout/MyHeader'
import CollectList from '@c/common/app-collect/CollectList'
export default {
    components: {
        MyHeader,
        CollectList
    }
}
</script>

<style lang="scss">

</style>
