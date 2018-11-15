<template>
    <div>
        <app-header></app-header>
        <div ref = 'root' class='scroll-hot'>
            <div>
                <hotcomment-text v-for = '(item,index) in commentlist' :key= 'item.I' :info = 'item' :index = 'index'></hotcomment-text>
            </div>
        </div>
        <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
            <div @click= "backTop" v-if = 'backshow' class='button-top animated'></div>
        </transition>
    </div>    
</template>

<script>
import AppHeader from '@c/layout/AppHeader.vue'
import HotcommentText from '@c/common/app-hotcomment/HotcommentText'
import scroll from '../../util/scroll.js'
export default {
    data () {
        return {
            commentlist: [],
            backshow: false,
            support: 342
        }
    },
    components: {
        HotcommentText,
        AppHeader
    },
    methods: {
        backTop () {
            this.scroll.scrollTo(0,0,500)
        },
        async getFilms () {
            let result = await this.$http({
                url: `ithome/api/comment/joinhotcommentget?Tag=hotcommentm&MaxSupport=${this.support}`
            })
            this.commentlist = this.commentlist.concat(result.Result) 
            this.support -= 40
        }
    },
    mounted () {
        this.getFilms()
        this.scroll = scroll({
            el: this.$refs.root,
            handler: this.getFilms.bind(this),
            onscroll: (y) => {
                this.backshow = (y < -200)
            }
        })
    }
}
</script>

<style lang="scss">
    .scroll-hot {
        height: calc(100vh - 2.613333rem);
        overflow: hidden;
    }
</style>
