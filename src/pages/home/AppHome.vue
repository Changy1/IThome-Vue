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
            iteminfos: [],
            time: Date.now()
        }
    },
    methods: {
        async getFilms () {
            let result = await this.$http({
                url: `ithome/api/news/newslistpageget?Tag=&ot=${this.time}&page=0`
            })
            this.iteminfos = this.iteminfos.concat(result.Result)
            this.time =  parseInt(this.time) - 10000000 
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
        margin-top: .266667rem;
        overflow: hidden;
    }
</style>
