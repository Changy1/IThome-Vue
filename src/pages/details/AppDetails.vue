<template>
    <div>
        <app-header :isDetails = 'isDetails'></app-header>
        <details-main></details-main>
    </div>    
</template>

<script>
import AppHeader from '@c/layout/AppHeader'
import DetailsMain from '@c/common/app-details/DetailsMain'
export default {
    data () {
        return {
            isDetails: 'isDetails'
        }
    },
    components: {
        AppHeader,
        DetailsMain
    }
}
</script>

<style lang="scss" scoped>

</style>
