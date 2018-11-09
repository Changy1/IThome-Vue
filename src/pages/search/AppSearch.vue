<template>
    <div>
        <search-header></search-header>
        <router-view></router-view>
    </div>
</template>


<script>
import SearchHeader from '@c/common/app-search/SearchHeader.vue'

export default {
    components: {
        SearchHeader
    }
}
</script>

<style lang="scss">

</style>
