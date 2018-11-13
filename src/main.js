import Vue from 'vue'
import App from './App.vue'

// 引入全局样式
import '@styles/main.scss'

// 引入flexible 移动端的适配
import '@libs/flexible'

//各种插件
import '@libs'

import router from './route'

import store from './store'
// 阻止Vue的提示
Vue.config.productionTip = false

// 根实例
new Vue({ 
  router,
  store,
  // 控制app里面放的什么内容
  render: h => h(App)
}).$mount('#app')



//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑             永无BUG