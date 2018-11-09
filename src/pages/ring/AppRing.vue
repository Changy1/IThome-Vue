<template>
    <div class='ring'>
        <app-header :isRing = 'isRing' ></app-header>
        <ring-banner></ring-banner>
        <ring-list></ring-list>
    </div>    
</template>

<script>
import AppHeader from '@c/layout/AppHeader.vue'
import RingBanner from '@c/common/app-ring/RingBanner.vue'
import RingList from '@c/common/app-ring/RingList.vue'

export default {
    data () {
        return  {
            isRing: 'isRing'
        }
    },
    components: {
        AppHeader,
        RingBanner,
        RingList
    },
}
</script>


<style lang="scss">
    .ring {
        background: #f2f3f6;
        height: 100%;
        width: 100%;
    }
</style>
