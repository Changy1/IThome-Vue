<template>
    <div>
        <hotcomment-text v-for = '(item,index) in commentlist' :key= 'item.I' :info = 'item' :index = 'index'></hotcomment-text>
    </div>    
</template>

<script>
import HotcommentText from '@c/common/app-hotcomment/HotcommentText'

export default {
    data () {
        return {
            commentlist: []
        }
    },
    components: {
        HotcommentText
    },
    async created () {
        let result = await this.$http({
            url: 'ithome/api/comment/joinhotcommentget?Tag=hotcommentm&MaxSupport=342'
        })
        this.commentlist = result.Result
    }
}
</script>

<style lang="scss">

</style>
