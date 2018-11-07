<template>
    <div ref='root' class='home'>
        <div>
            <app-banner></app-banner>
            <app-list :iteminfos = 'iteminfos'></app-list>
        </div>
    </div>    
</template>

<script>
import AppBanner from '@c/common/app-home/AppBanner'
import AppList from '@c/common/app-home/AppList'
import scroll from '../../util/scroll.js'
export default {
    components: {
        AppBanner,
        AppList
    },
    data () {
        return {
            iteminfos: []
        }
    },
    methods: {
        async getFilms () {
            let time = Date.now()
            let result = await this.$http({
                url: `ithome/api/news/newslistpageget?Tag=&ot=${time}&page=0`
            })
            this.iteminfos = this.iteminfos.concat(result.Result)
        }
    },
    mounted () {
        this.getFilms()
        this.scroll = scroll({
            el: this.$refs.root,
            handler: this.getFilms.bind(this),
            onscroll: (y) => {
                console.log(y)
            }
        })
    }
}
</script>

<style lang="scss">
    .home{
        height: 16rem;
        overflow: hidden;
    }
</style>
