<template>
    <div class='content'>
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
    .content {
        background: #f2f3f6;
        height: 100vh;
    }
</style>
