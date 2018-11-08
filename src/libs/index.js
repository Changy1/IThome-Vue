import Vue from 'vue'

// Swiper的引入
import VueAwesomeSwiper from 'vue-awesome-swiper'

// axios
import ajax from '../util/axios'
 
import 'swiper/dist/css/swiper.css'

/* import VueCookies from 'vue-cookies' */
 
Vue.use(VueAwesomeSwiper)
/* Vue.use(VueCookies) */

Vue.prototype.$http = ajax      // 给Vue原型方法