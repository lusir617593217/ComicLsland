import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入 进度条组件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 如果不需要转圈配置如下代码，默认是 true
NProgress.configure({ showSpinner: false })

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () => import('../views/Classify')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail')
  },
  {
    path: '/hc',
    name: 'HC',
    component: () => import('../views/HC'),
    children: [
      {
        path: 'history',
        name: 'History',
        component: () => import('../views/HC/History')
      },
      {
        path: 'collection',
        name: 'Collection',
        component: () => import('../views/HC/Collection')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register')
  },
  {
    path: '/more',
    name: 'More',
    component: () => import('../views/More')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My')
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import('../views/Ranking')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search')
  },
  {
    path: '/search-result',
    name: 'SearchResult',
    component: () => import('../views/SearchResult')
  },
  {
    path: '/vip',
    name: 'Vip',
    component: () => import('../views/Vip')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  NProgress.start() // 进度条开始
  next()
})

// 全局后置路由守卫
router.afterEach(() => {
  NProgress.done() // 进度条消失
})

export default router
