<template>
    <div>
        <app-banner></app-banner>
        <app-list></app-list>
    </div>    
</template>

<script>
import AppBanner from '@c/common/app-home/AppBanner'
import AppList from '@c/common/app-home/AppList'

export default {
    components: {
        AppBanner,
        AppList
    }
}
</script>

<style lang="scss">

</style>
