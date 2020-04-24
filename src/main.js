import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式
import './assets/css/base.css'
// 引入 vue-lazyload 图片懒加载组件
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3, // 预加载高度
  loading: require('./assets/images/lazy.gif'), // 真实图片加载之前的一个替代图片
  attempt: 1 // 尝试加载真实图片的次数
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
